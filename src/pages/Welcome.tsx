import React from "react";

const Welcome = () => {
  return (
    <section className="py-16 container mx-auto flex flex-col items-center gap-8 text-center h-full">
      <div className="flex flex-col items-center gap-8">
        <div className="w-full">
          <img
            src="/src/assets/images/welcome-image.png"
            alt="Team meeting"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="">
          <h2 className="text-3xl font-bold mb-6">
            WE WORK CLOSELY WITH OUR CLIENTS FOR BUSINESS GROWTH
          </h2>
          <p className="text-gray-600 mb-4">
            Founded in 2023, Haru Digital Solutions has been empowering
            businesses through strategic marketing and innovative solutions.
          </p>
          <p className="text-gray-600">
            Through the years, we have been helping our brands and businesses
            take off with results driven growth through marketing and various
            creative and technological solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
