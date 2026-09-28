import os
import json
import time
import traceback

from dotenv import load_dotenv
from google import genai
from google.genai import types, errors


# ---------------------------------------------------------------------------
# Environment / Gemini configuration
# ---------------------------------------------------------------------------

env_path = os.path.join(os.path.dirname(__file__), ".env")
load_dotenv(dotenv_path=env_path)

api_key = os.getenv("GEMINI_API_KEY")

if not api_key:
    raise ValueError("GEMINI_API_KEY not found in environment variables")

client = genai.Client(api_key=api_key)

# Gemini models
EMBEDDING_MODEL = "gemini-embedding-001"
MODEL_NAME = "gemini-3.6-flash"


# ---------------------------------------------------------------------------
# Response schema
# ---------------------------------------------------------------------------

RESPONSE_SCHEMA = {
    "type": "object",
    "properties": {
        "executive_summary": {
            "type": "string"
        },

        "resume_score": {
            "type": "integer"
        },

        "resume_score_comment": {
            "type": "string"
        },

        "match_percentage": {
            "type": "integer"
        },

        "ats_score": {
            "type": "integer"
        },

        "strengths": {
            "type": "array",
            "items": {
                "type": "string"
            }
        },

        "improvements": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "point": {
                        "type": "string"
                    },
                    "why_it_matters": {
                        "type": "string"
                    },
                },
                "required": [
                    "point",
                    "why_it_matters"
                ],
            },
        },

        "profile_review": {
            "type": "string"
        },

        "skills": {
            "type": "object",
            "properties": {
                "current_technical": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },

                "current_soft": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },

                "current_domain": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },

                "missing": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },

                "proficiency_note": {
                    "type": "string"
                },
            },

            "required": [
                "current_technical",
                "current_soft",
                "current_domain",
                "missing",
                "proficiency_note",
            ],
        },

        "experience_analysis": {
            "type": "string"
        },

        "education_review": {
            "type": "string"
        },

        "suggested_projects": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "title": {
                        "type": "string"
                    },

                    "description": {
                        "type": "string"
                    },

                    "tools": {
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                },

                "required": [
                    "title",
                    "description",
                    "tools"
                ],
            },
        },

        "courses": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string"
                    },

                    "platform": {
                        "type": "string"
                    },

                    "reason": {
                        "type": "string"
                    },
                },

                "required": [
                    "name",
                    "platform",
                    "reason"
                ],
            },
        },

        "motivation_tip": {
            "type": "string"
        },
    },

    "required": [
        "executive_summary",
        "resume_score",
        "resume_score_comment",
        "match_percentage",
        "ats_score",
        "strengths",
        "improvements",
        "profile_review",
        "skills",
        "experience_analysis",
        "education_review",
        "suggested_projects",
        "courses",
        "motivation_tip",
    ],
}


# ---------------------------------------------------------------------------
# Embeddings
# ---------------------------------------------------------------------------

def get_embedding(text: str) -> list[float] | None:
    """
    Convert text into an embedding vector for resume/job similarity matching.
    """

    try:
        if not text:
            return None

        # Keep embedding input reasonably sized.
        truncated = text[:8000]

        response = client.models.embed_content(
            model=EMBEDDING_MODEL,
            contents=truncated,
        )

        if not response.embeddings:
            print("[Embedding error]: Gemini returned no embeddings.")
            return None

        return response.embeddings[0].values

    except Exception as e:
        print("[Embedding error]:", e)
        traceback.print_exc()
        return None


# ---------------------------------------------------------------------------
# Prompt
# ---------------------------------------------------------------------------

def create_prompt(
    resume_text,
    job_description_text,
    job_title,
    experience_level
):
    prompt = f"""
You are a senior career coach, professional resume writer, and ATS
optimization expert with 15+ years of experience across technology,
product, and business roles.

Analyze the candidate's resume against the target role below.

Be specific and concrete. Cite actual details from the resume such as:
- technologies
- numbers
- project names
- job titles
- achievements
- certifications
- education

Do not invent experience, skills, projects, certifications, or achievements.

Be honest about weaknesses while keeping the tone constructive and
encouraging.

Target Role:
{job_title}

Experience Level:
{experience_level}


SCORING GUIDANCE

resume_score:
Overall resume quality including writing, structure, clarity, relevance,
and impact. Score from 0 to 100.

match_percentage:
How well the resume aligns with THIS specific job description.
Score from 0 to 100.

ats_score:
How well an Applicant Tracking System would parse and understand the
resume. Score from 0 to 100.

Do not default to round numbers such as 70, 80, or 90.
Give differentiated scores based on the actual resume.


CONTENT GUIDANCE

strengths:
Provide 5-7 specific, evidence-based strengths.
Reference actual resume content.

improvements:
Provide 5-7 concrete improvements.

Each improvement must contain:
- point
- why_it_matters

Explain both the issue and its practical impact.

skills.current_technical:
Technical skills actually evidenced in the resume.

skills.current_soft:
Soft skills actually evidenced in the resume.

skills.current_domain:
Domain knowledge actually evidenced in the resume.

skills.missing:
Skills that the job description requires or strongly implies but
which are absent or insufficiently evidenced in the resume.

Do not claim a skill is missing if it is clearly present.

suggested_projects:
Suggest 2-4 realistic portfolio projects targeting missing skills.

Each project should contain:
- title
- description
- tools

courses:
Suggest 5-7 real, well-known courses or certifications from sources such
as Coursera, freeCodeCamp, Udemy, LinkedIn Learning, or official vendor
certifications.

Do not invent course names.

motivation_tip:
Provide a short, warm, specific closing note tailored to the candidate.
Avoid generic motivational filler.


IMPORTANT OUTPUT RULE

Return ONLY valid JSON matching the provided schema.

Do not return:
- Markdown
- code fences
- explanations outside JSON
- comments
- headings outside JSON


CANDIDATE RESUME:

{resume_text}


JOB DESCRIPTION:

{job_description_text}
"""

    return prompt.strip()


