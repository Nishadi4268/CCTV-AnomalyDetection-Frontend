import PlanCard from "@/components/custom-ui/PlanCard";
import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import info1 from "/images/product/info1.jpg";
import info2 from "/images/product/info2.jpeg";
import info3 from "/images/product/info3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductDetails from "@/components/product/ProductDetails";

interface Card {
  title: string;
  duration: string;
  desc: string;
  price: string;
  features: string[];
}

const cards: Card[] = [
  {
    title: "Basic Surveillance Plan",
    duration: "6 Months",
    price: "9.99",
    //   total: "$59.94",
    desc: "Essential CCTV monitoring with basic anomaly detection capabilities.",
    features: [
      "24/7 basic motion detection alerts",
      "Up to 2 camera connections",
      "Anomaly detection for common scenarios (movement, object left behind)",
      "7-day video storage (cloud)",
      "Email/SMS notifications",
      "Basic reporting dashboard",
      "Single user access"
    ]
  },
  {
    title: "Premium Plan",
    duration: "1 Year",
    desc: "Everything in Basic, plus:",
    price: "19.99",
    features: [
      "Full HD & 4K Ultra streaming",
      "AI-enhanced subtitles & real-time language translation",
      "AI-powered interactive storytelling & content personalization",
      "Ad-free experience",
      "Watch on up to 3 devices"
    ]
  },
  {
    title: "Ultimate AI Plan",
    duration: "2 Year",
    desc: "The Ultimate AI-Powered Experience:",
    price: "29.99",
    features: [
      "Everything in Premium, plus:",
      "AI-generated exclusive content & deepfake-enhanced storytelling",
      "Voice-controlled smart recommendations",
      "Personalized AI avatar host for your shows",
      "Access to beta features & early content releases"
    ]
  }
];

const Product = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  // Carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    adaptiveHeight: true
  };

  return (
    <div className="font-manrope text-white">
      {/* carosal */}
      <div className="w-full mb-8 md:mb-12 lg:mb-16">
        <Slider {...carouselSettings}>
          <div className="relative">
            <img
              src={info1}
              alt="CCTV Monitoring"
              className="w-full h-auto max-h-[500px] object-cover rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-xl">
              <h3 className="text-2xl md:text-3xl text-center w-full font-bold text-white mb-2">
                Smart Anomaly Detection
              </h3>
              <p className="text-white/90 text-center w-full ">
                Detects both known anomalies (fire, accidents) and unknown,
                unseen threats. Automatically alerts authorities - fire
                department, emergency services (1990), or police based on the
                situation.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src={info2}
              alt="Anomaly Detection"
              className="w-full h-auto max-h-[500px] object-cover rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-xl">
              <h3 className="text-2xl md:text-3xl text-center w-full font-bold text-white mb-2">
                Personalized Recognition
              </h3>
              <p className="text-white/90 text-center w-full">
                Learns to recognize your family members, vehicles, pets, and
                more. Customizable to your specific environment and needs.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src={info3}
              alt="Security Solutions"
              className="w-full h-auto max-h-[500px] object-cover rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-xl">
              <h3 className="text-2xl md:text-3xl text-center w-full font-bold text-white mb-2">
                Adaptive Learning System
              </h3>
              <p className="text-white/90 text-center w-full ">
                Continuously improves through a 1-month training period at your
                location. Becomes more accurate over time by learning your
                environment's unique patterns.
              </p>
            </div>
          </div>
        </Slider>
      </div>

      <ProductDetails />

      {/* subscription part */}
      <div className="bg-blue-950 p-[20px] rounded-[1rem] 3xl:py-[50px] 3xl:px-[192px]">
        <h1 className="text-[35px] md:text-[3.125rem] text-center pb-5 lg:pb-[50px]">
          Subscription Plans
        </h1>
        <div className="hidden xl:flex gap-6 w-full">
          {/* for desktop */}
          {cards.map((card, index) => (
            <div key={index} className="w-full">
              <PlanCard
                title={card.title}
                duration={card.duration}
                desc={card.desc}
                price={card.price}
                features={card.features}
                variant={index === 1 ? "alternative" : "default"}
              />
            </div>
          ))}
        </div>

        {/* for mobile screens */}
<div className="xl:hidden flex flex-col gap-4">
  {/* Dropdown Selector */}
  <div className="relative mb-4 transition-all duration-300 hover:scale-[1.01] focus-within:scale-[1.02]">
  <select
    onChange={(e) => setOpenIndex(Number(e.target.value))}
    value={openIndex !== null ? openIndex : ""}
    className="w-full p-4 bg-gradient-to-b from-[#303135] to-[#111112] rounded-[1.25rem] text-white appearance-none border border-[#FFFFFF33] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
  >
    <option value="" disabled className="bg-[#111112]">
      Select a Plan
    </option>
    {cards.map((card, index) => (
      <option 
        key={index} 
        value={index}
        className="bg-[#111112] hover:bg-blue-950 rounded-3xl transition-colors duration-200"
      >
        {card.title} - ${card.price}/{card.duration}
      </option>
    ))}
  </select>
  <div className={`absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none transition-transform duration-300 ${openIndex !== null ? 'rotate-180' : ''}`}>
    <MdArrowDropDown size={24} />
  </div>
</div>

  {/* Selected Plan Card */}
  {openIndex !== null && (
    <div className="border border-[#FFFFFF33] rounded-[1.875rem] overflow-hidden">
      <PlanCard
        title={cards[openIndex].title}
        duration={cards[openIndex].duration}
        desc={cards[openIndex].desc}
        price={cards[openIndex].price}
        features={cards[openIndex].features}
        variant={openIndex === 1 ? "alternative" : "default"}
        onClose={() => setOpenIndex(null)}
      />
    </div>
  )}
</div>
      </div>
    </div>
  );
};

export default Product;
