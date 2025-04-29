import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { useNavigate } from "react-router-dom";

interface ToolboxSectionByAnimaProps {
  onCardClick?: (toolId: string) => void;
}

export const ToolboxSectionByAnima = ({ onCardClick }: ToolboxSectionByAnimaProps): JSX.Element => {
  const navigate = useNavigate();

  // Define the card data for mapping
  const toolboxCards = [
    {
      id: "eisenhower",
      title: "Eisenhower Matrix",
      description: "Our SaaS solution offers an intuitive and user-friendly",
      icon: "/emoji-happy-1.svg",
      highlighted: true,
    },
    {
      id: "whitmore",
      title: "John Whitmore Model",
      description: "Access your data and tools from anywhere, at any time",
      icon: "/cloud.svg",
      highlighted: false,
    },
    {
      id: "buyers-decision",
      title: "The Buyers Decision Model",
      description: "Collaborate seamlessly with your team members and clients",
      icon: "/clock.svg",
      highlighted: false,
    },
    {
      id: "personal-performance",
      title: "The Personal Performance Model",
      description:
        "Protect your valuable data with our robust security measures",
      icon: "/shield-check.svg",
      highlighted: false,
    },
    {
      id: "black-swan",
      title: "The Black Swan Model",
      description: "Gain valuable insights into your operations",
      icon: "/chart-pie.svg",
      highlighted: false,
    },
    {
      id: "rubber-band",
      title: "Ruber Band Model",
      description: "Our dedicated support team is available around the clock",
      icon: "/phone.svg",
      highlighted: false,
    },
    {
      id: "potential-trap",
      title: "The Personal Potential Trap",
      description:
        "Protect your valuable data with our robust security measures",
      icon: "/shield-check.svg",
      highlighted: false,
    },
    {
      id: "hard-choice",
      title: "The Hard Choice Model",
      description: "Gain valuable insights into your operations",
      icon: "/chart-pie.svg",
      highlighted: false,
    },
    {
      id: "black-box",
      title: "The Black Box Model",
      description: "Our dedicated support team is available around the clock",
      icon: "/phone.svg",
      highlighted: false,
    },
    {
      id: "stop-rule",
      title: "The Stop Rule",
      description:
        "Protect your valuable data with our robust security measures",
      icon: "/shield-check.svg",
      highlighted: false,
    },
    {
      id: "consequences",
      title: "The Consequences Model",
      description: "Gain valuable insights into your operations",
      icon: "/chart-pie.svg",
      highlighted: false,
    },
    {
      id: "cognitive-bias",
      title: "Cognitive Bias",
      description: "Our dedicated support team is available around the clock",
      icon: "/phone.svg",
      highlighted: false,
    },
  ];

  // Create rows of cards (3 cards per row)
  const rows = [];
  for (let i = 0; i < toolboxCards.length; i += 3) {
    rows.push(toolboxCards.slice(i, i + 3));
  }

  const handleCardClick = (toolId: string) => {
    if (onCardClick) {
      onCardClick(toolId);
    } else {
      if (toolId === "eisenhower") {
        navigate("/tools/eisenhower");
      }
    }
  };

  return (
    <section className="flex flex-col items-center gap-20 py-[60px] px-4 md:px-8 lg:px-20 xl:px-[120px] 2xl:px-[260px] w-full">
      <div className="flex flex-col items-center gap-5 w-full">
        <p className="font-normal text-[#1f1f3980] text-[28px] leading-[48px]">
          Our Feature
        </p>
        <h2 className="font-bold text-[#1f1f39] text-5xl md:text-6xl lg:text-[70px] leading-tight md:leading-[80px] text-center">
          Toolbox
        </h2>
      </div>

      <div className="flex flex-col gap-6 w-full max-w-[1600px]">
        {rows.map((row, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
          >
            {row.map((card) => (
              <Card
                key={card.id}
                className={`group border transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 hover:shadow-xl ${
                  card.highlighted 
                    ? "bg-[#f3f8ff] hover:bg-[#e1eeff]" 
                    : "bg-transparent hover:bg-[#f3f8ff]"
                } rounded-[10px] border-[#ebecef]`}
                onClick={() => handleCardClick(card.id)}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col items-center gap-[22px]">
                    <div
                      className={`w-[68.73px] h-[68.73px] transition-colors duration-300 ${
                        card.highlighted 
                          ? "bg-[#6d3fff] group-hover:bg-[#5c35d9]" 
                          : "bg-[#dee9f3] group-hover:bg-[#6d3fff]"
                      } rounded-[12.89px] flex items-center justify-center overflow-hidden`}
                    >
                      <img
                        className="w-[38px] h-[38px] transition-transform duration-300 group-hover:scale-110"
                        alt={card.title}
                        src={card.icon}
                      />
                    </div>
                    <h3 className={`font-bold text-xl md:text-2xl text-center leading-tight transition-colors duration-300 ${
                      card.highlighted 
                        ? "text-[#1f1f39]" 
                        : "text-[#1f1f39] group-hover:text-[#1f1f39]"
                    }`}>
                      {card.title}
                    </h3>
                    <p className={`font-normal text-base md:text-lg text-center leading-relaxed transition-colors duration-300 ${
                      card.highlighted 
                        ? "text-[#1f1f3980]" 
                        : "text-[#1f1f3980]"
                    }`}>
                      {card.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};