// src/components/Logo.js
import React from "react";
import { Box, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";


export default function Logo({ size = "md", withLink = true, light = false }) {
  const dims = { sm: 28, md: 36, lg: 48 };
  const fontSizes = { sm: "1.1rem", md: "1.4rem", lg: "1.9rem" };
  const px = dims[size];

  const content = (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.2, userSelect: "none" }}>
      <Box
        component="svg"
        viewBox="0 0 48 48"
        sx={{ width: px, height: px, flexShrink: 0 }}
      >
        <defs>
          <linearGradient id="riq-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="55%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#f472b6" />
          </linearGradient>
        </defs>
        {/* document */}
        <path
          d="M12 4h16l8 8v28a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
          fill="url(#riq-grad)"
        />
        <path d="M28 4v8h8" fill="none" stroke="#1e1b2e" strokeOpacity="0.25" strokeWidth="1.5" />
        {/* lines representing resume text */}
        <rect x="14" y="20" width="14" height="2.2" rx="1.1" fill="#1e1b2e" fillOpacity="0.35" />
        <rect x="14" y="25" width="18" height="2.2" rx="1.1" fill="#1e1b2e" fillOpacity="0.35" />
        <rect x="14" y="30" width="10" height="2.2" rx="1.1" fill="#1e1b2e" fillOpacity="0.35" />
        {/* spark = "IQ / intelligence" accent */}
        <path
          d="M35 6.5 36.3 9.7 39.5 11 36.3 12.3 35 15.5 33.7 12.3 30.5 11 33.7 9.7Z"
          fill="#fbbf24"
        />
      </Box>
      <Typography
        sx={{
          fontWeight: 800,
          letterSpacing: "-0.02em",
          fontSize: fontSizes[size],
          background: light
            ? "none"
            : "linear-gradient(90deg, #a5b4fc, #f0abfc)",
          WebkitBackgroundClip: light ? "unset" : "text",
          WebkitTextFillColor: light ? "unset" : "transparent",
          color: light ? "#fff" : "inherit",
          lineHeight: 1,
        }}
      >
        Resume<Box component="span" sx={{ color: "#fbbf24", WebkitTextFillColor: "#fbbf24" }}>IQ</Box>
      </Typography>
    </Box>
  );

  return withLink ? (
    <RouterLink to="/" style={{ textDecoration: "none" }}>
      {content}
    </RouterLink>
  ) : (
    content
  );
}