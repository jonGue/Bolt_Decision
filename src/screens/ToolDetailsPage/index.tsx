import React, { useEffect } from "react";
import { NavbarByAnima } from "../../components/shared/NavbarByAnima";
import { FooterLightByAnima } from "../LandingpageDecision/sections/FooterLightByAnima";
import { ToolDetailsSectionByAnima } from "../LandingpageDecision/sections/ToolDetailsSectionByAnima";

export const ToolDetailsPage = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white flex flex-col items-center w-full overflow-x-hidden">
      <NavbarByAnima />
      <div className="flex flex-col w-full items-center">
        <ToolDetailsSectionByAnima />
        <FooterLightByAnima />
      </div>
    </main>
  );
};