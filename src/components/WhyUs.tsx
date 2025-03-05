import React from "react";
import { BackgroundImage } from "./background";

const WhyUs = () => {
  const reasons = [
    {
      title: "Build Trust",
      description:
        "By working for integrity while we build trust among our trusted partners and clients, we ensure that we deliver what we promise. We believe in building long-term relationships with our clients and partners.",
    },
    {
      title: "Tell Your Story",
      description:
        "When you work with us, it's not only telling the brand story, but also creating a meaningful connection with your audience. We help you craft and tell your story in a way that resonates with your target audience.",
    },
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16 h-full flex items-center justify-center relative">
      <BackgroundImage position="left" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 justify-center items-center">
        <div className="order-1 md:order-1 mb-4 md:mt-12">
          <img
            src="/src/assets/images/why.png"
            alt="Team collaboration"
            className="w-full shadow-lg rounded-lg"
          />
        </div>
        <div className="order-2 md:order-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif mb-6 md:mb-12">
            WHY WORK WITH US?
          </h2>
          <div className="space-y-6 md:space-y-8">
            {reasons.map((reason, index) => (
              <div key={index} className="grid grid-cols-12 gap-2 md:gap-4">
                <span className="text-xl sm:text-2xl font-bold col-span-1 sm:col-span-2">
                  {index + 1}.
                </span>
                <div className="flex flex-col gap-2 md:gap-4 col-span-11 sm:col-span-10">
                  <h3 className="text-xl sm:text-2xl font-bold">{reason.title}</h3>
                  <div className="h-1 w-full mx-auto bg-gradient-to-r from-[#F9CE34] via-[#EE2A7B] to-[#6228D7]"></div>
                  <p className="text-sm sm:text-base text-gray-600">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;