import Button from "@/components/Button2";
import { IoSearchOutline } from "react-icons/io5";
import { HiArrowUpRight } from "react-icons/hi2";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import image from "/images/home/img123.jpg";
import imagemob from "/images/home/imagemob.jpg";
import dis1 from "/images/home/dis1.png";
import devil from "/images/home/devil.png";
import devilmob from "/images/home/devilmob.webp";
import dancer from "/images/home/dancer.png";
import elephant from "/images/home/elephant.png";
import des1 from "/images/home/des1.png";
import des2 from "/images/home/des2.png";
import des3 from "/images/home/des3.png";
import des4 from "/images/home/des4.png";
import sigiri from "/images/home/sigiri.png";
import sigirimob from "/images/home/sigirimob.png";
import CategorySwiper from "@/components/category/CategorySwiper";
import { phases } from "@/constants/homeSwiperItems";
import Reviewcompo from "@/components/Reviewcompo";
import { phasesreview } from "@/constants/reviewItems";
import { useState, useEffect, useRef } from "react";
import Carousel from "@/components/Carousel";
import ImageGrid from "@/components/home/imggrid";
import { packagesitems } from "@/constants/packagesitems";
import Packages from "@/components/home/packages_Home";
import Card from "@/components/home/Card";
import { contentData } from "@/constants/CardData";
import im1 from "/images/home/im1.jpg";
import im2 from "/images/home/im2.jpg";
import im3 from "/images/home/im3.jpg";
import im4 from "/images/home/im4.jpg";
import im5 from "/images/home/im5.jpg";
import im6 from "/images/home/im6.jpg";
import im7 from "/images/home/im7.webp";
import im8 from "/images/home/im8.jpg";
import im9 from "/images/home/im9.jpeg";
import im10 from "/images/home/im10.webp";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { GoArrowUpRight } from "react-icons/go";
import PageLoader from "@/components/PageLoader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.to(heroRef.current, {
      yPercent: -50,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        scrub: 1
      }
    });
  }, []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);
  // useEffect(() => {
  //   AOS.init({
  //     duration: 3000,
  //     once: true,
  //   });
  // }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: true,
      delay: 100,
      easing: "ease-out"
    });
  }, []);
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 50,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: { staggerChildren: 0.2 },
  //   },
  // };

  const floatingEffect = {
    rest: { y: 0 },
    hover: { y: -5, transition: { yoyo: Infinity, duration: 0.5 } }
  };
  const [visibleCards, setVisibleCards] = useState(5);
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setVisibleCards(screenWidth >= 640 ? 5 : 5); // 10 for larger screens, 6 for smaller
    };

    handleResize(); // Set initial value based on current screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [activePhase, setActivePhase] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % phases.length);
    }, 3000); // Auto-swipe every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  const images = [
    { src: im1, text: "Abuse Detection" },
    { src: im2, text: "Shoplifting Detection" },
    { src: im3, text: "Shooting Detection" },
    { src: im4, text: "Road Accident Detection" },
    { src: im5, text: "Robbery Detection" },
    { src: im6, text: "Stealing Detection" },
    { src: im7, text: "Arson Detection" },
    { src: im8, text: "Falling Detection" },
    { src: im9, text: "Fighting Detection" },
    { src: im10, text: "Vandalism Detection" }
  ];

  const data = phasesreview.map((phase, index) => (
    <div key={index}>
      <Reviewcompo
        name={phase.name}
        image={phase.image}
        imageMobile={phase.imageMobile}
        rates={Number(phase.rates)}
        msg={phase.msg}
      />
    </div>
  ));

  const carddata = contentData.cards.map((card, index) => (
    <div key={index}>
      <Card
        key={card.id}
        image={card.imageSrc}
        title={card.title}
        location={card.location}
        description={card.description}
      />
    </div>
  ));

  const imgdata = images.map((image, index) => (
    <div key={index}>
      <ImageGrid images={[image.src]} text={image.text} />
    </div>
  ));

  return (
    <div className="flex flex-col md:flex max-w-[1920px] mx-auto w-full relative ">
      {loading && <PageLoader />}
      <div className=" flex flex-col space-y-[32px] lg:space-y-[40px]  ">
        <div className="flex flex-col space-y-[16px] lg:space-y-[40px]">
          <div className="grid grid-cols-4 lg:grid-cols-8 grid-rows-1 w-full  justify-between gap-y-4 lg:gap-y-0 gap-x-2 md:gap-x-4">
            <Button title="Fighting" />
            <Button title="Shoplifting " />
            <Button title="Road Accidents " />
            <Button title="Theaft " />
            <Button title="Accident" />
            <Button title="Shooting" />
            <Button title="Fire " />
            <Button title="Robbery" />
          </div>
          <div
            className="font-productsansblack w-full justify-center text-[20px] xs550:text-[30px] md:text-[36px] lg:text-40 
          text-center xl-1500:text-[45px] md:-tracking-[2px] xl-1800:-tracking-[2.5px] xl-1800:text-[58px] xl:text-nowrap "
          >
            <span>SAFEGUARDING TOMORROW: CCTV ANOMALY DETECTION</span>
          </div>
          <div className="flex flex-col text-center space-y-8 md:space-y-0 md:text-start md:flex-row justify-between items-center font-productsansregular">
            <div className="flex flex-col">
              <span className="hidden md:flex text-[14px] lg:text-[16px]">
                Prioritizes robust security, ensures future-readiness, leverages
                cutting-edge technology, <br /> adapts to evolving digital
                landscapes for sustained growth.
              </span>
              <span className="flex md:hidden text-[12px]">
                Emphasizes strong security, future readiness, and advanced
                technology for sustainable innovation and digital
                transformation.
              </span>
            </div>
            <div className=" flex w-[281px] md:w-[264px] h-[24px] md:h-[40px] md:space-x-32">
              <div className="flex justify-between w-full  border-b border-black items-center ">
                <input
                  placeholder="Search"
                  title="Search"
                  className="placeholder-black text-12 sm:text-14 focus:outline-none items-center"
                />
                <span className="flex cursor-pointer hover:opacity-85">
                  <IoSearchOutline className="cursor-pointer md:w-[24px] md:h-[24px]" />
                </span>
              </div>
            </div>
          </div>
          <div className="flex relative items-center justify-center">
            <img src={image} className="hidden md:flex w-full lg:h-[520px]  " />
            <img src={imagemob} className="flex md:hidden w-full" />
            <div className="flex  flex-col space-y-4 xs:space-y-7 md:space-y-2 lg:space-y-4 xl:space-y-7 2xl:space-y-9 w-full text-white px-[17px] md:px-[60px] md:[98px] absolute">
              <span className="hidden md:flex text-[35px] md:text-[35px] lg:text-[47px] xl:text-[60px] 2xl:text-[80px] leading-none font-productsansblack">
                Unveil the Unseen: <br />
                Real-Time Threat Detection with <br /> AI-Powered CCTV
              </span>
              <span className="flex md:hidden text-[16px] xs400:text-[20px] xs550:text-[30px] sm:text-[40px] w-[70%] leading-none font-productsansblack">
                Unveil the Unseen: <br />
                Real-Time Detection <br />
                with AI-Powered CCTV
              </span>
              <span className="hidden md:flex font-productsansregular text-[12px] md:text-[16px] sm:text-base">
                Immerse yourself in a world of heightened security,
                <br />
                providing continuous vigilance, and actionable insights for a
                truly secure environment.
              </span>
              <span className="flex md:hidden font-productsansregular text-[12px] sm:text-base">
                Immerse yourself in a world of heightened security,
                <br />
                providing continuous vigilance, and actionable insights <br />
                for a truly secure environment.
              </span>
              <Link to="/destination">
                <button className="flex items-center  transition-transform duration-300 hover:translate-y-1 hover:opacity-90 space-x-3 w-[158px] h-[28px] md:h-auto md:w-[30%] lg:w-[24%] xl:w-[14%] justify-center py-1 sm:py-2 bg-white font-productsans text-[#1A3A6D]">
                  <span className="text-[12px] md:text-[14px]"> Explore</span>
                  <HiOutlineArrowNarrowRight className="w-4 md:w-6 h-6" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* content */}
        <div className="flex flex-col space-y-[32px] md:space-y-[72px]">
          <div className="flex flex-col justify-center space-y-[28px] md:space-y-[46px] ">
            <div className="justify-center flex font-productsans text-[16px] lg:text-[24px] text-center">
              Intelligent Surveillance: Comprehensive Anomaly Detection For All
              Sectors.
            </div>
            {/* <ImageGrid/> */}
            <div>
              <div className="hidden md:grid grid-cols-5 grid-rows-2 gap-x-[20px] lg:gap-x-[46px] gap-y-9 justify-between ">
                {images.map((img, idx) => (
                  <motion.div
                    variants={fadeInUp}
                    whileHover="hover"
                    initial="rest"
                    animate="rest"
                    whileInView={{ opacity: 1 }}
                    key={idx}
                    className="relative"
                  >
                    <motion.div variants={floatingEffect}>
                      <ImageGrid images={[img.src]} text={img.text} />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
              <div className="hidden sm:flex md:hidden ">
                <Carousel
                  components={imgdata}
                  slidesToShow={3}
                  bgColor="black"
                />
              </div>
              <div className="hidden xs500:flex sm:hidden ">
                <Carousel
                  components={imgdata}
                  slidesToShow={2}
                  bgColor="black"
                />
              </div>
              <div className="flex xs500:hidden ">
                <Carousel
                  components={imgdata}
                  slidesToShow={1}
                  bgColor="black"
                />
              </div>
            </div>
          </div>
          {/* packages offer */}
          <div
            id="packages-offer"
            className="flex flex-col  xl:flex-row space-y-[28px] md:py-[36px] xl:space-y-0 justify-center md:bg-[#D9D9D9] font-productsans
             md:px-5 lg:px-12 xl:px-20 2xl:px-32 lg:-mx-[30px] xl:-mx-[100px] xl:gap-x-[71px]  "
          >
            <div className="flex flex-col xl:hidden text-center justify-center items-center space-y-4">
              <span className="flex flex-col text-[16px] lg:text-[24px]">
                AI-Driven Surveillance: Accurate Anomaly Detection, Anytime,
                Anywhere{" "}
              </span>
            </div>

            <div
              className="w-full grid grid-cols-1 xs400:grid-cols-2 xs500:grid-cols-3 lg:grid-cols-5  grid-rows-2 md:grid-rows-2 lg:grid-rows-1
            gap-x-[12px] xl:w-[70%] justify-between gap-y-5 lg:gap-y-10 lg:space-y-0"
            >
              {packagesitems
                .slice(0, visibleCards)
                .map((packagedata, index) => (
                  <motion.div
                    key={index}
                    className="relative cursor-pointer"
                    variants={fadeInUp}
                    whileHover="hover"
                    initial="rest"
                    animate="rest"
                    whileInView={{ opacity: 1 }}
                  >
                    <motion.div variants={floatingEffect}>
                      <Packages
                        isPackagePage={true}
                        imageSrc={packagedata.imageSrc}
                        title={packagedata.title}
                        locations={packagedata.locations}
                      />
                    </motion.div>
                  </motion.div>
                ))}
            </div>
            <div className=" hidden xl:flex flex-col w-[302px] text-center justify-center items-center space-y-4">
              <span className="flex flex-col text-[24px]">
                AI-Driven Surveillance: Accurate Anomaly Detection, Anytime,
                Anywhere{" "}
              </span>
              <Link to="/packages" className="flex justify-center mt-4 ">
                <motion.button className="w-[171px] h-[38px] border border-black text-black font-bold text-[14px] transition-all duration-300 ease-in-out hover:bg-blue-900 hover:text-white hover:border-blue-900 hover:shadow-lg hover:scale-105 cursor-pointer">
                  More
                </motion.button>
              </Link>
            </div>
            <div className="flex flex-col xl:hidden text-center justify-center items-center space-y-4 ">
              <div className="flex justify-center ">
                <Link to="/packages">
                  <motion.button className="flex w-[158px] h-[28px]  border justify-center items-center border-black text-xs hover:opacity-75 cursor-pointer">
                    More
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
          {/*unveil */}
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            className="flex flex-col space-y-7 lg:space-y-0 lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-y-14 lg:gap-x-20 justify-center"
          >
            <div className="flex flex-col space-y-[28px] 2xl:space-y-10 items-center lg:items-start justify-between ">
              <div className="flex flex-col space-y-[28px] lg:space-y-2 items-center text-center md:text-start lg:items-start ">
                <span className="font-productsans text-[16px] lg:text-[24px]">
                  Unveil the adventurous experience with Ella
                </span>
                <span className="font-productsansregular text-sm text-center lg:text-start px-4 md:px-0">
                  One of the world's top surfing spots, Arugam Bay offers
                  perfect waves for both beginners and advanced surfers.{" "}
                </span>
              </div>{" "}
              <Link to="/destination">
                <div
                  className="flex hover:opacity-90 
                font-productsansregular space-x-48 lg:space-x-32 items-center justify-between border-b w-[280px] h-[24px] md:w-[264px] md:h-[40px] border-black "
                >
                  <span className="text-[12px] md:text-sm">Explore</span>
                  <HiArrowUpRight className="h-4 w-4" />
                </div>
              </Link>
            </div>
            {contentData.cards.map((card) => (
              <div className="hidden lg:flex">
                <Card
                  key={card.id}
                  image={card.imageSrc}
                  title={card.title}
                  location={card.location}
                  description={card.description}
                />
              </div>
            ))}

            <div className="relative flex-col hidden sm:flex lg:hidden items-center w-full ">
              <Carousel
                components={carddata}
                slidesToShow={3}
                bgColor="black"
              />
            </div>
            <div className="relative  flex-col hidden xs500:flex sm:hidden items-center w-full ">
              <Carousel
                components={carddata}
                slidesToShow={2}
                bgColor="black"
              />
            </div>
            <div className="relative flex flex-col xs500:hidden items-center w-full ">
              <Carousel
                components={carddata}
                slidesToShow={1}
                bgColor="black"
              />
            </div>
          </div>

          {/* devil pictures */}
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            className="flex flex-col justify-center space-y-[28px] "
          >
            <div className="justify-center text-center flex font-productsans text-[16px] lg:text-[24px]">
              Immerse Sri Lanka's rich tapestry of traditions, festivals, &
              heritage
            </div>
            <div className="flex flex-col lg:flex-row space-y-[16px] lg:space-y-0 lg:space-x-[46px] w-full items-center lg:items-stretch">
              <div className="flex flex-col w-full gap-y-4 lg:w-[584px] md:h-[340px]   justify-between ">
                <img src={devil} className="hidden md:flex h-[258px]" />
                <img src={devilmob} className="flex md:hidden" />
                <div className="flex w-full justify-between items-end">
                  <span className="flex w-[70%] lg:w-[86%] font-productsansregular text-[12px] lg:text-[14px]">
                    Sri Lanka's cultural festivals are vibrant celebrations of
                    the island's rich heritage and diversity.Each festival
                    offers a glimpse into Sri Lanka's deep-rooted traditions and
                    its harmonious blend of cultures.
                  </span>
                  <Link to="/culture">
                    {/* <img src={arrow} className="w-9 h-9 " /> */}
                    <div className="bg-[#1A3A6D] rounded-full p-[10px] hover:bg-black">
                      <GoArrowUpRight className="text-white" />
                    </div>
                  </Link>
                </div>
              </div>

              <div className="flex md:w-[1090px] ">
                <Marquee autoFill>
                  <div className="grid grid-cols-4 grid-rows-1 gap-x-[24px] lg:gap-x-[43px] justify-center h-64 md:h-[340px] w-full px-[12px]">
                    <img
                      src={dancer}
                      className="h-full object-cover rounded-[10px] "
                      alt="Elephant"
                    />
                    <img
                      src={dancer}
                      className="h-full object-cover rounded-[10px]"
                      alt="Elephant"
                    />
                    <img
                      src={elephant}
                      className="h-full object-cover rounded-[10px]"
                      alt="Dancer"
                    />
                    <img
                      src={elephant}
                      className="h-full object-cover rounded-[10px]"
                      alt="Elephant"
                    />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>

          {/* card swiper */}
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            className="relative lg:-mx-[30px] xl:-mx-[100px] "
          >
            <CategorySwiper
              text={phases[activePhase].text}
              image={phases[activePhase].image}
              imageMobile={phases[activePhase].imageMobile}
            />
            <div className="absolute bottom-[20px] md:bottom-[75px] flex space-x-[4.05px] sm:space-x-[8px] justify-center items-center w-full">
              {phases.map((_, index) => (
                <div
                  key={index}
                  className={`bg-white border-2 rounded-xl ${
                    activePhase === index
                      ? "w-[15px] h-[7px] md:w-[21px] md:h-[10px]"
                      : "w-[7px] h-[7px] md:w-[10px] md:h-[10px]"
                  } cursor-pointer`}
                  onClick={() => setActivePhase(index)}
                ></div>
              ))}
            </div>
          </div>
          {/* iconic Enchanting Destination */}
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            className="flex flex-col lg:flex-row w-full lg:gap-x-[46px] items-center lg:items-stretch"
          >
            <div className=" flex lg:hidden flex-col w-full space-y-[28px] ">
              <span className="flex lg:hidden font-productsans text-[16px] text-center">
                Discover Sri Lanka's Most Iconic and Enchanting Destinations
              </span>
              <div className="flex lg:w-[55%]">
                <img src={dis1} />
              </div>
            </div>
            <div className="hidden lg:flex lg:w-[50%]">
              <img src={dis1} />
            </div>
            <div className="flex flex-col justify-between w-full space-y-5 ">
              <span className="hidden lg:flex font-productsans lg:text-[24px]">
                Discover Sri Lanka's Most Iconic and Enchanting Destinations
              </span>
              <div className="flex flex-col lg:flex-row justify-center w-full space-y-[16px] lg:space-y-0 lg:space-x-10 ">
                <div className="grid grid-cols-4 grid-rows-1 lg:grid-cols-2 lg:grid-rows-2 gap-x-[6px] lg:gap-y-[16px] xl:gap-x-[46px] xl:gap-y-[46px] lg:w-[45%]">
                  <img
                    src={des1}
                    className="h-full md:w-[207px] object-cover rounded-[10px]"
                  />
                  <img
                    src={des2}
                    className="h-full md:w-[207px] object-cover rounded-[10px]"
                  />
                  <img
                    src={des3}
                    className="h-full md:w-[207px] object-cover rounded-[10px]"
                  />
                  <img
                    src={des4}
                    className="h-full md:w-[207px] object-cover rounded-[10px]"
                  />
                </div>
                <div className="flex flex-col lg:w-[55%] space-y-4 justify-between items-start">
                  <p className="font-productsansregular leading-6 2xl:leading-6 text-xs lg:text-[14px] justify-center text-justify w-full">
                    Sri Lanka, an island of unparalleled beauty, is home to some
                    of the world's most captivating destinations. Explore
                    Sigiriya, the ancient rock fortress known as the "Eighth
                    Wonder of the World," with its breathtaking views and
                    historic frescoes. Discover the serene beaches of Mirissa
                    and Arugam Bay, perfect for surfing and whale watching.
                    Wander through the lush tea plantations and cool climate of
                    Nuwara Eliya, fondly called "Little England." In Ella, hike
                    to Little Adam's Peak or visit the iconic Nine Arches
                    Bridge. Dive into the rich culture and history of Kandy,
                    home to the sacred Temple of the Tooth Relic, or explore the
                    vibrant streets of Colombo with its modern charm and
                    colonial heritage. For wildlife enthusiasts, Yala National
                    Park offers thrilling safaris to spot leopards, elephants,
                    and exotic birds. From its golden beaches to misty
                    mountains, Sri Lanka promises an unforgettable adventure at
                    every turn.
                  </p>
                  <Link to="/destination">
                    {/* <img src={arrow} className="w-7 2xl:w-10" /> */}
                    <div className="bg-[#1A3A6D] rounded-full p-[10px] hover:bg-black">
                      <GoArrowUpRight className="text-white" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* review */}
          <div
            id="review"
            className="bg-black  p-6  md:p-7 rounded-xl space-y-10  items-center justify-center   "
          >
            <div className="flex flex-col justify-center space-y-10">
              <div className="space-y-4 items-center md:items-start flex flex-col">
                <span className="text-white font-productsans text-[16px] lg:text-[24px]">
                  Real Stories from Happy Explorers
                </span>
                <span className="text-white w-[70%] md:w-[25%] lg:w-[14%] flex border "></span>
              </div>
              <div className="relative hidden xl-1500:flex">
                <Carousel components={data} slidesToShow={4} bgColor="white" />
              </div>
              <div className="relative hidden md:flex xl-1500:hidden">
                <Carousel
                  components={data}
                  slidesToShow={2.5}
                  bgColor="white"
                />
              </div>
              <div className="relative hidden sm:flex flex-col md:hidden items-center w-full ">
                <Carousel components={data} slidesToShow={2} bgColor="white" />
              </div>
              <div className="relative flex flex-col sm:hidden items-center w-full ">
                <Carousel components={data} slidesToShow={1} bgColor="white" />
              </div>
            </div>
          </div>
          {/* sigiri */}
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            className="flex flex-col lg:-mx-[30px]  xl:-mx-[100px] gap-y-[16px] lg:gap-y-0 lg:flex-row"
          >
            <img src={sigiri} className="hidden lg:flex w-[70%]" />
            <img src={sigirimob} className=" flex lg:hidden rounded-2xl" />
            <div className=" justify-center space-y-[20px] lg:w-[30%] 2xl:w-full items-center lg:items-start lg:px-[100px] lg:py-[115px] flex flex-col lg:space-y-4">
              <span className="font-productsans text-center lg:text-start text-[16px] lg:text-[24px] leading-[20px] lg:leading-[32px]">
                Your adventure is just a click away! Secure your spot and start
                exploring the wonders.
              </span>
              <Link to="/destination">
                <button className="flex items-center btn-4 hover:text-black space-x-3 w-[158px] md:w-[171px] h-[28px] md:h-[40px] justify-center  font-productsans  text-white">
                  <span className="lg:text-[14px] text-[12px] cursor-pointer">
                    {" "}
                    Explore
                  </span>
                  <HiOutlineArrowNarrowRight className="w-6 h-6" />
                </button>
              </Link>
              {/* <div className="flex lg:hidden"> <Link to="/category">
                <Book_Button
                  textColor="text-white"
                  width="w-[158px] h-[28px]"
                /></Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
