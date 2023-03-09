import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/Global";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './styles/fonts.module.css';

import Home from "./pages/home";
import { theme } from "./styles/Theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
