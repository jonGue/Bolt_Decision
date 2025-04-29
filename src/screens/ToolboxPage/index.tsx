import React from "react";
import { useNavigate } from "react-router-dom";
import { NavbarByAnima } from "../../components/shared/NavbarByAnima";
import { FooterLightByAnima } from "../LandingpageDecision/sections/FooterLightByAnima";
import { ToolboxSectionByAnima } from "../LandingpageDecision/sections/ToolboxSectionByAnima";

export const ToolboxPage = (): JSX.Element => {
  const navigate = useNavigate();

  const handleCardClick = (toolId: string) => {
    if (toolId === "eisenhower") {
      navigate("/tools/eisenhower");
    }
  };

  return (
    <main className="bg-white flex flex-col items-center w-full overflow-x-hidden">
      <NavbarByAnima />
      <div className="flex flex-col w-full items-center">
        <ToolboxSectionByAnima onCardClick={handleCardClick} />
        <FooterLightByAnima />
      </div>
    </main>
  );
};