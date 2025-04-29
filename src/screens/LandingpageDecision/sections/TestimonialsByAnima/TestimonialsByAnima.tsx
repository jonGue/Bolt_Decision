import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const TestimonialsByAnima = (): JSX.Element => {
  // Testimonial data for mapping
  const testimonials = [
    {
      id: 1,
      name: "Michelle Muara",
      image: "/ellipse-14.svg",
      text: "Integration with PLUCK has transformed our app. Exceptional support and remarkable results. Highly recommended!",
    },
    {
      id: 2,
      name: "Reddington M",
      image: "/ellipse-14-2.svg",
      text: "Integration with PLUCK has transformed our app. Exceptional support and remarkable results. Highly recommended!",
    },
    {
      id: 3,
      name: "Derick McKinney",
      image: "/ellipse-14-1.svg",
      text: "Integration with PLUCK has transformed our app. Exceptional support and remarkable results. Highly recommended!",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-[100px] px-6 md:px-12 lg:px-[260px] py-[100px] w-full bg-[#6d3fff]">
      <header className="flex flex-col items-center gap-[25px] max-w-full">
        <h2 className="font-bold text-white text-4xl md:text-5xl lg:text-[70px] text-center leading-tight lg:leading-[80px] max-w-[1120px]">
          Voice of our customers
        </h2>
        <p className="font-normal text-[#ffffff80] text-xl md:text-2xl lg:text-[28px] text-center leading-normal lg:leading-[48px]">
          A Journey worth the investment
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="bg-white rounded-[10px] h-full">
            <CardContent className="flex flex-col items-center gap-[29px] p-10 h-full">
              <img
                className="w-[164px] h-[164px] object-cover"
                alt={`${testimonial.name} profile`}
                src={testimonial.image}
              />
              <h3 className="font-bold text-[#1f1f39] text-xl text-center leading-7">
                {testimonial.name}
              </h3>
              <p className="font-normal text-[#1f1f3980] text-xl text-center leading-[34px]">
                {testimonial.text}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex items-center gap-[13.24px]">
        <div className="w-[60.64px] h-[9.06px] bg-white rounded-[13.94px]" />
        <div className="w-[27.18px] h-[9.06px] bg-[#d9d9d9] rounded-[13.94px]" />
        <div className="w-[27.18px] h-[9.06px] bg-[#d9d9d9] rounded-[13.94px]" />
      </div>
    </section>
  );
};