# ---------------------------------------------------------------------------
# LLM analysis
# ---------------------------------------------------------------------------

def analyze_with_llm(
    resume_text,
    job_description_text,
    job_title,
    experience_level
):
    """
    Generate structured resume analysis using Gemini.

    Temporary Gemini errors such as 503/429 are retried a small number
    of times. Permanent client errors are not repeatedly retried.
    """

    prompt = create_prompt(
        resume_text,
        job_description_text,
        job_title,
        experience_level
    )

    # Keep this small because the google-genai SDK already has its own
    # retry behavior for transient errors.
    max_retries = 2

    for attempt in range(max_retries + 1):

        try:
            print(
                f"[Gemini] Generating analysis "
                f"(model={MODEL_NAME}, attempt={attempt + 1}/{max_retries + 1})"
            )

            response = client.models.generate_content(
                model=MODEL_NAME,
                contents=prompt,
                config=types.GenerateContentConfig(
                    response_mime_type="application/json",
                    response_schema=RESPONSE_SCHEMA,
                    temperature=0.2,
                ),
            )

            # ---------------------------------------------------------------
            # Validate response
            # ---------------------------------------------------------------

            if response is None:
                raise ValueError("Gemini returned None.")

            if not response.text:
                raise ValueError("Gemini returned an empty response.")

            print("[Gemini] Response received successfully.")

            # ---------------------------------------------------------------
            # Parse JSON
            # ---------------------------------------------------------------

            try:
                result = json.loads(response.text)
            except json.JSONDecodeError:
                print("[Gemini] Invalid JSON returned:")
                print(response.text[:2000])
                raise

            # ---------------------------------------------------------------
            # Basic validation
            # ---------------------------------------------------------------

            if not isinstance(result, dict):
                raise ValueError(
                    "Gemini response is not a JSON object."
                )

            if "error" in result:
                print("[Gemini] Model returned an error:", result)
                return result

            print("[Gemini] Resume analysis generated successfully.")

            return result

        # -------------------------------------------------------------------
        # Temporary server errors
        # -------------------------------------------------------------------

        except errors.ServerError as e:

            print(
                f"[Gemini ServerError] "
                f"attempt={attempt + 1}/{max_retries + 1}: {e}"
            )

            # Retry only if attempts remain.
            if attempt < max_retries:

                # 2 sec, then 4 sec.
                wait_time = 2 ** (attempt + 1)

                print(
                    f"[Gemini] Temporary server error. "
                    f"Retrying in {wait_time} seconds..."
                )

                time.sleep(wait_time)
                continue

            traceback.print_exc()

            return {
                "error": (
                    "Gemini AI is temporarily unavailable because "
                    "the model is experiencing high demand. "
                    "Please try again in a few minutes."
                ),
                "error_type": "gemini_unavailable",
                "retryable": True,
            }

        # -------------------------------------------------------------------
        # Client errors: 400, 401, 403, 404, etc.
        # -------------------------------------------------------------------

        except errors.ClientError as e:

            print("[Gemini ClientError]:", e)
            traceback.print_exc()

            return {
                "error": (
                    "Gemini could not process the request. "
                    "Please check the AI configuration and try again."
                ),
                "error_type": "gemini_client_error",
                "retryable": False,
            }

        # -------------------------------------------------------------------
        # JSON parsing errors
        # -------------------------------------------------------------------

        except json.JSONDecodeError as e:

            print("[Gemini JSON error]:", e)
            traceback.print_exc()

            return {
                "error": (
                    "The AI returned an invalid analysis response. "
                    "Please try again."
                ),
                "error_type": "invalid_ai_response",
                "retryable": True,
            }

        # -------------------------------------------------------------------
        # Any other unexpected error
        # -------------------------------------------------------------------

        except Exception as e:

            print("[LLM unexpected error]:", e)
            traceback.print_exc()

            return {
                "error": (
                    "An unexpected error occurred while generating "
                    "the resume analysis. Please try again."
                ),
                "error_type": "llm_error",
                "retryable": True,
            }

    # Should never normally reach here.
    return {
        "error": "Unable to generate resume analysis.",
        "error_type": "unknown",
        "retryable": True,
    }
