import React from "react";
import { Separator } from "../../../../components/ui/separator";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "../../../../components/ui/button";

export const ToolDetailsSectionByAnima = (): JSX.Element => {
  const navigate = useNavigate();
  
  const toolDetails = [
    {
      label: "Time Estimation",
      value: "15 Minutes",
    },
    {
      label: "Difficulty",
      value: "Low",
    },
    {
      label: "Application",
      value: "Daily Work Priorization, Household Tasks",
    },
  ];

  return (
    <section className="flex flex-col items-start w-full">
      <div className="flex flex-col items-center gap-20 px-6 py-[60px] w-full md:px-[260px]">
        <div className="flex flex-col items-center gap-5 w-full">
          <div className="w-full flex flex-col items-center">
            <Button
              variant="ghost"
              className="self-start mb-4 text-[#1f1f3980] hover:text-[#1f1f39] hover:bg-gray-100 flex items-center gap-2"
              onClick={() => navigate('/toolbox')}
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Toolbox
            </Button>
            <h2 className="font-normal text-[#1f1f3980] text-[28px] text-center leading-[48px]">
              Toolbox
            </h2>
            <h1 className="font-bold text-[#1f1f39] text-[70px] text-center leading-[80px]">
              Eisenhower Matrix
            </h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-20 px-6 py-[100px] w-full bg-white md:px-[260px]">
        <img
          className="w-full md:w-[481px] h-auto"
          alt="Eisenhower Matrix Illustration"
          src="/rectangle-8352.svg"
        />

        <div className="flex flex-col items-start gap-[30px] flex-1">
          <div className="flex flex-col items-start gap-5 w-full">
            <h2 className="font-bold text-[#1f1f39] text-[32px] leading-[80px]">
              Overview
            </h2>
          </div>

          <div className="flex flex-col items-start gap-[50px] w-full">
            <p className="font-normal text-[#1f1f3980] text-2xl leading-[44px]">
              Tool to figure out how to work more efficiently
            </p>

            <div className="w-full">
              {toolDetails.map((detail, index) => (
                <div key={index} className="w-full">
                  <div className="grid grid-cols-[200px_1fr] gap-4 w-full py-4">
                    <h3 className="font-medium text-[#1f1f39] text-xl leading-7">
                      {detail.label}
                    </h3>
                    <p className="font-normal text-[#1f1f3980] text-base leading-[26px]">
                      {detail.value}
                    </p>
                  </div>
                  {index < toolDetails.length - 1 && <Separator className="my-4" />}
                  {index === toolDetails.length - 1 && <Separator className="mt-4" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-20 px-6 py-5 w-full bg-white md:px-[260px]">
        <div className="flex flex-col items-start gap-[30px] flex-1">
          <div className="flex flex-col items-start gap-5 w-full">
            <h2 className="font-bold text-[#1f1f39] text-[32px] leading-[80px]">
              Description
            </h2>
          </div>

          <p className="font-normal text-[#1f1f3980] text-2xl leading-[44px]">
            The US president Dwight D. Eisenhower supposedly once said: The most
            urgent decisions are rarely the most important ones. Eisenhower was
            considered a master of time management, ie. he had the ability to do
            everything as and when it needed to be done. With the Eisenhower
            method, you will learn to distinguish between what is important and
            what is urgent.
            <br />
            <br />
            Whatever the job that lands on your desk, begin by breaking it down
            according to the Eisenhower method and then decide how to pro-ceed.
            We often focus too strongly on the &#39;urgent and important&#39;
            field, on the things that have to be dealt with immediately. Ask
            yourself: When will I deal with the things that are important, but
            not urgent? When will I take the time to deal with important tasks
            before they become urgent? This is the field for strategic,
            long-term decisions.
            <br />
            <br />
            Another method of organising your time better is attributed to the
            multimillionaire Warren Buffett. Make a list of everything you want
            to get done today. Begin with the task at the top of the list, and
            continue only when you have completed it. When a task has been
            completed, cross it off the list.
            <br />
            Better late than never. But never late is better.
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-20 px-6 py-[100px] w-full bg-white md:px-[260px]">
        <img
          className="w-full h-auto object-cover"
          alt="Eisenhower Matrix Diagram"
          src="/chatgpt-image-29--apr--2025--19-47-37-1.png"
        />
      </div>
    </section>
  );
};