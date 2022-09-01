import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./global.css";
import { DiscContextProvider } from "./DiscsContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DiscContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DiscContextProvider>
  </React.StrictMode>
);
