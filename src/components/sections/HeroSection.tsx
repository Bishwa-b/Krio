import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Animation variants
import {
  burstIn,
  slideInBottom,
  slideInLeft,
  viewportOptions,
} from "@/utils/animations";

const HeroSection = () => {
  return (
    <div className="relative bg-[#ce4e28] text-white min-h-[100vh] overflow-hidden w-full">
      {/* Reusable Header Component */}

      {/* Hero Content */}
      <section className="relative container mx-auto px-4 pt-36 md:mt-8 ">
        {/* Text Block */}

        {/* Product Cans */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-12">
          <div
            // variants={burstIn}
            // initial="initial"
            // whileInView="animate"
            // viewport={viewportOptions}
            // transition={{ delay: 0.4 }}
            className="relative w-full order-2 md:order-1"
          >
            {/* Blueberries */}
            {/* <motion.img
              initial={{ opacity: 0, x: 50, y: -50 }}
              animate={{ opacity: 1, x: 0, y: 0, rotate: 30 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              src="/lovable-uploads/ice-top-right.png"
              alt="Blueberries"
              className="absolute -top-20 md:-top-40 -right-10 md:-right-20 z-10 w-24 md:w-auto"
            /> */}

            {/* Lemon */}
            {/* <motion.img
              initial={{ opacity: 0, x: -50, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0, rotate: 20 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              src="/lovable-uploads/mice1.png"
              alt="Lemon"
              className="absolute -top-48 left-24 w-24 md:w-36 z-20 "
            /> */}
            {/* <motion.img
              initial={{ opacity: 0, x: -50, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0, rotate: 15 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              src="/lovable-uploads/ice-down-left.png"
              alt="Lemon"
              className="absolute top-20  left-24 z-20"
            />
            <motion.img
              initial={{ opacity: 0, x: -50, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              src="/lovable-uploads/ice-bottom-right.png"
              alt="Lemon"
              className="absolute  top-10 left-48 z-20"
            />
            <motion.img
              initial={{ opacity: 0, x: -50, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0, rotate: -15 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              src="/lovable-uploads/ice3.png"
              alt="Lemon"
              className="absolute bottom-64  right-72 w-24 md:w-20 z-20"
            /> */}
            {/* <motion.img
              initial={{ opacity: 0, x: -50, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0, rotate: -45 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              src="/lovable-uploads/mice3.png"
              alt="Lemon"
              className="absolute -top-4 left-48 w-24 md:w-28 z-20"
            /> */}
            {/* <motion.img
              initial={{ opacity: 0, x: -50, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              src="/lovable-uploads/beans-5-top-left.png"
              alt="Lemon"
              className="absolute -left-2 -top-24 z-20"
            />
            <motion.img
              initial={{ opacity: 0, x: 50, y: -50 }}
              animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              src="/lovable-uploads/beans-4-medial-top.png"
              alt="Lemon"
              className="absolute -top-8 -right-48 z-20"
            />
            <motion.img
              initial={{ opacity: 0, x: 50, y: -50 }}
              animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              src="/lovable-uploads/beans-1-down.png"
              alt="Lemon"
              className="absolute  top-8 -right-16 z-20"
            />
            <motion.img
              initial={{ opacity: 0, x: 50, y: -50 }}
              animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              src="/lovable-uploads/bean-2-top.png"
              alt="Lemon"
              className="absolute -top-24 left-24 z-20"
            />
            <motion.img
              initial={{ opacity: 0, x: 50, y: -50 }}
              animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              src="/lovable-uploads/beans-3-middle.png"
              alt="Lemon"
              className="absolute -right-36 -top-12 z-20"
            /> */}

            <img
              // variants={burstIn}
              // initial="initial"
              // whileInView="animate"
              // viewport={viewportOptions}
              // transition={{ delay: 1.2 }}
              src="/lovable-uploads/krio-icon.png"
              alt="icon"
              className="hidden md:block absolute top-36 -left-24 z-20 w-[75%]"
            />

            {/* Product cans */}
            <div className="relative flex justify-center items-center z-20">
              {/* <motion.img
                  initial={{ opacity: 0, x: -100, y: 50 }}
                  animate={{
                    opacity: 1,
                    x: 140,
                    y: -20,
                    rotate: -12,
                  }}
                  transition={{ duration: 0.8, delay: 1.3 }}
                  src="/lovable-uploads/Krio-punch.png"
                  alt="Krio Energy Drink"
                  className="w-64 md:w-[35%]"
                  style={{
                    filter: "drop-shadow(0 25px 25px rgba(0,0,0,0.3))",
                  }}
                /> */}
              <img
                src="/lovable-uploads/new-krio.png"
                alt="Krio Energy Drink"
                className="hidden md:block md:w-[100%] absolute -top-56 left-44 rotate-3"
                style={{
                  filter: "drop-shadow(0 25px 25px rgba(0,0,0,0.3))",
                }}
              />
              <img
                // transition={{ duration: 0.8, delay: 1.5 }}
                src="/lovable-uploads/NEW-CAN-KRIO.png"
                alt="Krio Energy Drink"
                className="block md:hidden w-full "
                style={{
                  filter: "drop-shadow(0 25px 25px rgba(0,0,0,0.3))",
                }}
              />
            </div>
          </div>
          <div
            // variants={burstIn}
            // initial="initial"
            // whileInView="animate"
            // viewport={viewportOptions}
            // transition={{ delay: 0.2 }}
            className="text-left max-w-xl order-1 md:order-2 z-30"
          >
            <h1 className="text-6xl font-display leading-tighter tracking-tighter  text-white mb-4">
              India’s First <br />
              <span className="text-[#f9c24d]">Cacao-Based</span> <br />
              Energy Drink
            </h1>
            <h2 className="text-3xl font-display leading-tight tracking-tighter mb-10 text-white/90">
              <img
                src="/lovable-uploads/cross.png"
                alt="cross"
                className="w-[8%] inline"
              />{" "}
              Focus & Hydration
            </h2>
            <p className="text-xl font-normal text-white/80 tracking-tight max-w-sm mb-6">
              Fuel your body, calm your mind, and lift your spirit to be
              limitless and achieve greatness!
            </p>
            {/* <Link
              to="https://amzn.in/d/5CWQ2pX"
              className=" flex justify-center items-center gap-3 bg-[#f9c24d] text-black text-2xl font-bold rounded shadow-md hover:bg-[#e0b740] transition-colors md:mr-12"
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
              className="flex justify-center items-center gap-3 bg-[#f9c24d] text-black text-2xl font-bold rounded shadow-md hover:bg-[#e0b740] transition-colors md:mr-12"
            >
              BUY NOW
              <img
                src="/lovable-uploads/amazon.png"
                alt="amazon logo"
                className="w-20 relative top-1 h-auto"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      {/* <motion.div
        className="mb-4 flex flex-col md:hidden justify-center items-center border-y-4"
        variants={{ animate: { transition: { staggerChildren: 0.3 } } }}
        initial="initial"
        whileInView="animate"
        // viewport={viewportOptions}
      >
        {[
          { icon: "/lovable-uploads/sugar-free.png", text: "ZERO SUGAR" },
          { icon: "/lovable-uploads/no-cocoa.png", text: "NO CAFFEINE" },
          { icon: "/lovable-uploads/no-calories.png", text: "ZERO CALORIES" },
          {
            icon: "/lovable-uploads/no-preservatives.png",
            text: "NO PRESERVATIVES",
          },
          {
            icon: "/lovable-uploads/no-artificial-colours.png",
            text: "NO ARTIFICIAL COLOURS",
          },
        ].map((feature, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col md:flex-row items-center justify-center"
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
            }}
          >
            <img
              src={feature.icon}
              alt={feature.text}
              className="h-auto w-[55%] -mr-6"
            />
            <p className="font-medium text-3xl">{feature.text}</p>
          </motion.div>
        ))}
      </motion.div> */}
    </div>
  );
};

export default HeroSection;
