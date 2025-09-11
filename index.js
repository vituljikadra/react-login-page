import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Hello from "./Hello";
import Header from "./Header";
import LoginForm from "./Loginform";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Header />

    // <Hello />
);

reportWebVitals(); // ✅ removed the stray quote
