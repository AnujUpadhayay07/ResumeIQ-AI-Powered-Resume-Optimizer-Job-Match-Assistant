// src/theme/ThemeContext.js
import React, { createContext, useContext, useMemo, useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const ColorModeContext = createContext({ mode: "light", toggleColorMode: () => {} });
export const useColorMode = () => useContext(ColorModeContext);


export const gradients = {
  primary: "linear-gradient(90deg, #6366f1, #a855f7)",
  primaryText: "linear-gradient(90deg, #6366f1, #d946ef)",
  accentGlow: "linear-gradient(135deg, #818cf8, #a78bfa, #f472b6)",
};

function getDesignTokens(mode) {
  const isDark = mode === "dark";
  return {
    palette: {
      mode,
      primary: { main: "#6366f1" },
      secondary: { main: "#a855f7" },
      background: {
        default: isDark ? "#0b0a14" : "#fafafc",
        paper: isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.75)",
      },
      text: {
        primary: isDark ? "#f5f3ff" : "#181123",
        secondary: isDark ? "#a8a2b8" : "#6b6478",
      },
      divider: isDark ? "rgba(255,255,255,0.08)" : "#efeaf7",
    },
    custom: {
      glass: isDark
        ? "rgba(255,255,255,0.05)"
        : "rgba(255,255,255,0.7)",
      glassBorder: isDark ? "rgba(255,255,255,0.10)" : "rgba(24,17,35,0.06)",
      chipBg: isDark ? "rgba(167,139,250,0.14)" : "#f1e9ff",
      chipText: isDark ? "#e9d5ff" : "#5b21b6",
      navBg: isDark ? "rgba(11,10,20,0.7)" : "rgba(255,255,255,0.75)",
      glow1: isDark ? "rgba(129,140,248,0.28)" : "rgba(129,140,248,0.18)",
      glow2: isDark ? "rgba(244,114,182,0.20)" : "rgba(244,114,182,0.12)",
      cardShadow: isDark
        ? "0 20px 50px rgba(0,0,0,0.45)"
        : "0 20px 45px rgba(24,17,35,0.10)",
    },
    typography: {
      fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
    },
    shape: { borderRadius: 14 },
  };
}

export function AppThemeProvider({ children }) {
  const [mode, setMode] = useState(() => localStorage.getItem("resumeiq-theme") || "light");

  useEffect(() => {
    localStorage.setItem("resumeiq-theme", mode);
  }, [mode]);

  const colorMode = useMemo(
    () => ({
      mode,
      toggleColorMode: () => setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    [mode]
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}