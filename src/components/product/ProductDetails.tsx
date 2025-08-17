import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import OIP from "/images/product/OIP.webp";
import { GoArrowRight } from "react-icons/go";
import { FaRegHandPointDown } from "react-icons/fa";

const ProductDetails = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  // Scroll progress animations
  const scaleProgress = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const, // Explicitly type as 'spring'
        damping: 10,
        stiffness: 100
      }
    }
  };

  const featureCards = [
    {
      title: "Advanced Anomaly Detection",
      description:
        "Identifies both known threats (fire, accidents) and unknown anomalies with our proprietary AI algorithms.",
      icon: "🔍",
      color: "bg-purple-100"
    },
    {
      title: "Automatic Emergency Response",
      description:
        "Instantly notifies appropriate authorities - fire department (1990), police, or medical services based on the detected threat.",
      icon: "🚨",
      color: "bg-red-100"
    },
    {
      title: "Personalized Recognition",
      description:
        "Learns to identify your family members, pets, vehicles, and regular visitors for customized security.",
      icon: "👨‍👩‍👧‍👦",
      color: "bg-blue-100"
    },
    {
      title: "Adaptive Learning",
      description:
        "Undergoes a 1-month training period at your location to understand unique patterns and improve accuracy.",
      icon: "🧠",
      color: "bg-green-100"
    }
  ];

  return (
    <div
      ref={ref}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div className="absolute inset-0 -z-10" style={{ y: yBg }}>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 opacity-50" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-200 blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-200 blur-3xl opacity-30" />
      </motion.div>

      <div className="max-w-[1920px] mx-auto relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 border bg-blue-100 p-7 rounded-3xl lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Enhanced Image Animation */}
          <motion.div variants={itemVariants} className="relative">
            <motion.img
              src={OIP}
              alt="Smart CCTV System"
              className="w-full h-auto rounded-2xl shadow-xl border-8 border-white"
              initial={{ scale: 0.9, rotate: -2 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.2, 0.8, 0.4, 1],
                rotate: { delay: 0.2 }
              }}
              viewport={{ once: true }}
              style={{ scale: scaleProgress }}
            />
            <motion.div
              className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-200"
              initial={{
                x: 50,
                y: 50,
                opacity: 0,
                rotate: 10,
                scale: 0.8
              }}
              whileInView={{
                x: 0,
                y: 0,
                opacity: 1,
                rotate: 0,
                scale: 1
              }}
              transition={{
                delay: 0.5,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 10,
                mass: 0.5
              }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.2 }
              }}
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.1 }
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
              >
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-gray-600">Real-time Monitoring</div>
              </motion.div>
            </motion.div>

            {/* Floating indicators */}
            <motion.div
              className="absolute -top-0 left-10 bg-white p-3 rounded-full shadow-md"
              animate={{
                y: [0, -10, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-12 h-12 hover:scale-110 duration-300 rounded-full bg-green-500 flex items-center justify-center text-white">
                ✓
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Enhanced Features */}
          <div>
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8"
              style={{ y: yText }}
            >
              <span className="inline-block">
                Intelligent Security{" "}
                <span className="text-blue-600">Reimagined</span>
              </span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featureCards.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  className={`${feature.color} p-6 rounded-xl shadow-md border border-gray-100 transition-all`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={itemVariants}
              className="mt-10"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="group px-8 py-3 bg-blue-800 flex flex-row items-center justify-center gap-2 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Buy Now</span>
                <GoArrowRight className="text-20 group-hover:translate-x-2 duration-300" />

                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-0 hover:opacity-100 transition-opacity"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.4 }}
                />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Animated Section with Scroll Progress */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 rounded-2xl p-8 text-white relative overflow-hidden"
          style={{ opacity: opacityProgress }}
        >
          <div className="absolute inset-0 bg-[url('/images/product/info1.jpg')] opacity-10" />
          <div className="max-w-4xl mx-auto relative">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              <motion.span
                className="inline-block"
                initial={{ x: -50 }}
                whileInView={{ x: 0 }}
                transition={{ type: "spring" }}
              >
                How Our AI Learns Your Environment
              </motion.span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "1-week initial pattern recognition",
                "2-week anomaly baseline establishment",
                "4-week full adaptive learning cycle"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                      {index + 1}
                    </div>
                    <div className="text-lg font-medium">{item}</div>
                  </div>
                  <div className="h-1 bg-white/45 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-white rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: ["0%", "30%", "70%", "100%"] }}
                      transition={{
                        duration: 1.5,
                        delay: 0.2 * index,
                        times: [0, 0.3, 0.7, 1]
                      }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Additional scroll-triggered element */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-2xl md:text-3xl font-bold mb-6 text-gray-800"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring" }}
          >
            Ready to Experience Next-Gen Security?
          </motion.h3>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto mb-8"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
          >
            Our system adapts to your environment, providing unparalleled
            protection that evolves with your needs.
          </motion.p>
          <div className="flex items-center justify-center w-full mt-12">
            <div className="relative group">
              {/* Main icon with gradient and animation */}
              <FaRegHandPointDown
                className="
      w-[100px] h-[100px] text-blue-900
      bg-clip-text 
      bg-gradient-to-br from-blue-600 to-blue-800 
      drop-shadow-lg
      animate-bounce
      transition-transform duration-900
      group-hover:scale-110
    "
              />

              {/* Pulsing circle effect */}
              <div
                className="
      absolute inset-0 
      rounded-full border-4 border-blue-400/30 -m-4
      animate-ping
      opacity-75
    "
              />

              {/* Glowing dot */}
              <div
                className="
      absolute top-0 right-0 
      w-4 h-4 bg-yellow-400 rounded-full shadow-lg
      animate-pulse
    "
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetails;
