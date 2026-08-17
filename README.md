<div align="center">

# <span style="color: #6366F1;">ResumeIQ 🧠</span>
### <span style="color: #6366F1;">*AI-Powered Resume Optimizer & Career Companion*</span>

---

[![React](https://img.shields.io/badge/React-18-6366F1?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Flask](https://img.shields.io/badge/Flask-Backend-6366F1?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
[![Gemini](https://img.shields.io/badge/AI-Gemini-6366F1?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)
[![Groq](https://img.shields.io/badge/AI-Groq_(Llama)-6366F1?style=for-the-badge&logo=meta&logoColor=white)](https://groq.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-6366F1?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/atlas)
[![Firebase](https://img.shields.io/badge/Auth-Firebase-6366F1?style=for-the-badge&logo=firebase&logoColor=white)](https://firebase.google.com/)

**Bridging the gap between your resume and your dream job — with AI that reads both like a recruiter would.**

</div>

---

### 🔗 Live Demo
> **🌐 Visit App:** `https://symphonious-semifreddo-22bac5.netlify.app/`

---

### 📑 Table of Contents

* [🧠 Overview](#-overview)
* [🎯 Why ResumeIQ?](#-why-resumeiq)
* [✨ Key Features](#-key-features)
* [💻 Technology Stack](#-technology-stack)
* [🏗️ System Architecture](#-system-architecture)
* [🔄 Request Flow — Resume Analysis](#-request-flow--resume-analysis)
* [🖼️ Screenshots](#-screenshots)
* [🧩 Feature Deep Dive](#-feature-deep-dive)
* [🗺️ User Journey](#-user-journey)
* [🔌 API Reference](#-api-reference)
* [🗂️ Project Structure](#-project-structure)
* [⚙️ Developer Setup](#-developer-setup)
* [🔮 Future Outcomes & Roadmap](#-future-outcomes--roadmap)
* [🤝 Contributing](#-contributing)
* [📜 License](#-license)

---

## 🧠 Overview

**ResumeIQ** is a full-stack, AI-powered platform built to solve one specific problem: most job seekers get rejected at the screening stage not because they lack the skills, but because their resume never speaks the job description's language in the first place.

ResumeIQ closes that gap. Upload a resume, paste a job description, and within seconds get a match score, a section-by-section breakdown of what's working and what isn't, and a concrete action plan — missing skills, suggested courses, and projects worth adding. Beyond the one-time analysis, it becomes a full career companion: a job search engine matched to your resume, an application tracker with follow-up reminders, mock interview practice, and an AI Career Assistant that already knows your resume and your job history when you ask it a question.

---

## 🎯 Why ResumeIQ?

| Area | Traditional Approach | 🚀 ResumeIQ |
| :--- | :--- | :--- |
| **Resume feedback** | Guesswork, or a senior's one-off opinion | AI match score against the *exact* job description |
| **Job search** | Separate tabs, separate sites | Matched listings inside the same dashboard |
| **Application tracking** | Spreadsheet you forget to update | Built-in tracker with auto follow-up reminders |
| **Interview prep** | Generic question banks | Mock interviews grounded in your actual resume |
| **Career guidance** | Search engine + hope | Context-aware AI chat that knows your data |

---

## ✨ Key Features

| 🛠️ Feature | 📝 Description |
| :--- | :--- |
| **📄 Resume–JD Analysis** | Deep, section-by-section AI comparison of resume vs. job description, with a computed match score. |
| **🎯 Skill Gap Detection** | Highlights matched and missing skills, with course and project suggestions to close the gap. |
| **📊 Report Records** | Every past analysis saved and revisitable — track how your resume improves over time. |
| **💼 Job Search** | Live job listings, filterable by keyword and seniority, plus a "Best matches for you" mode ranked against your resume. |
| **📌 My Jobs Tracker** | Saved / Applied / Interviewing / Rejected / Offer pipeline, with notes, interview scheduling, and auto follow-up reminders. |
| **🎤 Interview Prep** | AI-driven mock interview sessions with a post-session performance report. |
| **📄 PDF Reports** | Download your resume analysis as a polished PDF — for offline reference or sharing. |
| **💬 Career Assistant** | A Groq-powered chatbot grounded in your resume and job activity — answers "what should I do next?" with real context. |
| **🌓 Light / Dark Mode** | Full theme system across the entire app, persisted per user. |
| **🔒 Secure Auth** | Firebase Authentication (Email/Password + Google) with protected routes. |

---

## 💻 Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | ![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) | Component-driven, responsive UI. |
| **UI Library** | ![MUI](https://img.shields.io/badge/MUI-007FFF?style=flat-square&logo=mui&logoColor=white) | Design system, theming (light/dark), and layout primitives. |
| **Backend** | ![Flask](https://img.shields.io/badge/Flask-000000?style=flat-square&logo=flask&logoColor=white) | REST API, request routing, and orchestration logic. |
| **Resume Analysis AI** | ![Gemini](https://img.shields.io/badge/Google_Gemini-4285F4?style=flat-square&logo=google&logoColor=white) | Section-by-section resume ↔ job description comparison. |
| **Career Assistant AI** | ![Groq](https://img.shields.io/badge/Groq_Cloud-F34F29?style=flat-square) | Ultra-low-latency Llama inference for the in-app chat assistant. |
| **Database** | ![MongoDB](https://img.shields.io/badge/MongoDB_Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white) | Cloud-hosted storage for resumes, jobs, tracker, and sessions. |
| **Authentication** | ![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black) | Email/password + Google sign-in, protected routing. |
| **Scheduling** | ![APScheduler](https://img.shields.io/badge/APScheduler-Background_Jobs-6366F1?style=flat-square) | Periodic job-board refresh and stale-listing cleanup. |
| **Language** | ![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | Backend orchestration + frontend logic. |

---

## 🏗️ System Architecture

ResumeIQ follows a decoupled **Client–Server architecture**, with two independent AI providers handling distinct responsibilities — Gemini for deep document analysis, Groq for fast conversational inference.

```mermaid
graph TD
    User((User)) <--> |React / MUI| Frontend[Frontend UI Layer]
    Frontend <--> |REST API| Backend[Flask Server]
    subgraph AI["AI Providers"]
    Backend <--> |Resume × JD Analysis| Gemini[Google Gemini]
    Backend <--> |Career Assistant Chat| Groq[Groq · Llama]
    end
    Backend <--> |Auth| Firebase[(Firebase Auth)]
    Backend <--> |Read/Write| DB[(MongoDB Atlas)]
    Scheduler[APScheduler] -.->|refresh every 6h| Backend
```

### 🗄️ Data Model (MongoDB Collections)

```mermaid
erDiagram
    RESUMES {
        string email PK
        string resume_text
        array embedding
        datetime updated_at
    }
    JOBS {
        string _id PK
        string title
        string company
        string seniority
        array skills
        boolean is_active
    }
    TRACKER {
        string email PK
        string job_id PK
        string status
        string notes
        datetime follow_up_date
        datetime interview_date
    }
    INTERVIEW_SESSIONS {
        string session_id PK
        string email
        string mode
        array messages
        object report
    }
```

---

## 🔄 Request Flow — Resume Analysis

```mermaid
sequenceDiagram
    participant U as User
    participant F as Frontend (React)
    participant B as Backend (Flask)
    participant G as Gemini

    U->>F: Uploads resume + pastes Job Description
    F->>B: POST /upload_resume
    B->>B: Extract text, clean JD
    B->>G: Send resume + JD + engineered prompt
    G-->>B: Structured match score + suggestions
    B->>B: Store resume + embedding (MongoDB)
    B-->>F: Analysis payload
    F->>U: Render match score, gaps, and action plan
```

---

## 🖼️ Screenshots

> Replace the placeholders below with real screenshots — drop your image files into a `/screenshots` folder in the repo root and update the paths.

<div align="center">

### 🏠 Home Page
<img src="./screenshots/home.png" alt="ResumeIQ Home Page" width="800"/>

<br/><br/>

### 🔑 Login
<img src="./screenshots/login.png" alt="Login Page" width="800"/>

<br/><br/>

### 📝 Sign Up
<img src="./screenshots/signup.png" alt="Sign Up Page" width="800"/>

<br/><br/>

### 📊 Dashboard / Welcome
<img src="./screenshots/dashboard.png" alt="Dashboard" width="800"/>

<br/><br/>

### 📤 Upload Resume + Job Description
<img src="./screenshots/upload.png" alt="Upload Resume and JD" width="800"/>

<br/><br/>

### 🗂️ Records
<img src="./screenshots/records.png" alt="Report Records" width="800"/>

<br/><br/>

### 💼 Job Search
<img src="./screenshots/job-search.png" alt="Job Search" width="800"/>

<br/><br/>

### 📌 My Jobs
<img src="./screenshots/my-jobs.png" alt="My Jobs Tracker" width="800"/>

<br/><br/>

### 🎤 Interview Prep
<img src="./screenshots/interview-prep.png" alt="Interview Prep" width="800"/>

</div>

---

## 🧩 Feature Deep Dive

### 📄 Resume–JD Analysis
Gemini performs a section-by-section comparison of the uploaded resume against the pasted job description — Education, Skills, Projects, and Experience are each scored individually, then rolled into an overall match percentage. The output includes matched skills, missing skills, and concrete suggestions (courses to take, projects to build) to close the gap.

### 💼 Job Search & Matching
Live job listings are fetched and classified by seniority (junior / mid / senior) with extracted skill tags. A "Best matches for you" mode re-ranks the same listings against your stored resume embedding, so the jobs at the top are the ones you're most likely to get shortlisted for.

### 📌 My Jobs — Application Tracker
Every job you Save or Apply to lands here, organized into **Saved → Applied → Interviewing → Rejected → Offer** stages. Moving a job to *Applied* automatically schedules a 7-day follow-up reminder (adjustable or removable); moving it to *Interviewing* opens a quick dialog to log the interview date and prep notes. Free-text notes autosave on blur.

### 🎤 Interview Prep
A guided mock-interview session — either grounded in a specific job's context or a custom topic — that asks a sequence of questions, accepts typed or transcribed voice answers, and ends with an AI-generated performance report.

### 💬 Career Assistant
A persistent chat widget (powered by Groq for near-instant responses) that's automatically grounded in your resume text and tracked job data — so "what should I do next?" gets a real, personalized answer instead of a generic one.

---

## 🗺️ User Journey

| Stage | User Goal | Touchpoint |
| :--- | :--- | :--- |
| **1. Discovery** | Understand the value prop | Landing Page hero + feature sections |
| **2. Entry** | Create an account | Sign Up (email or Google) |
| **3. Upload** | Get the first analysis | Upload page (resume + JD) |
| **4. Insight** | Understand the gaps | Result page — match score & suggestions |
| **5. Action** | Find & track relevant roles | Job Search → My Jobs |
| **6. Preparation** | Get interview-ready | Interview Prep mock sessions |
| **7. Guidance** | Ask "what next?" anytime | Career Assistant chat |

---

## 🔌 API Reference

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/upload_resume` | Upload resume + JD, get AI analysis. |
| `GET` | `/api/jobs` | List jobs, filterable by keyword/seniority. |
| `GET` | `/api/jobs/matches` | Jobs ranked against the user's resume. |
| `POST` | `/api/tracker` | Save/update a job's tracker status. |
| `GET` | `/api/tracker` | Fetch tracked jobs for a status tab. |
| `GET` | `/api/tracker/status` | Lightweight `{job_id: status}` map for a user. |
| `PATCH` | `/api/tracker/<job_id>/notes` | Save a note on a tracked job. |
| `PATCH` | `/api/tracker/<job_id>/interview` | Save interview date/notes. |
| `PATCH` | `/api/tracker/<job_id>/followup` | Adjust or clear the follow-up reminder. |
| `DELETE` | `/api/tracker/<job_id>` | Remove a tracked job. |
| `POST` | `/api/interview/start` | Begin a mock interview session. |
| `POST` | `/api/interview/<id>/answer` | Submit an answer, get the next question. |
| `GET` | `/api/interview/<id>/report` | Fetch the final performance report. |
| `POST` | `/api/assistant/chat` | Chat with the Career Assistant. |

---

## 🗂️ Project Structure

```
ResumeIQ/
│
├── frontend/
│   └── src/
│       ├── pages/          # Home, Login, Signup, Upload, Result, Records,
│       │                   # JobSearch, MyJobs, Welcome, InterviewPrep
│       ├── components/     # Navbar, Logo, Features, TourGuideBot, etc.
│       ├── theme/          # Light/dark theme system (ThemeContext.js)
│       └── firebase.js
│
├── backend/
│   ├── app.py               # Flask entry point & all routes
│   ├── tracker_store.py     # Job tracker persistence logic
│   ├── job_store.py         # Job listings storage
│   ├── job_fetcher.py       # External job board ingestion
│   ├── job_classifier.py    # Seniority + skill extraction
│   ├── match_score.py       # Resume ↔ job embedding similarity
│   ├── interview_engine.py  # Mock interview session logic
│   ├── assistant_engine.py  # Career Assistant (Groq) logic
│   └── LLMHandler.py        # Gemini analysis + embeddings
│
└── README.md
```

---

## ⚙️ Developer Setup

### Prerequisites
- **Node.js 18+**
- **Python 3.9+**
- **MongoDB Atlas** connection URI
- **Firebase** project (Auth enabled)
- **Google Gemini API key**
- **Groq API key**

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/ResumeIQ.git
cd ResumeIQ
```

### 2. Backend setup
```bash
cd backend
python -m venv venv
# Mac/Linux
source venv/bin/activate
# Windows
venv\Scripts\activate

pip install -r requirements.txt
```

Create a `.env` file inside `/backend`:
```
MONGO_URI=your_mongodb_atlas_uri
GEMINI_API_KEY=your_gemini_api_key
GROQ_API_KEY=your_groq_api_key
```

Run the backend:
```bash
python app.py
```

### 3. Frontend setup
```bash
cd ../frontend
npm install
```

Create a `.env` in `/frontend`:
```
REACT_APP_API_BASE=http://127.0.0.1:5000
```

Run the frontend:
```bash
npm start
```

The frontend runs on `http://localhost:3000`, backend on `http://127.0.0.1:5000`.

---

## 🔮 Future Outcomes & Roadmap

ResumeIQ is evolving from a resume analyzer into a complete AI-driven placement companion. Planned directions:

### 🛠️ Near-term
- [ ] Persistent chat history for the Career Assistant (currently resets on refresh).
- [ ] Full onboarding tour across every authenticated page, not just Home.
- [ ] Multi-resume support with version history, so users can maintain resumes for different roles.
- [ ] Smarter, editable follow-up scheduling based on company response patterns.

### 🧠 Mid-term
- [ ] Inline resume rewriting — AI edits the resume directly instead of only describing changes.
- [ ] Browser extension to analyze any job posting in one click, from any site.
- [ ] Mock interview voice mode with real-time speech feedback (tone, pacing, filler words).
- [ ] LinkedIn/Naukri-style one-click apply integration from the Job Search tab.

### 📊 Long-term
- [ ] Application funnel analytics — conversion rates across saved → applied → interview → offer.
- [ ] Placement-cell / institution dashboards for tracking student outcomes at scale.
- [ ] Predictive skill-gap alerts based on trending job market data.
- [ ] Peer benchmarking — see how your resume match score compares anonymously to others applying for similar roles.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for details.

---

### 👤 Author

**Anuj Upadhayay**

<div align="center">

**If ResumeIQ helped you, consider giving the repo a ⭐ — it means a lot!**

</div>
