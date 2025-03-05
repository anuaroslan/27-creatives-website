import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <section className="pb-6 sm:pb-8 md:pb-12 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mt-12 md:mt-16 text-center bg-[#353536] rounded-lg p-4 sm:p-8 md:p-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif mb-4 md:mb-6">
            READY TO GET STARTED?
          </h2>
          <p className="mb-6 md:mb-8 text-sm sm:text-base">
            Connect with us to see what we can do to make your vision a reality.
          </p>
          <Button
            text="Get in touch with us"
            href="/get-in-touch"
            variant="secondary"
          />
          <div className="h-1 w-full mx-auto mt-8 md:mt-10 mb-4 md:mb-5 bg-gradient-to-r from-[#F9CE34] via-[#EE2A7B] to-[#6228D7]"></div>
          <div className="text-[#ABACAF] flex flex-wrap justify-center gap-2 sm:gap-0 font-sans text-xs sm:text-sm">
            <a className="flex items-center">© Twenty Seven Creatives 2024</a>
            <p className="w-1 h-1 rounded-full bg-[#ABACAF] mx-2 hidden sm:block"></p>
            <a className="flex items-center" href="/privacy-policy">
              Privacy Policy
            </a>
            <p className="w-1 h-1 rounded-full bg-[#ABACAF] mx-2 hidden sm:block"></p>
            <a className="flex items-center" href="/terms-of-use">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;