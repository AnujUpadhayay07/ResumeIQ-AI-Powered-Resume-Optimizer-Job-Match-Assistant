// src/pages/Home.js
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import {
  Container,
  Typography,
  Button,
  Box,
  Chip,
  Stack,
  LinearProgress,
  useTheme,
  alpha,
} from "@mui/material";
import { ReactTyped } from "react-typed";
import { Link as RouterLink } from "react-router-dom";
import Features from "../components/Features";
import PremiumCard from "../components/PremiumCard";
import Footer from "../components/Footer";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TourGuideBot from "../components/TourGuideBot";
import {
  HiOutlineArrowUpTray,
  HiOutlineClipboardDocumentCheck,
  HiOutlineRocketLaunch,
  HiOutlineDocumentMagnifyingGlass,
  HiOutlineArchiveBox,
  HiOutlineBriefcase,
  HiOutlineClipboardDocumentList,
  HiOutlineMicrophone,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";
import { gradients } from "../theme/ThemeContext";

const steps = [
  {
    eyebrow: "01",
    icon: <HiOutlineArrowUpTray size={22} />,
    title: "Upload your resume",
    desc: "Paste it or drop a PDF — takes a few seconds.",
  },
  {
    eyebrow: "02",
    icon: <HiOutlineClipboardDocumentCheck size={22} />,
    title: "Add the job description",
    desc: "We compare your resume against the exact role.",
  },
  {
    eyebrow: "03",
    icon: <HiOutlineRocketLaunch size={22} />,
    title: "Get your action plan",
    desc: "Matched skills, gaps, and what to fix — instantly.",
  },
];


const platformFeatures = [
  {
    icon: <HiOutlineDocumentMagnifyingGlass size={22} />,
    title: "Resume Analysis",
    desc: "Deep AI comparison of your resume against any job description.",
  },
  {
    icon: <HiOutlineArchiveBox size={22} />,
    title: "Report Records",
    desc: "Every past analysis saved — track how your score improves over time.",
  },
  {
    icon: <HiOutlineBriefcase size={22} />,
    title: "Job Search",
    desc: "Matched listings pulled straight into your dashboard.",
  },
  {
    icon: <HiOutlineClipboardDocumentList size={22} />,
    title: "My Jobs Tracker",
    desc: "Keep tabs on every application — saved, applied, in progress.",
  },
  {
    icon: <HiOutlineMicrophone size={22} />,
    title: "Interview Prep",
    desc: "Practice with mock interviews before the real thing.",
  },
  {
    icon: <HiOutlineChatBubbleLeftRight size={22} />,
    title: "Career Assistant",
    desc: "An AI chat that knows your resume and suggests the next best step.",
  },
];

export default function Home() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.palette.background.default,
        position: "relative",
        transition: "background-color 0.3s ease",
      }}
    >
      
      <Box sx={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
        <Box
          sx={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${theme.custom?.glow1 || alpha(theme.palette.primary.main, 0.18)}, transparent 70%)`,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: -160,
            left: -160,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, isDark ? 0.14 : 0.09)}, transparent 70%)`,
          }}
        />
      </Box>

      <Navbar />

      {/* ---------- Hero ---------- */}
      <Box sx={{ position: "relative", zIndex: 1, px: 2, pt: { xs: 7, md: 10 }, pb: { xs: 7, md: 8 } }}>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            textAlign: { xs: "center", md: "left" },
            gap: { xs: 6, md: 5 },
          }}
        >
          <Box
            sx={{
              flex: 1,
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(18px)",
              transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <Chip
              icon={<AutoAwesomeIcon sx={{ color: theme.palette.primary.main + " !important" }} />}
              label="AI-Powered Resume Intelligence"
              sx={{
                mb: 3,
                px: 1,
                color: theme.custom?.chipText,
                background: theme.custom?.chipBg,
                border: `1px solid ${theme.palette.divider}`,
                fontWeight: 600,
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                letterSpacing: "-0.03em",
                fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.2rem" },
                color: theme.palette.text.primary,
                mb: 1,
                lineHeight: 1.15,
              }}
            >
              Land interviews with a{" "}
              <Box component="span" sx={{ color: theme.palette.primary.main }}>
                smarter resume
              </Box>
            </Typography>

            <Box sx={{ minHeight: "2.2rem", mb: 3 }}>
              <ReactTyped
                strings={["AI-Powered Resume Insights", "Job Matching Made Easy", "Optimize. Analyze. Succeed."]}
                typeSpeed={40}
                backSpeed={50}
                loop
                style={{ fontSize: "1.2rem", color: theme.palette.text.secondary, fontWeight: 500 }}
              />
            </Box>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent={{ xs: "center", md: "flex-start" }}>
              <Button
                component={RouterLink}
                to="/login"
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                size="large"
                sx={{
                  background: theme.palette.primary.main,
                  color: "#fff",
                  fontWeight: 700,
                  px: 3.5,
                  py: 1.2,
                  borderRadius: "10px",
                  textTransform: "none",
                  fontSize: "1rem",
                  boxShadow: `0 8px 20px ${alpha(theme.palette.primary.main, 0.35)}`,
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    background: "#4f46e5",
                    boxShadow: `0 12px 28px ${alpha(theme.palette.primary.main, 0.45)}`,
                  },
                }}
              >
                Get Started Free
              </Button>
              <Button
                component={RouterLink}
                to="/about"
                variant="outlined"
                size="large"
                sx={{
                  borderColor: theme.palette.divider,
                  color: theme.palette.text.primary,
                  fontWeight: 600,
                  px: 3.5,
                  py: 1.2,
                  borderRadius: "10px",
                  textTransform: "none",
                  fontSize: "1rem",
                  transition: "transform 0.2s ease, border-color 0.2s ease, background 0.2s ease",
                  "&:hover": {
                    borderColor: theme.palette.primary.main,
                    background: theme.custom?.glass,
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Learn More
              </Button>
            </Stack>

            <Stack direction="row" spacing={3} mt={5} justifyContent={{ xs: "center", md: "flex-start" }} flexWrap="wrap">
              {[["10K+", "Resumes analyzed"], ["92%", "Avg. match accuracy"], ["4.8/5", "User rating"]].map(([stat, label]) => (
                <Box key={label} sx={{ textAlign: { xs: "center", md: "left" } }}>
                  <Typography sx={{ fontWeight: 800, fontSize: "1.35rem", color: theme.palette.text.primary }}>{stat}</Typography>
                  <Typography sx={{ fontSize: "0.82rem", color: theme.palette.text.secondary }}>{label}</Typography>
                </Box>
              ))}
            </Stack>
          </Box>

          {/* Product mockup card */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              width: "100%",
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0) scale(1)" : "translateY(24px) scale(0.98)",
              transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.15s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.15s",
            }}
          >
            <Box sx={{ position: "relative", width: { xs: "100%", sm: 360 }, maxWidth: 360 }}>
              <Box
                sx={{
                  position: "absolute",
                  top: -16,
                  right: -12,
                  display: { xs: "none", sm: "flex" },
                  alignItems: "center",
                  gap: 0.7,
                  background: theme.custom?.glass,
                  backdropFilter: "blur(10px)",
                  borderRadius: "999px",
                  px: 1.5,
                  py: 0.7,
                  boxShadow: theme.custom?.cardShadow,
                  border: `1px solid ${theme.custom?.glassBorder}`,
                  zIndex: 2,
                }}
              >
                <TrendingUpIcon sx={{ fontSize: 17, color: "#16a34a" }} />
                <Typography sx={{ fontSize: "0.78rem", fontWeight: 700, color: theme.palette.text.primary }}>+38% shortlist rate</Typography>
              </Box>

              <Box
                sx={{
                  background: theme.custom?.glass,
                  backdropFilter: "blur(16px)",
                  borderRadius: "18px",
                  border: `1px solid ${alpha(theme.palette.primary.main, isDark ? 0.22 : 0.16)}`,
                  boxShadow: theme.custom?.cardShadow,
                  p: 3,
                  transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: `${theme.custom?.cardShadow}, 0 0 0 1px ${alpha(theme.palette.primary.main, 0.2)}`,
                  },
                }}
              >
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2.2}>
                  <Typography sx={{ fontWeight: 700, color: theme.palette.text.primary, fontSize: "0.9rem" }}>Resume Match Score</Typography>
                  <Chip label="Live analysis" size="small" sx={{ background: "rgba(16,185,129,0.15)", color: "#10b981", fontWeight: 600, fontSize: "0.68rem" }} />
                </Stack>

                <Box sx={{ textAlign: "center", mb: 2.2 }}>
                  <Typography sx={{ fontSize: "2.8rem", fontWeight: 800, color: theme.palette.primary.main, lineHeight: 1 }}>87%</Typography>
                  <Typography sx={{ fontSize: "0.78rem", color: theme.palette.text.secondary }}>match with Job Description</Typography>
                </Box>

                <Stack spacing={1.4}>
                  {[["React.js", 95], ["System Design", 78], ["Cloud (AWS)", 62]].map(([skill, val]) => (
                    <Box key={skill}>
                      <Stack direction="row" justifyContent="space-between" mb={0.5}>
                        <Typography sx={{ fontSize: "0.78rem", color: theme.palette.text.primary, fontWeight: 600 }}>{skill}</Typography>
                        <Typography sx={{ fontSize: "0.75rem", color: theme.palette.text.secondary }}>{val}%</Typography>
                      </Stack>
                      <LinearProgress
                        variant="determinate"
                        value={val}
                        sx={{
                          height: 6,
                          borderRadius: 4,
                          backgroundColor: isDark ? "rgba(255,255,255,0.08)" : "#eef0fe",
                          "& .MuiLinearProgress-bar": { borderRadius: 4, backgroundColor: theme.palette.primary.main },
                        }}
                      />
                    </Box>
                  ))}
                </Stack>

                <Stack direction="row" spacing={1} mt={2.2} flexWrap="wrap" useFlexGap>
                  {["+3 missing skills", "2 courses suggested"].map((t) => (
                    <Chip
                      key={t}
                      icon={<CheckCircleIcon sx={{ fontSize: 14, color: theme.palette.primary.main + " !important" }} />}
                      label={t}
                      size="small"
                      sx={{ background: theme.custom?.chipBg, color: theme.custom?.chipText, fontWeight: 600, fontSize: "0.7rem" }}
                    />
                  ))}
                </Stack>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ---------- Features (horizontal) ---------- */}
      <Box id="features-section" sx={{ position: "relative", zIndex: 1 }}>
        <Features />
      </Box>

      {/* ---------- Platform overview: everything the app offers ---------- */}
      <Box sx={{ position: "relative", zIndex: 1, py: { xs: 7, md: 9 } }}>
        <Container maxWidth="lg">
          <Stack alignItems="center" textAlign="center" mb={6} spacing={1.2}>
            <Typography sx={{ fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", color: theme.palette.primary.main }}>
              The Full Platform
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 800, fontSize: { xs: "1.8rem", md: "2.2rem" }, color: theme.palette.text.primary, letterSpacing: "-0.02em" }}>
              One place for your whole job search
            </Typography>
            <Typography sx={{ color: theme.palette.text.secondary, fontSize: "0.95rem", maxWidth: 560 }}>
              From your first upload to your last interview — every step lives in one dashboard.
            </Typography>
          </Stack>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" },
              gap: 3,
            }}
          >
            {platformFeatures.map((f, i) => (
              <Box
                key={f.title}
                sx={{
                  p: 3,
                  borderRadius: "16px",
                  border: `1px solid ${theme.palette.divider}`,
                  backgroundColor: theme.custom?.glass || theme.palette.background.paper,
                  backdropFilter: "blur(10px)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: theme.custom?.cardShadow,
                    borderColor: alpha(theme.palette.primary.main, 0.4),
                  },
                  "&:hover .pf-icon": { transform: "scale(1.08)" },
                }}
              >
                <Box
                  className="pf-icon"
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: alpha(theme.palette.primary.main, isDark ? 0.16 : 0.1),
                    color: theme.palette.primary.main,
                    mb: 2,
                    transition: "transform 0.3s ease",
                  }}
                >
                  {f.icon}
                </Box>
                <Typography sx={{ fontWeight: 700, fontSize: "1rem", color: theme.palette.text.primary, mb: 0.6 }}>
                  {f.title}
                </Typography>
                <Typography sx={{ fontSize: "0.87rem", color: theme.palette.text.secondary, lineHeight: 1.55 }}>
                  {f.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ---------- How it works ---------- */}
      <Box id="how-it-works-section" sx={{ position: "relative", zIndex: 1, py: { xs: 7, md: 9 }, backgroundColor: isDark ? "rgba(255,255,255,0.02)" : "#f6f5fa" }}>
        <Container maxWidth="lg">
          <Stack alignItems="center" textAlign="center" mb={6} spacing={1.2}>
            <Typography sx={{ fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", color: theme.palette.primary.main }}>
              How It Works
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 800, fontSize: { xs: "1.8rem", md: "2.2rem" }, color: theme.palette.text.primary, letterSpacing: "-0.02em" }}>
              Three steps to a better resume
            </Typography>
          </Stack>

          <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3 }}>
            {steps.map((s, i) => (
              <PremiumCard key={s.title} index={i} eyebrow={s.eyebrow} icon={s.icon} title={s.title} desc={s.desc} />
            ))}
          </Box>
        </Container>
      </Box>

      {/* ---------- CTA banner ---------- */}
      <Box sx={{ position: "relative", zIndex: 1, py: { xs: 7, md: 8 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              borderRadius: "20px",
              px: { xs: 3, md: 6 },
              py: { xs: 5, md: 6 },
              background: gradients.primary,
              textAlign: "center",
              boxShadow: `0 24px 48px ${alpha(theme.palette.primary.main, isDark ? 0.35 : 0.25)}`,
            }}
          >
            <Typography sx={{ fontWeight: 800, fontSize: { xs: "1.5rem", md: "2rem" }, color: "#fff", mb: 1.5, letterSpacing: "-0.02em" }}>
              Ready to fix your resume?
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.85)", mb: 3, fontSize: "0.95rem" }}>
              Free to start — no credit card needed.
            </Typography>
            <Button
              component={RouterLink}
              to="/signup"
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              size="large"
              sx={{
                background: "#fff",
                color: theme.palette.primary.main,
                fontWeight: 700,
                px: 4,
                py: 1.2,
                borderRadius: "10px",
                textTransform: "none",
                transition: "transform 0.2s ease",
                "&:hover": { background: "#f2f2f2", transform: "translateY(-2px)" },
              }}
            >
              Create free account
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ---------- Footer (shared component — consistent across the app) ---------- */}
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Footer />
      </Box>

      <TourGuideBot />
    </Box>
  );
}