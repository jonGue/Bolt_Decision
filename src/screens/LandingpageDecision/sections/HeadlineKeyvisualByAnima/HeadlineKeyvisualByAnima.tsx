import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const HeadlineKeyvisualByAnima = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-10 md:gap-20 px-4 md:px-8 lg:px-[120px] py-8 md:py-[92px] w-full bg-white">
      <div className="flex flex-col items-center gap-5 w-full">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-[70px] text-center leading-tight lg:leading-[80px] text-[#1f1f39] font-['Inter',Helvetica] mt-[-1px]">
          Decision Grid
        </h1>

        <p className="font-normal text-xl md:text-2xl lg:text-[28px] text-center leading-normal lg:leading-[48px] text-[#1f1f3980] font-['Inter',Helvetica] px-4">
          A comprehensive Toolbox for making the right decision
        </p>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 w-full max-w-[712.61px] bg-white rounded-[13.01px] border-[1.13px] border-solid border-[#ebecef] p-4 md:pl-[32.24px] md:pr-[16.12px] md:py-[16.12px]">
          <Input
            className="border-0 shadow-none w-full md:w-[365.98px] font-['Source_Sans_Pro',Helvetica] font-normal text-lg md:text-[22.6px] text-[#95949f] focus-visible:ring-0 p-0 h-auto"
            placeholder="Your Email Address"
          />
          <Button className="w-full md:w-[204.81px] h-[54.84px] bg-[#6d3fff] rounded-[9.03px] font-['Source_Sans_Pro',Helvetica] font-bold text-lg md:text-[20.1px] mt-2 md:mt-0 md:mb-0 self-end">
            Lets Go
          </Button>
        </div>
      </div>

      <Card className="w-full max-w-[1140.33px] h-auto aspect-[1.62/1] mb-[-8.16px] bg-[#f3f8ff] rounded-[16.33px] overflow-hidden border-[8.16px] border-solid border-white shadow-[16.33px_27.75px_52.24px_#0000000d]">
        <CardContent className="p-0 h-full">
          <div className="relative w-full h-full bg-white rounded-[3.5px] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              alt="Decision Grid application screenshot"
              src="/replace-this-image.png"
            />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};