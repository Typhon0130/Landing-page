import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/Global";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./styles/fonts.module.css";

import Home from "./pages/home";
import Profile from "./pages/profile";
import { theme } from "./styles/Theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Home />
      </Router>
    </ThemeProvider>
  );
}
