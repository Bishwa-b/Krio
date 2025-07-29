import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  burstIn,
  slideInBottom,
  slideInLeft,
  slideInRight,
} from "@/utils/animations";
import { Link } from "react-router-dom";

const floatingAnimation = {
  animate: {
    y: [0, -10, 0], // move up by 10px and back
    rotate: [0, 5, 0], // slight rotation
  },
  transition: {
    duration: 3,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  },
};

// container stagger
// const featuresContainerVariants = {
//   initial: {},
//   animate: {
//     transition: { staggerChildren: 0.4 },
//   },
// };

// Define slides for carousel
const slides = [
  {
    can: "/lovable-uploads/Krio-punch.png",
    label: "Original Punch",
  },
  {
    can: "/lovable-uploads/Krio-blue.png",
    label: "Blueberry Lemonade",
  },
  // add more slides as needed
];

const WhyKrioSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // cycle slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentIndex];

  return (
    <section className="relative bg-[#ce4e28] overflow-hidden py-20 md:py-16">
      <div className="container mx-auto px-4">
        {/* ─── Heading ─── */}
        <motion.h1
          variants={slideInBottom}
          initial="initial"
          whileInView="animate"
          //viewport={viewportOptions}
          transition={{ delay: 0.4 }}
          className="text-6xl font-display tracking-tighter text-white mb-24 text-center"
        >
          Discover the <span className="text-[#f9c24d]">Energy</span> drink you
          are longing for!
        </motion.h1>

        {/* ─── Grid: Text ↔️ Can ─── */}
        <motion.div
          // variants={slideInBottom}
          // initial="initial"
          // whileInView="animate"
          // transition={{ delay: 0.5 }}
          // viewport={viewportOptions}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Left side unchanged */}
          <motion.div
            variants={slideInBottom}
            initial="initial"
            whileInView="animate"
            //viewport={viewportOptions}
            transition={{ delay: 0.7 }}
            className="text-left"
          >
            <motion.h1
              variants={slideInBottom}
              initial="initial"
              whileInView="animate"
              transition={{ delay: 0.8 }}
              className="text-[#f9c24d] mb-4  text-4xl md:text-6xl font-display leading-tight tracking-tighter "
            >
              Work with your <span className="text-white">BODY</span>
            </motion.h1>
            <motion.h2
              variants={slideInBottom}
              initial="initial"
              whileInView="animate"
              transition={{ delay: 1.1 }}
              className=" text-3xl md:text-5xl text-[#f9c24d] mb-4 md:mb-8 font-display leading-tight tracking-tighter"
            >
              Start fueling it{" "}
              <span className="text-white uppercase">right</span>
            </motion.h2>
            <motion.p
              variants={slideInBottom}
              initial="initial"
              whileInView="animate"
              transition={{ delay: 1.4 }}
              className=" md:text-3xl font-normal tracking-tighter leading-tight text-left text-white/90  mb-8"
            >
              Experience feel-good, lasting energy without jitters or crashes,
              boost focus and ensure hydration, catering to your energy needs
              throughout the day without compromising on taste.
            </motion.p>
            <motion.div
              variants={slideInBottom}
              initial="initial"
              whileInView="animate"
              //viewport={viewportOptions}
              transition={{ delay: 1.7 }}
              className="md:inline-block"
            >
              {/* <Link
                to="/products"
                className="flex justify-center items-center px-10 gap-3 bg-[#f9c24d] text-2xl text-black font-bold rounded shadow-md hover:bg-[#e0b740] transition-colors"
              >
                BUY NOW
                <img
                  src="/lovable-uploads/amazon.png"
                  alt="amazon logo"
                  className="w-20 relative top-1 h-auto"
                />
              </Link> */}
              <a
                href="https://amzn.in/d/5CWQ2pX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center px-10 gap-3 bg-[#f9c24d] text-2xl text-black font-bold rounded shadow-md hover:bg-[#e0b740] transition-colors"
              >
                BUY NOW
                <img
                  src="/lovable-uploads/amazon.png"
                  alt="amazon logo"
                  className="w-20 relative top-1 h-auto"
                />
              </a>
            </motion.div>
          </motion.div>

          {/* Right: carousel can + floats */}
          <motion.div
            // variants={slideInRight}
            className="hidden md:block relative flex justify-center"
          >
            <AnimatePresence initial={false} mode="wait">
              {/* Main can image */}
              <motion.img
                key={slide.can}
                src={slide.can}
                alt="Krio Energy Drink"
                initial={{ opacity: 0, scale: 0.1, rotate: -55 }}
                animate={{ opacity: 1, scale: 1, rotate: -55 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8 }}
                className="w-56 md:w-[100%] drop-shadow-2xl absolute -top-52 -right-48 z-20"
              />
            </AnimatePresence>
            {/* Decorations */}
            <motion.img
              src="/lovable-uploads/blueberry.png"
              alt=""
              variants={burstIn}
              transition={{ delay: 0.6 }}
              // {{...floatingAnimation}
              className="absolute -top-40 left-36 w-12 md:w-16 rotate-[15deg] "
            />
            <motion.img
              src="/lovable-uploads/lemon.png"
              alt=""
              variants={burstIn}
              transition={{ delay: 0.7 }}
              className="absolute top-20 left-28 w-12 md:w-40"
            />
            <motion.img
              src="/lovable-uploads/blueberry.png"
              alt=""
              variants={burstIn}
              transition={{ delay: 0.8 }}
              className="absolute -top-20 left-2 w-12 md:w-16 rotate-[25deg]"
            />

            {/* Coffee Beans */}
            <motion.img
              src="/lovable-uploads/beans-1.png"
              alt=""
              variants={burstIn}
              transition={{ delay: 0.9 }}
              className="absolute bottom-48 -right-1 w-16 md:w-24 rotate-[10deg]"
            />
            <motion.img
              src="/lovable-uploads/beans-1.png"
              alt=""
              variants={burstIn}
              transition={{ delay: 1.0 }}
              className="absolute -bottom-72 right-72 w-16 md:w-24"
            />
            <motion.img
              src="/lovable-uploads/mice2.png"
              alt=""
              variants={burstIn}
              transition={{ delay: 1.1 }}
              className="absolute bottom-2 right-1 w-16 md:w-24 rotate-[5deg]"
            />

            {/* Lemon Wedges */}
            <motion.img
              src="/lovable-uploads/mice3.png"
              alt=""
              variants={burstIn}
              transition={{ delay: 1.2 }}
              className="absolute left-2 w-20 md:w-40"
            />
            <motion.img
              src="/lovable-uploads/beans-4-medial-top.png"
              alt=""
              variants={burstIn}
              transition={{ delay: 1.3 }}
              className="absolute -bottom-14 right-72"
            />
            <motion.img
              src="/lovable-uploads/lemon.png"
              alt=""
              variants={burstIn}
              transition={{ delay: 1.4 }}
              className="absolute bottom-28 left-1/2 w-20 md:w-24 rotate-[-10deg]"
            />

            {/* Flavor label */}
            <div className="absolute -bottom-80 right-96 text-xl md:text-4xl text-white mb-8 font-medium">
              {slide.label}
            </div>

            <img
              src="/lovable-uploads/corner-line.png"
              alt="lines"
              className="w-[100%] absolute -bottom-80 -right-20 z-10"
            />
          </motion.div>
          <motion.div
            variants={slideInRight}
            initial="initial"
            whileInView="animate"
            // //viewport={viewportOptions}
            transition={{ delay: 0.3 }}
            className="block md:hidden"
          >
            <img src="/lovable-uploads/Krio-two.png" alt="krio can" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyKrioSection;
