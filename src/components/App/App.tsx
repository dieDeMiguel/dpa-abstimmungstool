import React from "react";
import "./App.css";
import { Global, ThemeProvider } from "@emotion/react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import globalStyles from "../../globalStyles/Global";
import theme from "../../globalStyles/theme";
import Welcome from "../Welcome/Welcome";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/vote" element={<Dashboard />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
