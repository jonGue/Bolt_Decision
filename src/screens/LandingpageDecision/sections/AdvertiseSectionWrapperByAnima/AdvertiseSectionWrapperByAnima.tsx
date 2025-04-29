import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const AdvertiseSectionWrapperByAnima = (): JSX.Element => {
  // Data for the accordion items
  const features = [
    {
      id: "easy-to-use",
      title: "Easy to use",
      description:
        "Experience the power of simplicity with our easy-to-use solution",
    },
    {
      id: "precise-solution",
      title: "Precise Solution",
      description:
        "Provide you with a seamless experience that adapts and evolves",
    },
    {
      id: "updated-technology",
      title: "Updated Technology",
      description:
        "Say hello to the future of innovation, where every click brings to your goals",
    },
  ];

  return (
    <section className="bg-[#f3f8ff] flex flex-col md:flex-row items-start justify-center gap-10 md:gap-20 px-6 md:px-[260px] py-[100px] w-full">
      <img
        className="w-full md:w-[481px] object-cover"
        alt="Illustration of an toolbox that contains a treasure"
        src="/illustration-of-an-toolbox-that-contains-a-treasure-.svg"
      />

      <div className="flex flex-col items-start gap-[30px] flex-1">
        <div className="flex flex-col items-start gap-5 w-full">
          <h2 className="font-sans font-bold text-[#1f1f39] text-[32px] leading-[80px]">
            Overview
          </h2>
        </div>

        <div className="flex flex-col items-start gap-[50px] w-full">
          <p className="font-normal text-[#1f1f3980] text-2xl leading-[44px]">
            Tool to figure out how to work more efficiently
          </p>

          <div className="w-full">
            {features.map((feature, index) => (
              <div key={feature.id} className="w-full">
                <div className="grid grid-cols-[200px_1fr] gap-4 w-full py-4">
                  <h3 className="font-sans font-medium text-[#1f1f39] text-xl tracking-[0] leading-7">
                    {feature.title}
                  </h3>
                  <p className="font-sans font-normal text-[#1f1f3980] text-base tracking-[0] leading-[26px]">
                    {feature.description}
                  </p>
                </div>
                {index < features.length - 1 && <Separator className="my-4" />}
                {index === features.length - 1 && (
                  <Separator className="mt-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};