import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import CartProvider from "./context/CartContext";
import { DiscContextProvider } from "./context/DiscsContext";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DiscContextProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </DiscContextProvider>
  </React.StrictMode>
);
