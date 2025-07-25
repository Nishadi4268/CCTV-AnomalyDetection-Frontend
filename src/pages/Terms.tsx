import PageLoader from "@/components/PageLoader";
import { useState, useEffect } from "react";

function Terms() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);
  return (
    <div className="flex flex-col md:flex max-w-[1920px] mx-auto w-full relative ">
      {loading && <PageLoader />}
      <div className="flex flex-col space-y-[20px] md:space-y-[36px] pt-[12px] md:pt-0 md:-mt-[12px]">
        <div className="flex items-center font-productsansMedium h-[47px] lg:h-[79px] pl-[43px] w-full text-[20px]  md:text-[24px]  bg-[#1A3A6D] ">
          <span className="">TERMS AND CONDITIONS</span>
        </div>
        <div className="space-y-[20px] md:space-y-[32px]  flex flex-col">
          {/* loku div */}
          <span className="font-productsansregular text-[14px] md:text-[18px] leading-[20px] md:leading-[30px]">
            Welcome to Thabili! Your privacy is important to us, and we are
            committed to protecting the personal information you share with us.
            This Privacy Policy outlines how we collect, use, and safeguard your
            information when you visit our website.
          </span>

          {/* content */}
          <div className="space-y-[16px] md:space-y-[28px] ">
            <div className="space-y-[16px] md:space-y-[24px]">
              <span className="font-productsansMedium text-[14px] md:text-[16px]">
                Information We Collect
              </span>
              <p className="font-productsansregular text-[12px] md:text-[14px] leading-[20px] md:leading-[30px]">
                Personal Information: When you make a booking or contact us, we
                may collect details such as your name, email address, phone
                number, and payment details. Non-Personal Information: We may
                gather data about your device, browser type, and IP address to
                improve your browsing experience. Cookies: Our website uses
                cookies to enhance functionality and analyze website traffic.
              </p>
            </div>

            <div className="space-y-[16px] md:space-y-[24px]">
              <span className="font-productsansMedium text-[14px] md:text-[16px]">
                How We Use Your Information
              </span>
              <div className="font-productsansregular text-[12px] md:text-[14px] leading-[20px] md:leading-[30px]">
                To process reservations and provide services. <br />
                To improve our website and customize your user experience.{" "}
                <br />
                To send updates, promotional offers, and important announcements
                (you can opt-out at any time). <br />
                To comply with legal obligations.
              </div>
            </div>

            <div className="space-y-[16px] md:space-y-[24px]">
              <span className="font-productsansMedium text-[14px] md:text-[16px]">
                Information Sharing
              </span>
              <p className="font-productsansregular text-[12px] md:text-[14px] leading-[20px] md:leading-[30px]">
                We respect your privacy and do not sell, rent, or share your
                personal information with third parties, except: <br />
                <ul className="list-disc pl-6">
                  <li>
                    With trusted service providers who assist in delivering our
                    services (e.g., payment processors).
                  </li>
                </ul>
                <ul className="list-disc pl-6">
                  <li>
                    To comply with legal requirements or protect our rights and
                    safety.
                  </li>
                </ul>
              </p>
            </div>

            <div className="space-y-[16px] md:space-y-[24px]">
              <span className="font-productsansMedium text-[14px] md:text-[16px]">
                Data Security
              </span>
              <p className="font-productsansregular text-[12px] md:text-[14px] leading-[20px] md:leading-[30px]">
                We employ industry-standard measures to protect your information
                against unauthorized access, alteration, or misuse. However, no
                system is 100% secure, and we cannot guarantee absolute security
              </p>
            </div>

            <div className="space-y-[16px] md:space-y-[24px]">
              <span className="font-productsansMedium text-[14px] md:text-[16px]">
                Your Rights
              </span>
              <p className="font-productsansregular text-[12px] md:text-[14px] leading-[20px] md:leading-[30px]">
                You have the right to: <br />
                <ul className="list-disc pl-6">
                  <li>
                    Access and review the personal information we hold about
                    you.
                  </li>
                </ul>
                <ul className="list-disc pl-6">
                  <li>
                    Request corrections or deletion of your personal data.
                  </li>
                </ul>
                <ul className="list-disc pl-6">
                  <li>Opt-out of marketing communications.</li>
                </ul>
                To exercise these rights, please contact us at [Insert Contact
                Email].
              </p>
            </div>

            <div className="space-y-[16px] md:space-y-[24px]">
              <span className="font-productsansMedium text-[14px] md:text-[16px]">
                Third-Party Links
              </span>
              <p className="font-productsansregular text-[12px] md:text-[14px] leading-[20px] md:leading-[30px]">
                Our website may contain links to external sites. We are not
                responsible for the privacy practices or content of these
                third-party websites.
              </p>
            </div>

            <div className="space-y-[16px] md:space-y-[24px]">
              <span className="font-productsansMedium text-[14px] md:text-[16px]">
                Updates to This Policy
              </span>
              <p className="font-productsansregular text-[12px] md:text-[14px] leading-[20px] md:leading-[30px]">
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page with the updated effective date.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terms;
