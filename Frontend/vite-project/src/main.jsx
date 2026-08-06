import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { SearchProvider } from "./context/SearchContext";
import App from "./App.jsx";
import "./index.css";
import ScrollToTop from "./components/ScrollToTop";
import { AuthProvider } from "./context/AuthContext";

createRoot(document.getElementById("root")).render(
 <BrowserRouter>

  <ScrollToTop />

  <AuthProvider>

    <SearchProvider>

      <App />

    </SearchProvider>

  </AuthProvider>

</BrowserRouter>
);