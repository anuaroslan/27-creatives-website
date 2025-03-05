import React from "react";
import { BackgroundImage } from "./background";

const Services = () => {
  const services = {
    "Creative Strategy": [
      "Branding",
      "KOL Advertising",
      "Consultancy",
      "Plan & Strategy",
      "Celebrity Influencers",
      "PR Kit Preparation",
    ],
    "Digital Presence": [
      "Development",
      "Web Design",
      "SEO Marketing",
      "Marketing Solutions",
      "Distribution Hub",
    ],
    "Marketing Outreach": [
      "Digital Marketing",
      "Social Media Marketing/PR",
      "Drafting of Press Release",
      "KOL Marketing",
      "PR Kit Preparation",
    ],
  };

  return (
    <section className="flex items-center justify-center relative py-8 md:py-12">
      <BackgroundImage position="right" />
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif mb-4 md:mb-8">
              SKYROCKETING BRANDS, MAKING THEM VISIBLE FROM OUTER SPACE.
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-8">
              We deliver the results we promise, but socially delighting.
            </p>
            <div className="h-1 w-full mx-auto my-6 md:my-10 bg-gradient-to-r from-[#F9CE34] via-[#EE2A7B] to-[#6228D7]"></div>

            <div className="mt-6">
              {Object.entries(services).map(([category, items]) => (
                <div key={category} className="mb-6 md:mb-8">
                  <h3 className="font-bold mb-3 md:mb-4 text-lg md:text-xl">{category}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 md:gap-4">
                    {items.map((item) => (
                      <p key={item} className="text-gray-600 text-sm md:text-base md:py-1">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 mb-8 md:mb-0 md:mt-0">
            <img
              src="/src/assets/images/services.png"
              alt="Service showcase"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;