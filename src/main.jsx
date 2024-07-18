import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/CSS/tailwind.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToggleProvider } from "./context/ToggleContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToggleProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ToggleProvider>
  </React.StrictMode>
);
