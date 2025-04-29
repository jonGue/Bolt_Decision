import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { useNavigate } from "react-router-dom";

export const ToolPreviewSectionByAnima = (): JSX.Element => {
  const navigate = useNavigate();

  const tools = [
    {
      id: "eisenhower",
      title: "Eisenhower Matrix",
      description: "Our SaaS solution offers an intuitive and user-friendly",
      icon: "/emoji-happy.svg",
      iconAlt: "Emoji happy",
      isHighlighted: true,
    },
    {
      id: 2,
      title: "Whitmore Model",
      description: "Access your data and tools from anywhere, at any time",
      icon: "/cloud.svg",
      iconAlt: "Cloud",
      isHighlighted: false,
    },
    {
      id: 3,
      title: "Ruberband Model",
      description:
        "Protect your valuable data with our robust security measures",
      icon: "/lock-closed.svg",
      iconAlt: "Lock closed",
      isHighlighted: false,
    },
    {
      id: 4,
      title: "Many more ...",
      description: "Über 50 Tools für persönliche mentale Stärke",
      icon: "/phone.svg",
      iconAlt: "Phone",
      isHighlighted: false,
    },
  ];

  const handleCardClick = (toolId: string) => {
    if (toolId === "eisenhower") {
      navigate("/tools/eisenhower");
    }
  };

  const handleAllToolsClick = () => {
    navigate("/toolbox");
  };

  return (
    <section className="flex flex-wrap items-start justify-center gap-20 px-6 py-[60px] lg:px-20 xl:px-[120px] 2xl:px-[260px] w-full bg-[#6d3fff]">
      <div className="flex flex-col items-start justify-center gap-[60px] flex-1 min-w-[300px] max-w-[500px]">
        <div className="flex flex-col items-start gap-5 w-full">
          <h3 className="w-full mt-[-1.00px] font-normal text-[#ffffff80] text-[28px] leading-[48px]">
            Our Promise
          </h3>
          <h2 className="w-full font-bold text-white text-4xl md:text-5xl lg:text-[70px] leading-tight lg:leading-[80px]">
            Tools to make you strong
          </h2>
        </div>

        <p className="w-full font-normal text-[#ffffff80] text-xl md:text-2xl leading-[44px]">
          A toolbox with over 50 tools for making good decisions fast and slow
        </p>

        <Button 
          className="h-[60.55px] w-[226.14px] bg-white text-[#6d3fff] text-[22.2px] font-bold rounded-[9.97px] border-[1.24px] border-solid border-[#6d3fff] hover:bg-white/90"
          onClick={handleAllToolsClick}
        >
          All Tools
        </Button>
      </div>

      <div className="flex flex-col items-start gap-10 flex-1 min-w-[300px] lg:min-w-[600px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {tools.slice(0, 2).map((tool) => (
            <Card
              key={tool.id}
              className={`border ${
                tool.isHighlighted ? "bg-white border-[#ebecef]" : "bg-transparent border-none"
              } rounded-[10px] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer`}
              onClick={() => handleCardClick(tool.id.toString())}
            >
              <CardContent className="flex flex-col items-center gap-6 p-8">
                <div
                  className={`flex w-[68.73px] h-[68.73px] items-center justify-center rounded-[12.89px] overflow-hidden transition-colors duration-300 ${
                    tool.isHighlighted ? "bg-[#6d3fff] hover:bg-[#5c35d9]" : "bg-white hover:bg-gray-100"
                  }`}
                >
                  <img
                    className="w-[38px] h-[38px]"
                    alt={tool.iconAlt}
                    src={tool.icon}
                  />
                </div>
                <h3
                  className={`font-bold text-xl md:text-2xl text-center leading-tight w-full transition-colors duration-300 ${
                    tool.isHighlighted ? "text-[#252424]" : "text-white"
                  }`}
                >
                  {tool.title}
                </h3>
                <p
                  className={`font-normal text-base md:text-lg text-center leading-relaxed w-full transition-colors duration-300 ${
                    tool.isHighlighted ? "text-[#1f1f3980]" : "text-[#ffffffb2]"
                  }`}
                >
                  {tool.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {tools.slice(2, 4).map((tool) => (
            <Card
              key={tool.id}
              className="bg-transparent border-none rounded-[10px] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              <CardContent className="flex flex-col items-center gap-6 p-8">
                <div className="flex w-[68.73px] h-[68.73px] items-center justify-center bg-white hover:bg-gray-100 rounded-[12.89px] overflow-hidden transition-colors duration-300">
                  <img
                    className="w-[38px] h-[38px]"
                    alt={tool.iconAlt}
                    src={tool.icon}
                  />
                </div>
                <h3 className="font-bold text-xl md:text-2xl text-white text-center leading-tight w-full">
                  {tool.title}
                </h3>
                <p className="font-normal text-base md:text-lg text-[#ffffffb2] text-center leading-relaxed w-full">
                  {tool.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};