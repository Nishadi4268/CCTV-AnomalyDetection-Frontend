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
    <div className="flex flex-col md:flex max-w-[1920px] mx-auto w-full relative">
      {loading && <PageLoader />}
      <div className="flex flex-col space-y-[20px] md:space-y-[36px] pt-[12px] md:pt-0 md:-mt-[12px]">
        <div className="flex items-center font-productsansMedium h-[47px] lg:h-[79px] pl-[43px] w-full text-[20px] md:text-[24px] bg-[#1A3A6D] text-white">
          <span>SAFEVISION TERMS AND CONDITIONS</span>
        </div>
        
        <div className="space-y-[20px] md:space-y-[32px] flex flex-col px-4 md:px-8">
          <span className="font-productsansregular text-[14px] md:text-[18px] leading-[20px] md:leading-[30px]">
            Welcome to SafeVision CCTV Security System. These terms govern your use of our AI-powered surveillance services. By using our services, you agree to comply with these terms and all applicable laws.
          </span>

          <div className="space-y-[16px] md:space-y-[28px]">
            {/* Service Description */}
            <div className="space-y-[16px] md:space-y-[24px]">
              <span className="font-productsansMedium text-[14px] md:text-[16px]">
                Service Overview
              </span>
              <p className="font-productsansregular text-[12px] md:text-[14px] leading-[20px] md:leading-[30px]">
                SafeVision provides intelligent CCTV surveillance with:
                <ul className="list-disc pl-6 mt-2">
                  <li>Real-time anomaly detection (fire, accidents, unauthorized access)</li>
                  <li>Automated emergency service alerts</li>
                  <li>30-day video storage (premium plans available)</li>
                  <li>AI-powered behavioral analysis</li>
                </ul>
              </p>
            </div>

            {/* User Responsibilities */}
            <div className="space-y-[16px] md:space-y-[24px]">
              <span className="font-productsansMedium text-[14px] md:text-[16px]">
                User Responsibilities
              </span>
              <div className="font-productsansregular text-[12px] md:text-[14px] leading-[20px] md:leading-[30px]">
                You agree to:
                <ul className="list-disc pl-6 mt-2">
                  <li>Use the system only for lawful surveillance purposes</li>
                  <li>Not attempt to bypass any security measures</li>
                  <li>Keep your login credentials secure</li>
                  <li>Comply with all local privacy laws regarding surveillance</li>
                </ul>
              </div>
            </div>

            {/* Data Collection */}
            <div className="space-y-[16px] md:space-y-[24px]">
              <span className="font-productsansMedium text-[14px] md:text-[16px]">
                Data Collection & Privacy
              </span>
              <p className="font-productsansregular text-[12px] md:text-[14px] leading-[20px] md:leading-[30px]">
                We collect:
                <ul className="list-disc pl-6 mt-2">
                  <li>Video footage from connected cameras</li>
                  <li>System usage data for service improvement</li>
                  <li>Contact information for account management</li>
                </ul>
                <p className="mt-2">
                  All data is encrypted and stored securely. We never sell your footage to third parties.
                </p>
              </p>
            </div>

            {/* System Requirements */}
            <div className="space-y-[16px] md:space-y-[24px]">
              <span className="font-productsansMedium text-[14px] md:text-[16px]">
                System Requirements
              </span>
              <p className="font-productsansregular text-[12px] md:text-[14px] leading-[20px] md:leading-[30px]">
                Minimum requirements for optimal performance:
                <ul className="list-disc pl-6 mt-2">
                  <li>10Mbps internet connection per camera</li>
                  <li>Compatible with H.264/H.265 cameras</li>
                  <li>2GHz dual-core processor for AI features</li>
                </ul>
              </p>
            </div>

            {/* Emergency Services */}
            <div className="space-y-[16px] md:space-y-[24px]">
              <span className="font-productsansMedium text-[14px] md:text-[16px]">
                Emergency Response
              </span>
              <p className="font-productsansregular text-[12px] md:text-[14px] leading-[20px] md:leading-[30px]">
                Our system automatically alerts:
                <ul className="list-disc pl-6 mt-2">
                  <li>Fire department for fire detection</li>
                  <li>Police for gunshot detection</li>
                  <li>Emergency services for accident detection</li>
                </ul>
                <p className="mt-2">
                  You are responsible for verifying emergency contacts are current.
                </p>
              </p>
            </div>

            {/* Subscription & Payments */}
            <div className="space-y-[16px] md:space-y-[24px]">
              <span className="font-productsansMedium text-[14px] md:text-[16px]">
                Subscription Terms
              </span>
              <p className="font-productsansregular text-[12px] md:text-[14px] leading-[20px] md:leading-[30px]">
                <ul className="list-disc pl-6">
                  <li>Monthly/annual billing cycles available</li>
                  <li>7-day free trial for new users</li>
                  <li>30-day money-back guarantee</li>
                  <li>Cancel anytime with 30 days notice</li>
                </ul>
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="space-y-[16px] md:space-y-[24px]">
              <span className="font-productsansMedium text-[14px] md:text-[16px]">
                Limitation of Liability
              </span>
              <p className="font-productsansregular text-[12px] md:text-[14px] leading-[20px] md:leading-[30px]">
                SafeVision is not liable for:
                <ul className="list-disc pl-6 mt-2">
                  <li>Internet or power outages affecting service</li>
                  <li>False positives in anomaly detection</li>
                  <li>Unauthorized access due to compromised credentials</li>
                  <li>Acts beyond our reasonable control</li>
                </ul>
              </p>
            </div>

            {/* Updates */}
            <div className="space-y-[16px] md:space-y-[24px]">
              <span className="font-productsansMedium text-[14px] md:text-[16px]">
                Policy Updates
              </span>
              <p className="font-productsansregular text-[12px] md:text-[14px] leading-[20px] md:leading-[30px]">
                We may update these terms periodically. Continued use after changes constitutes acceptance. Major changes will be notified via email 30 days in advance.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-[16px] md:space-y-[24px] pb-8">
              <span className="font-productsansMedium text-[14px] md:text-[16px]">
                Contact Information
              </span>
              <p className="font-productsansregular text-[12px] md:text-[14px] leading-[20px] md:leading-[30px]">
                For questions about these terms, contact our support team:
                <br />
                Email: support@safevision.com
                <br />
                Phone: +1 (800) 555-0199
                <br />
                24/7 Emergency Support: +1 (800) 555-9111
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terms;