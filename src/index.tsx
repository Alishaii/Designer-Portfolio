import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/fonts/Mudkty-Wtvolkolak/mudkty-wtvolkolakgrotesque-light.ttf";
import "./index.css";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ScrollToTop } from "./app/components/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>
);
