import React from "react";
import { BackgroundImage } from "./background";

const ClientCollaboration = () => {
  return (
    <section className="relative flex items-center justify-center pt-8 md:pt-16 pb-16 md:pb-28">
      <BackgroundImage />
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-50">
        <div className="flex flex-col items-center gap-6 md:gap-12">
          <div className="w-full">
            <img
              src="/assets/images/welcome-image.png"
              alt="Team collaboration"
              className="w-full shadow-lg rounded-md"
            />
          </div>

          <div className="w-full text-center gap-6 md:gap-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif">
              WE WORK CLOSELY WITH OUR CLIENTS FOR BUSINESS GROWTH
            </h2>
            <div className="h-1 w-[90%] md:w-[70%] mx-auto my-6 md:my-10 bg-gradient-to-r from-[#F9CE34] via-[#EE2A7B] to-[#6228D7]"></div>
            <div className="flex flex-col gap-3 md:gap-4 max-w-3xl text-center mx-auto">
              <p className="text-base sm:text-lg text-gray-600 mb-2 md:mb-4">
                Founded in 2023, Twenty7Creatives has been empowering businesses
                to new records through our strategic marketing solutions and
                expertise.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-2 md:mb-4">
                Throughout the years, we have been helping many brands and
                businesses build with quality driven process to reach top
                marketing and business success at their target call actions.
              </p>
              <p className="text-base sm:text-lg text-gray-600">
                Your next step to a successful partnership with us will be the
                decision to meet the specific needs of each client, delivering
                results in all measures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientCollaboration;