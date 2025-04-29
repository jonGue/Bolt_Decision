import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const CallToActionByAnima = (): JSX.Element => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-[50px] md:py-[100px] px-4 md:px-8 lg:px-20 relative w-full bg-[#2e2a4a]">
      <div className="flex flex-col items-start justify-center gap-[30px] relative w-full md:max-w-[641px]">
        <div className="flex flex-col items-start gap-5 relative self-stretch w-full">
          <h2 className="relative self-stretch mt-[-1.00px] font-bold text-white text-3xl md:text-5xl lg:text-[70px] leading-tight lg:leading-[80px] font-sans">
            Sign up for a free trial
          </h2>
        </div>

        <div className="flex flex-col md:flex-row w-full items-center justify-between bg-white rounded-[13px] border border-solid border-[#ebecef] overflow-hidden">
          <Input
            className="flex-1 border-none text-[#95949f] text-lg md:text-[22.6px] h-[80px] md:h-[79px] px-4 md:pl-8 font-normal"
            placeholder="Your Email Address"
          />
          <Button className="w-full md:w-[204.81px] h-[54.84px] m-4 md:m-3 bg-[#6d3fff] hover:bg-[#5c35d9] rounded-[9px] text-lg md:text-[20.1px] font-bold">
            GET STARTED
          </Button>
        </div>
      </div>

      <Card className="relative w-full md:w-[641px] aspect-video md:h-[479px] bg-[#f3f8ff] rounded-[11px] md:rounded-[11px_0px_0px_11px] overflow-hidden border-[5.55px] border-solid border-white shadow-[11px_19px_36px_#0000000d]">
        <div className="relative w-full h-full bg-white rounded-[2.38px] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            alt="Preview image"
            src="/replace-this-image-1.png"
          />
        </div>
      </Card>
    </section>
  );
};