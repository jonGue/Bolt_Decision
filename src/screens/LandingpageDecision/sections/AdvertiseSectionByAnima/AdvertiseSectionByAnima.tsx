import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const AdvertiseSectionByAnima = (): JSX.Element => {
  const featuresList = [
    "Massive literature list",
    "Expert Interviews",
    "Approved by Dr. Bob",
    "Enhanced with 50+ infographics",
  ];

  return (
    <section className="flex flex-wrap items-start justify-center gap-20 py-[100px] px-6 md:px-20 lg:px-[260px] w-full">
      <div className="flex flex-col items-start gap-[30px] flex-1 min-w-[300px]">
        <div className="flex flex-col items-start gap-5 w-full">
          <h2 className="font-bold text-[#1f1f39] text-4xl md:text-5xl lg:text-[70px] leading-tight lg:leading-[80px] mt-[-1.00px]">
            Complex Facts easily explained
          </h2>
        </div>

        <p className="font-normal text-[#1f1f3980] text-xl md:text-2xl leading-relaxed md:leading-[44px]">
          Collaboration becomes a breeze as you and your team seamlessly work
          together in real time. Share, chat, and conquer projects with ease.
        </p>

        <Card className="border-none shadow-none">
          <CardContent className="p-0 space-y-[25px]">
            {featuresList.map((feature, index) => (
              <div key={index} className="flex items-center gap-3.5">
                <div className="w-2.5 h-2.5 rounded-[5px] border-2 border-solid border-[#1f1f39]" />
                <span className="font-medium text-[#1f1f39] text-xl leading-7">
                  {feature}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <img
        className="self-stretch w-full max-w-[481px] object-cover"
        alt="Illustration of how a heart shaped apple is knitted"
        src="/illustration-of-how-a-heart-shaped-apple-is-knitted--.svg"
      />
    </section>
  );
};