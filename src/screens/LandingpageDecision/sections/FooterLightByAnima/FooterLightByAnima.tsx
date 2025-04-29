import { FacebookIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const FooterLightByAnima = (): JSX.Element => {
  // Company links data
  const companyLinks = ["About", "Services", "Careers", "Blog", "Pricing"];

  // Contact links data
  const contactLinks = [
    "Help",
    "FAQs",
    "Press",
    "Terms & Conditions",
    "Partners",
  ];

  // Discover links data
  const discoverLinks = ["Affiliate", "Partner Program"];

  // Social media data
  const socialMedia = [
    { icon: <TwitterIcon className="w-6 h-6" />, alt: "Twitter" },
    { icon: <LinkedinIcon className="w-6 h-6" />, alt: "LinkedIn" },
    { icon: <FacebookIcon className="w-6 h-6" />, alt: "Facebook" },
  ];

  return (
    <footer className="flex flex-col items-start w-full bg-white pb-[50px]">
      <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-[85px] py-[50px] lg:py-[100px] px-4 md:px-8 lg:px-[260px] w-full">
        {/* Logo and description */}
        <div className="flex flex-col items-start gap-6 w-full lg:w-[452px]">
          <div className="flex items-center gap-4">
            <img
              className="w-11 h-11 object-cover"
              alt="Chatgpt image apr"
              src="/chatgpt-image-29--apr--2025--17-17-38-1-1.png"
            />
            <div className="font-semibold text-black text-[28.6px] font-['Inter',Helvetica]">
              Rückenwind
            </div>
          </div>
          <p className="w-full lg:w-[314px] font-['Inter',Helvetica] font-normal text-[#1f1f3980] text-lg leading-[34px]">
            Our SaaS platform offers a seamless API dashboard for effortless
            integration and management
          </p>
        </div>

        {/* Footer links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-[185px]">
          {/* Company links */}
          <div className="flex flex-col items-start gap-[26px]">
            <h3 className="font-['Roboto',Helvetica] font-bold text-[#2e2a4a] text-xl leading-7">
              Company
            </h3>
            <div className="font-['Inter',Helvetica] font-normal text-[#00000080] text-base md:text-xl leading-loose md:leading-[74px]">
              {companyLinks.map((link, index) => (
                <React.Fragment key={index}>
                  {link}
                  <br />
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Contact links */}
          <div className="flex flex-col items-start gap-[26px]">
            <h3 className="font-['Roboto',Helvetica] font-bold text-[#2e2a4a] text-xl leading-7">
              Contact
            </h3>
            <div className="font-['Inter',Helvetica] font-normal text-[#00000080] text-base md:text-xl leading-loose md:leading-[74px]">
              {contactLinks.map((link, index) => (
                <React.Fragment key={index}>
                  {link}
                  <br />
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Discover links */}
          <div className="flex flex-col items-start gap-[26px]">
            <h3 className="font-['Roboto',Helvetica] font-bold text-[#2e2a4a] text-xl leading-7">
              Discover
            </h3>
            <div className="font-['Inter',Helvetica] font-normal text-[#00000080] text-base md:text-xl leading-loose md:leading-[74px]">
              {discoverLinks.map((link, index) => (
                <React.Fragment key={index}>
                  {link}
                  <br />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Separator className="w-full h-[2px]" />

      {/* Copyright and social media */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 px-4 md:px-8 lg:px-[260px] py-4 w-full">
        <div className="font-['Inter',Helvetica] font-normal text-[#1f1f3980] text-base md:text-lg text-center md:text-left leading-[34px]">
          Copyright © 2032 Pluck®. All rights reserved.
        </div>

        <div className="flex items-center gap-[30px]">
          {socialMedia.map((item, index) => (
            <div
              key={index}
              className="w-[39.73px] h-[39.73px] bg-[#dee9f3] rounded-[7.45px] flex items-center justify-center overflow-hidden"
            >
              {item.icon}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};