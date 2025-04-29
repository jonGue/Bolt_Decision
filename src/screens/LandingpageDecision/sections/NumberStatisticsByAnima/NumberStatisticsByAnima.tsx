import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const NumberStatisticsByAnima = (): JSX.Element => {
  // Data for statistics to enable mapping
  const statistics = [
    { value: "58K", label: "Active User" },
    { value: "$28K", label: "GMV" },
    { value: "10%", label: "Growth" },
  ];

  return (
    <section className="flex items-center justify-center px-6 md:px-20 lg:px-[260px] py-16 md:py-[100px] w-full">
      <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-8 md:gap-[49px] w-full max-w-[1200px]">
        {statistics.map((stat, index) => (
          <React.Fragment key={stat.label}>
            <Card className="border-none shadow-none flex-1 min-w-[200px]">
              <CardContent className="flex flex-col items-center gap-[11px] p-10">
                <div className="font-bold text-[#1f1f39] text-[40px] leading-7 whitespace-nowrap">
                  {stat.value}
                </div>
                <div className="font-normal text-[#1f1f3980] text-2xl text-center leading-[48px] whitespace-nowrap">
                  {stat.label}
                </div>
              </CardContent>
            </Card>

            {index < statistics.length - 1 && (
              <Separator
                orientation="vertical"
                className="hidden md:block h-24 self-center"
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};