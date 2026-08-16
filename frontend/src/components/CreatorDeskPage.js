import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import {
  Box,
  Container,
  Typography,
  Avatar,
  Button,
  useTheme,
  alpha,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import anujImage from "../assets/Anuj.jpeg";
import amanImage from "../assets/Aman.jpeg";
import joshImage from "../assets/josh.jpeg";
import bipulImage from "../assets/Bipul.jpeg";

const team = [
  {
    name: "Anuj Upadhayay",
    image: anujImage,
    linkedin: "https://www.linkedin.com/in/anuj-upadhayay-832695312/",
  },
  {
    name: "Md Aman Ansari",
    image: amanImage,
    linkedin: "https://www.linkedin.com/in/md-aman-ansari-baaa52325/",
  },
  {
    name: "Joshua Dhan",
    image: joshImage,
    linkedin: "https://www.linkedin.com/in/joshua-dhan-79a172290/",
  },
  {
    name: "Bipul Raj",
    image: bipulImage,
    linkedin: null,
  },
];

export default function CreatorDeskPage() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: theme.palette.background.default,
          py: { xs: 7, md: 10 },
          px: 2,
        }}
      >
        <Container maxWidth="md">
          {/* Header */}
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography variant="h4" fontWeight="bold" color="text.primary" gutterBottom>
              Meet the Team
            </Typography>
            <Typography sx={{ color: theme.palette.text.secondary, fontSize: "1rem", maxWidth: 640, mx: "auto", lineHeight: 1.75 }}>
              ResumeIQ was born out of a simple yet powerful idea — to help people present themselves better in
              front of recruiters, using AI to simplify tasks and enhance the job search experience. Here's who
              built it.
            </Typography>
          </Box>

          {/* Team grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 3,
            }}
          >
            {team.map((member) => (
              <Box
                key={member.name}
                sx={{
                  p: 3,
                  borderRadius: "16px",
                  border: `1px solid ${theme.palette.divider}`,
                  backgroundColor: theme.custom?.glass || theme.palette.background.paper,
                  textAlign: "center",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: theme.custom?.cardShadow,
                  },
                }}
              >
                <Avatar
                  src={member.image}
                  alt={member.name}
                  sx={{ width: 96, height: 96, mx: "auto", mb: 2, boxShadow: 3 }}
                />
                <Typography variant="h6" fontWeight="bold" color="text.primary" mb={member.linkedin ? 2 : 0}>
                  {member.name}
                </Typography>
                {member.linkedin && (
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<LinkedInIcon />}
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      borderColor: alpha("#0a66c2", 0.4),
                      color: "#0a66c2",
                      fontWeight: 600,
                      borderRadius: "999px",
                      textTransform: "none",
                      "&:hover": { backgroundColor: alpha("#0a66c2", 0.08), borderColor: "#0a66c2" },
                    }}
                  >
                    Connect
                  </Button>
                )}
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}