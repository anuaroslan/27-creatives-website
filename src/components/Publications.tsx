import React from "react";
import Button from "../components/Button";
import { BackgroundImage } from "./background";

const Publications = () => {
  const publications = [
    {
      image: "/assets/images/nan-yang.png",
      title: "Nan Yang",
      type: "Magazine",
    },
    {
      image: "/assets/images/health-matter.png",
      title: "Latest News",
      type: "Newspaper",
    },
    {
      image: "/assets/images/bernama.png",
      title: "Case Study",
      type: "Newspaper",
    },
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16 relative">
      <BackgroundImage verticalPosition={300} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif mb-6 md:mb-12 text-center">
            OUR LATEST ENDEAVOURS, INSIGHTFUL PUBLICATIONS, AND EVENTS.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 relative">
            <BackgroundImage />

            {publications.map((pub, index) => (
              <div key={index} className="aspect-square space-y-1 mb-6 sm:mb-0">
                <img
                  src={pub.image}
                  alt={pub.title}
                  className="w-full h-auto object-cover rounded-lg shadow-md"
                />
                <h4 className="text-base sm:text-lg font-bold font-serif mt-2">{pub.title}</h4>
                <p className="text-xs text-[#BB8237]">{pub.type}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;