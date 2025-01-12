/** Primary Import Declaration */
import React, { useEffect, useContext, useState } from "react";

/** MUI Themes */
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";
/** App Route Component */
/** Theming and Styling */
import { darkTheme, lightTheme } from "theme.js";
import { ThemeContext } from "./ContextOrRedux/ThemeProvider.js";
import MainRoutes from "./Template/MainRoutes.jsx";
export default function App(props) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const themeMode = useContext(ThemeContext);
  const darkMode = themeMode.state.darkMode;
  useEffect(() => {
    prefersDarkMode
      ? themeMode.dispatch({ type: "DARKMODE" })
      : themeMode.dispatch({ type: "LIGHTMODE" });
  }, [prefersDarkMode]);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <MainRoutes />
    </ThemeProvider>
  );
}
