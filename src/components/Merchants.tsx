import React from "react";
import { BackgroundImage } from "./background";

const Merchants = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 h-full flex items-center justify-center relative">
      <BackgroundImage position="left-center" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 justify-center items-center">
        <div className="mt-6 md:mt-8 lg:mt-12 order-1 md:order-1">
          <img
            src="/src/assets/images/merchants.png"
            alt="Team collaboration"
            className="w-full h-auto shadow-lg rounded-lg"
          />
        </div>
        <div className="order-2 md:order-2 mt-6 md:mt-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif mb-4 sm:mb-6 md:mb-8">
            BRIDGING CONSUMERS AND MERCHANTS
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            We unlock new opportunities for brands by partnering exclusively
            with MEITUAN 大众点评 – the leaders in China's lifestyle and service
            industries. From boosting visibility to driving engagement, we
            leverage Meituan and Dianping's expansive reach to craft campaigns
            that resonate and deliver results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Merchants;