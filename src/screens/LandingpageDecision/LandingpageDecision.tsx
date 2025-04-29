import React from "react";
import { NavbarByAnima } from "../../components/shared/NavbarByAnima";
import { AdvertiseSectionByAnima } from "./sections/AdvertiseSectionByAnima";
import { AdvertiseSectionWrapperByAnima } from "./sections/AdvertiseSectionWrapperByAnima";
import { CallToActionByAnima } from "./sections/CallToActionByAnima";
import { FooterLightByAnima } from "./sections/FooterLightByAnima";
import { HeadlineKeyvisualByAnima } from "./sections/HeadlineKeyvisualByAnima";
import { NumberStatisticsByAnima } from "./sections/NumberStatisticsByAnima";
import { TestimonialsByAnima } from "./sections/TestimonialsByAnima";
import { ToolPreviewSectionByAnima } from "./sections/ToolPreviewSectionByAnima";
import { ToolboxSectionByAnima } from "./sections/ToolboxSectionByAnima";

export const LandingpageDecision = (): JSX.Element => {
  return (
    <main
      className="bg-white flex flex-col items-center w-full overflow-x-hidden"
      data-model-id="1011:461"
    >
      <NavbarByAnima />
      <div className="flex flex-col w-full items-center">
        <HeadlineKeyvisualByAnima />
        <NumberStatisticsByAnima />
        <ToolPreviewSectionByAnima />
        <AdvertiseSectionByAnima />
        <AdvertiseSectionWrapperByAnima />
        <ToolboxSectionByAnima />
        <TestimonialsByAnima />
        <CallToActionByAnima />
        <FooterLightByAnima />
      </div>
    </main>
  );
};