import Heading from "@/components/Heading";
import firstimg from "/images/story/story.jpg";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";

function Story() {
  const numbersRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  const [numbers, setNumbers] = useState({
    customers: 0,
    years: 0,
    reviews: 0
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: true,
      delay: 100,
      easing: "ease-out"
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (numbersRef.current) {
      observer.observe(numbersRef.current);
    }

    return () => {
      if (numbersRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(numbersRef.current);
      }
    };
  }, [isInView]);

  useEffect(() => {
    if (isInView) {
      const animationDuration = 1500;
      const frameDuration = 10;
      const totalFrames = animationDuration / frameDuration;

      const incrementValues = {
        customers: 100 / totalFrames,
        years: 2.5 / totalFrames,
        reviews: 500 / totalFrames
      };

      let frame = 0;

      const interval = setInterval(() => {
        frame += 1;
        setNumbers((prev) => ({
          customers: Math.min(100, prev.customers + incrementValues.customers),
          years: Math.min(2.5, prev.years + incrementValues.years),
          reviews: Math.min(500, prev.reviews + incrementValues.reviews)
        }));

        if (frame >= totalFrames) {
          clearInterval(interval);
        }
      }, frameDuration);
    }
  }, [isInView]);
  return (
    <div className="flex flex-col md:flex max-w-[1920px] mx-auto w-full relative">
      <div className="flex flex-col space-y-[16px] md:space-y-[46px]">
        <div
          className="font-productsansblack w-full justify-center text-[16px] xs550:text-[27px] md:text-[38px] lg:text-48
           xl-1500:text-[58px] md:-tracking-[2px] xl-1800:-tracking-[2.5px] xl-1800:text-76 text-center "
        >
          <span>REVOLUTIONIZING SECURITY WITH AI-POWERED SURVEILLANCE</span>
        </div>
        <Heading
          text1="Our advanced CCTV system detects known and unknown anomalies, "
          text2="sends real-time alerts, and continuously learns to protect what matters most."
          textM1="Our advanced CCTV system detects known and unknown anomalies, "
          textM2="sends real-time alerts, and continuously learns to protect what matters most."
          padding="px-1"
        />
      </div>

      <div className="space-y-[20px] lg:space-y-[80px]">
        <div className="flex flex-col w-full items-center">
          <img
            src={firstimg}
            className="flex rounded-2xl"
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="800"
            data-aos-easing="ease-out"
            data-aos-once="true"
            alt="AI-Powered CCTV Analytics Dashboard"
          />
        </div>
        {/* large div */}
        <div className="lg:px-[41px] flex flex-col space-y-[28px] lg:space-y-[40px] items-center justify-center">
          <div className="flex flex-col md:flex-row space-y-[40px] md:space-y-0 md:space-x-[140px]  ">
            <div className="flex flex-col font-productsansMedium items-center">
              <span className="text-[32px] md:text-[48px]">
                {numbers.years.toFixed(1)}
              </span>
              <span className="text-[14px] md:text-[16px]">
                Active Deployments
              </span>
            </div>
            <div
              ref={numbersRef}
              className="flex flex-col font-productsansMedium items-center"
            >
              <span className="text-[32px] md:text-[48px]">
                {Math.round(numbers.reviews)}+
              </span>
              <span className="text-[14px] md:text-[16px]">
                Anomalies Detected
              </span>
            </div>
            <div className="flex flex-col font-productsansMedium items-center">
              <span className="text-[32px] md:text-[48px]">
                {Math.round(numbers.customers)}k
              </span>
              <span className="text-[14px] md:text-[16px]">
                Avg. Response Time
              </span>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="space-y-[16px] md:space-y-[28px] flex flex-col items-center"
          >
            <span className="font-productsans text-[16px] lg:text-[32px] flex">
              Intelligent Security That Learns With You{" "}
            </span>
            <p className="font-productsansregular md:text-center text-[12px] md:text-[16px] text-justify">
              Our AI-driven CCTV system goes beyond traditional surveillance by
              detecting both known threats (like fires, accidents, or gunshots)
              and unknown anomalies through adaptive machine learning. When a
              threat is identified, it automatically alerts the relevant
              authorities (fire department, police, or emergency services) in
              real-time. The system personalizes protection by learning from
              you—recognizing family members, pets, and vehicles while adapting
              to your environment during a 1-month training period. With
              continuous improvement and 24/7 monitoring, we deliver proactive
              security that evolves with your needs. Trusted by homes and
              businesses worldwide, our technology ensures safety isn't just
              reactive—it's predictive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
