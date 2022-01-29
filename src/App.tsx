import React from "react";
import "./App.css";
import { Global, ThemeProvider } from "@emotion/react";
import Dashboard from "./components/Dashboard/Dashboard";
import globalStyles from "./globalStyles/Global";
import theme from "./globalStyles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
