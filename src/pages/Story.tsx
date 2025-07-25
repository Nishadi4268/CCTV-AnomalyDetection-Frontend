import Heading from "@/components/Heading";
import firstimg from "/images/story/firstimg.png";
import mob from "/images/story/mob.png";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";


function Story() {
  const numbersRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  
  const [numbers, setNumbers] = useState({
    customers: 0,
    years: 0,
    reviews: 0,
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
        easing: "ease-out",
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
        reviews: 500 / totalFrames,
      };

      let frame = 0;

      const interval = setInterval(() => {
        frame += 1;
        setNumbers((prev) => ({
          customers: Math.min(100, prev.customers + incrementValues.customers),
          years: Math.min(2.5, prev.years + incrementValues.years),
          reviews: Math.min(500, prev.reviews + incrementValues.reviews),
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
          <div className="font-productsansblack w-full justify-center text-[16px] xs550:text-[27px] md:text-[38px] lg:text-48
           xl-1500:text-[58px] md:-tracking-[2px] xl-1800:-tracking-[2.5px] xl-1800:text-76 xl:text-nowrap text-center ">
            <span> UNVEILING SRI LANKA'S SPIRIT OF ADVENTURE</span>
          </div>
          <Heading
            text1="Embark on an unforgettable journey through the "
            text2="vibrant landscapes, rich culture, and thrilling adventures of Sri Lanka."
            textM1="Embark on an unforgettable journey through the vibrant "
            textM2="landscapes, rich culture, and thrilling adventures of Sri Lanka."
            padding="px-1"
          />
        </div>

        <div className="space-y-[20px] lg:space-y-[80px]">
          <div className="flex flex-col w-full items-center">
            <img src={firstimg} className="hidden lg:flex" />
            <img src={mob} className="flex lg:hidden w-full"/>
          </div>
          {/* loku div */}
          <div className="lg:px-[41px] flex flex-col space-y-[28px] lg:space-y-[40px] items-center justify-center">
            <div className="flex flex-col md:flex-row space-y-[40px] md:space-y-0 md:space-x-[140px]  ">
              <div className="flex flex-col font-productsansMedium items-center">
                <span className="text-[32px] md:text-[48px]">{numbers.years.toFixed(1)}</span>
                <span className="text-[14px] md:text-[16px]">Years Experience</span>
              </div>
              <div ref={numbersRef} className="flex flex-col font-productsansMedium items-center">
                <span className="text-[32px] md:text-[48px]">{Math.round(numbers.reviews)}+</span>
                <span className="text-[14px] md:text-[16px]">Positive Reviews</span>
              </div>
              <div className="flex flex-col font-productsansMedium items-center">
                <span className="text-[32px] md:text-[48px]">{Math.round(numbers.customers)}k</span>
                <span className="text-[14px] md:text-[16px]">Trusted Customers</span>
              </div>
            </div>
            <div data-aos="fade-up"
            data-aos-anchor-placement="top-center" className="space-y-[16px] md:space-y-[28px] flex flex-col items-center">
              <span className="font-productsans text-[16px] lg:text-[32px] flex">
                Discover the Heart Behind Our Journey.
              </span>
              <p className="font-productsansregular md:text-center text-[12px] md:text-[16px] text-justify">
                Welcome to our haven, where serenity meets luxury and every
                moment is crafted to perfection. Nestled in the stunning
                landscapes of Sri Lanka, we take pride in offering a unique
                blend of natural beauty and modern comforts. Whether you seek
                relaxation, adventure, or a mix of both, our space is designed
                to cater to your every need. Our story is one of passion and
                commitment to hospitality. We are dedicated to creating a home
                away from home, where guests can immerse themselves in the local
                culture, savor exquisite cuisine, and enjoy personalized
                services that leave a lasting impression. From our tastefully
                designed accommodations to our eco-conscious practices, every
                detail reflects our mission to deliver an experience that goes
                beyond the ordinary. Our team is here to ensure your stay is
                filled with warmth, care, and unforgettable moments. Whether
                you're here for a family getaway, a romantic retreat, or a solo
                adventure, we invite you to discover the magic of our
                destination and let us be part of your journey. Welcome to a
                world where every guest is treated like family, and every day is
                a celebration of life’s simple joys.
              </p>
            </div>
          </div>
        </div>
     
    </div>
  );
}

export default Story;
