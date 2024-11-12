import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./assets/styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { theme } from "@theme";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  //<React.StrictMode>
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </>
  //</React.StrictMode>
);
