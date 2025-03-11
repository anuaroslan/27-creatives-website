import React from "react";
import "../styles/global.css";
import "../styles/fonts.css";
import Header from "./Header";
import Footer from "./Footer";
import Button from "./Button";
// import { BackgroundImage } from '../components/background';

export const PrivacyPolicyPage = () => {
  return (
    <main className="container mx-auto px-4 py-16">
      {/* <BackgroundImage/> */}
      <section className="max-w-6xl mx-auto gap-12 z-10">
        <div className="gap-4 flex flex-col">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight font-souvenir">
            PRIVACY POLICY
          </h1>
          <p className="text-lg text-gray-600 w-full">
            At Change, we value your privacy and are committed to protecting
            your personal information in accordance with the latest standards
            and regulations. This Privacy Policy outlines how we collect, use,
            disclose, and safeguard your information when you use our website or
            services.
          </p>
        </div>
        <div className="border-t-2 border-gray-200 my-10" />
        <div className="gap-4 flex flex-col">
          <h1 className="text-4xl md:text-2xl font-bold leading-tight font-souvenir">
            Information We Collect:
          </h1>
          <p className="text-lg text-gray-600 w-full">
            We collect personal information that you voluntarily provide to us
            when you interact with our website or services, such as your name,
            email address, phone number, and any other information necessary to
            provide our services effectively. We may also automatically collect
            non-personal information, such as your IP address, browser type, and
            operating system, to enhance your user experience and improve our
            services.
          </p>
        </div>
        <div className="border-t-2 border-gray-200 my-10" />
        <div className="gap-4 flex flex-col">
          <h1 className="text-4xl md:text-2xl font-bold leading-tight font-souvenir">
            How We Use Your Information:
          </h1>
          <div>
            <p className="text-lg text-gray-600 w-full">
              We use the information we collect from you to:
            </p>
            <ul className="list-disc list-inside font-sans text-lg text-gray-600">
              <li>Provide and improve our services</li>
              <li>
                Communicate with you about our services, promotions, and updates
              </li>
              <li>Respond to your inquiries and requests</li>
              <li>Personalize and customize your experience</li>
              <li>Protect against fraud and unauthorized access</li>
            </ul>
          </div>
        </div>
        <div className="border-t-2 border-gray-200 my-10" />
        <div className="gap-4 flex flex-col">
          <h1 className="text-4xl md:text-2xl font-bold leading-tight font-souvenir">
            Information Sharing:
          </h1>
          <p className="text-lg text-gray-600 w-full">
            We do not sell, trade, or rent your personal information to third
            parties. However, we may share your information with trusted third
            parties who assist us in operating our website or providing our
            services, as long as they agree to keep your information
            confidential and adhere to applicable privacy laws and regulations.
          </p>
        </div>
        <div className="border-t-2 border-gray-200 my-10" />
        <div className="gap-4 flex flex-col">
          <h1 className="text-4xl md:text-2xl font-bold leading-tight font-souvenir">
            Security:
          </h1>
          <p className="text-lg text-gray-600 w-full">
            We implement industry-standard security measures to protect your
            information from unauthorized access, disclosure, alteration, or
            destruction. However, no method of transmission over the internet or
            electronic storage is completely secure, so we cannot guarantee
            absolute security.
          </p>
        </div>
        <div className="border-t-2 border-gray-200 my-10" />
        <div className="gap-4 flex flex-col">
          <h1 className="text-4xl md:text-2xl font-bold leading-tight font-souvenir">
            Changes to This Policy:
          </h1>
          <p className="text-lg text-gray-600 w-full">
            We reserve the right to update or change this Privacy Policy at any
            time to reflect changes in our practices or legal requirements. We
            will notify you of any material changes by posting the updated
            Privacy Policy on our website or notifying you directly via email or
            other means.
          </p>
        </div>
        <div className="border-t-2 border-gray-200 my-10" />
        <div className="gap-4 flex flex-col">
          <h1 className="text-4xl md:text-2xl font-bold leading-tight font-souvenir">
            Contact Us:
          </h1>
          <p className="text-lg text-gray-600 w-full">
            If you have any questions or concerns about our Privacy Policy or
            our privacy practices, please contact us at
            twenty7creatives@gmail.com
          </p>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicyPage;
