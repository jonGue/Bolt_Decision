import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingpageDecision } from "./screens/LandingpageDecision";
import { ToolboxPage } from "./screens/ToolboxPage";
import { ToolDetailsPage } from "./screens/ToolDetailsPage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LandingpageDecision />} />
        <Route path="/toolbox" element={<ToolboxPage />} />
        <Route path="/tools/eisenhower" element={<ToolDetailsPage />} />
      </Routes>
    </Router>
  </StrictMode>
);