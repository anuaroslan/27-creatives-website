import "../styles/global.css";
import Button from "../components/Button";
import ImageCarousel from "../components/ImageCarousel";
import { BackgroundImage } from "./background";

const Hero = () => {
  return (
    <div className="relative">
      <BackgroundImage />
      <section className="relative z-10 flex flex-col items-center justify-center gap-4 md:gap-8 py-10 md:min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-50 flex flex-col items-center md:items-start gap-4 md:gap-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight font-souvenir md:text-center md:text-left">
            EMPOWERING BUSINESSES THROUGH RESULTS DRIVEN MARKETING SOLUTIONS
          </h1>
          <p className="text-base md:text-lg text-gray-600 w-full md:max-w-[60%] md:text-center md:text-left">
            At Twenty7Creatives, we don't just create campaigns, but
            result-driven, solutions based marketing campaigns curated to bring
            results and resonate with your audience. We work closely with our
            clients to understand the business better and provide tailored
            solutions to help drive business growth.
          </p>
          <div className="w-full flex justify-center md:justify-start">
            <Button text="Get in touch with us" href="/get-in-touch" />
          </div>
        </div>
        <div className="w-full mt-6 md:mt-0">
          <ImageCarousel />
          {/* In mobile, either adjust this to make it smaller, or make it move on its own as the user scrolls down */}
        </div>
      </section>
    </div>
  );
};

export default Hero;