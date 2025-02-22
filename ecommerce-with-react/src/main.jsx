import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./context/Theme";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./context/Product";
import { CartProvider } from "./context/CartContext";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <ThemeProvider>
      <CartProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </CartProvider>
    </ThemeProvider>
  </BrowserRouter>
  // </StrictMode>
);
