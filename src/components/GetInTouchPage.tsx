import React, { useState } from "react";
import "../styles/global.css";
import "../styles/fonts.css";
import Button from "./Button";


const GetInTouchPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  return (
    <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 z-10">
      {/* Left Column */}
      <div className="font-sans">
        <div className="mb-8">
          <div className="flex items-center">
            <p className="w-1 h-1 bg-[#D7B26D] mx-2"></p>
            <span className="text-sm font-medium font-sans">GET IN TOUCH</span>
          </div>
          <h1 className="text-5xl font-bold mt-2">
            CHANGE BEGINS
            <br />
            WITH WORDS
          </h1>
        </div>

        <p className="text-lg mb-8">
          Contact us to discuss business opportunities, or just to say hello.
          Use the form below or send us an email at twenty7creatives@gmail.com
        </p>

        <div className="space-y-3">
          <p>Email Us: twenty7creatives@gmail.com</p>
          <p>Call Us: +6016 366 2772</p>
          <a href="https://linkedin.com" className="flex items-center gap-2">
            <img
              src="/assets/logo/icon-linkedin.svg"
              alt="LinkedIn"
              className="w-5 h-5"
            />
            Follow Us
          </a>
        </div>
      </div>

      {/* Right Column - Contact Form */}
      <div>
      {isSubmitted && (
          <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg">
            Thank you for your message! We'll get back to you soon.
          </div>
        )}
        <form
          className="space-y-6 font-sans"
          action={import.meta.env.FORMIE_API_KEY}
          method="post"
          onSubmit={() => setIsSubmitted(true)}
        >
          <div>
            <label htmlFor="fullName" className="block text-sm mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Let us know how we can help..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white"
              required
            ></textarea>
          </div>

          <div className="flex w-full justify-center cursor-pointer">
            <Button text="Get in touch with us" fullWidth type="submit" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default GetInTouchPage;
