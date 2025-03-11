import React from "react";
import "../styles/global.css";
import "../styles/fonts.css";
import Header from "./Header";
import Footer from "./Footer";
import Button from "./Button";
// import { BackgroundImage } from '../components/background';

export const TermsOfUsePage = () => {
  return (
    <main className="container mx-auto px-4 py-16">
      {/* <BackgroundImage/> */}
      <section className="max-w-6xl mx-auto gap-12 z-10">
        <div className="gap-4 flex flex-col">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight font-souvenir">
            TERMS OF USE
          </h1>
          <p className="text-lg text-gray-600 w-full">
            These Terms of Use govern your use of the Change website and
            services. By accessing or using our website or services, you agree
            to comply with and be bound by these Terms of Use.
          </p>
        </div>
        <div className="border-t-2 border-gray-200 my-10" />
        <div className="gap-4 flex flex-col">
          <h1 className="text-4xl md:text-2xl font-bold leading-tight font-souvenir">
            Intellectual Property:
          </h1>
          <p className="text-lg text-gray-600 w-full">
            The content on our website, including text, graphics, logos, images,
            and software, is the property of Change or its licensors and is
            protected by copyright, trademark, and other intellectual property
            laws. You may not use, modify, reproduce, distribute, or display any
            of our content without our prior written consent.
          </p>
        </div>
        <div className="border-t-2 border-gray-200 my-10" />
        <div className="gap-4 flex flex-col">
          <h1 className="text-4xl md:text-2xl font-bold leading-tight font-souvenir">
            Use of Website:
          </h1>
          <div>
            <p className="text-lg text-gray-600 w-full">
              You may use our website for lawful purposes only and must not
              violate any applicable laws or regulations. You agree not to:
            </p>
            <ul className="list-disc list-inside font-sans text-lg text-gray-600">
              <li>
                Use our website in any manner that could interfere with,
                disrupt, or damage our servers or networks
              </li>
              <li>
                Attempt to gain unauthorized access to any portion of our
                website or services
              </li>
              <li>
                Transmit any viruses, worms, or other malicious code that could
                harm our website or users
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t-2 border-gray-200 my-10" />
        <div className="gap-4 flex flex-col">
          <h1 className="text-4xl md:text-2xl font-bold leading-tight font-souvenir">
            Limitation of Liability:
          </h1>
          <p className="text-lg text-gray-600 w-full">
            In no event shall Change or its affiliates, officers, directors,
            employees, agents, or licensors be liable for any direct, indirect,
            incidental, special, consequential, or punitive damages arising out
            of or in connection with your use of our website or services. This
            includes but is not limited to damages for lost profits, lost data,
            or business interruption, even if we have been advised of the
            possibility of such damages.
          </p>
        </div>
        <div className="border-t-2 border-gray-200 my-10" />
        <div className="gap-4 flex flex-col">
          <h1 className="text-4xl md:text-2xl font-bold leading-tight font-souvenir">
            Governing Law:
          </h1>
          <p className="text-lg text-gray-600 w-full">
            These Terms of Use shall be governed by and construed in accordance
            with the laws of Singapore, without regard to its conflict of law
            provisions. Any disputes arising out of or related to these Terms of
            Use shall be subject to the exclusive jurisdiction of the courts of
            Singapore.
          </p>
        </div>
        <div className="border-t-2 border-gray-200 my-10" />
        <div className="gap-4 flex flex-col">
          <h1 className="text-4xl md:text-2xl font-bold leading-tight font-souvenir">
            Changes to Terms:
          </h1>
          <p className="text-lg text-gray-600 w-full">
            We reserve the right to update or change these Terms of Use at any
            time without prior notice. Any changes will be effective immediately
            upon posting the updated Terms of Use on our website. Your continued
            use of our website after any such changes constitutes your
            acceptance of the new Terms of Use.
          </p>
        </div>
        <div className="border-t-2 border-gray-200 my-10" />
        <div className="gap-4 flex flex-col">
          <h1 className="text-4xl md:text-2xl font-bold leading-tight font-souvenir">
            Contact Us:
          </h1>
          <p className="text-lg text-gray-600 w-full">
            If you have any questions or concerns about our Terms of Use or any
            other aspect of our website or services, please contact us at
            twenty7creatives@gmail.com
          </p>
        </div>
      </section>
    </main>
  );
};

export default TermsOfUsePage;
