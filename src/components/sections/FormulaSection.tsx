import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { burstIn, slideInBottom } from "../../utils/animations";

const FormulaSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center  ">
          {/* Text Content */}
          <motion.div
            variants={slideInBottom}
            initial="initial"
            whileInView="animate"
            //viewport={viewportOptions}
            className="flex flex-col"
          >
            <motion.h2
              variants={slideInBottom}
              initial="initial"
              whileInView="animate"
              //viewport={viewportOptions}
              transition={{ delay: 0.3 }}
              className="font-display tracking-tighter leading-tight text-5xl md:text-7xl text-[#ce4e28] mb-12 "
            >
              A New Breed <br />
              of <span className="text-[#f9c24d]">Energy!</span>
            </motion.h2>

            <motion.p
              variants={slideInBottom}
              initial="initial"
              whileInView="animate"
              //viewport={viewportOptions}
              transition={{ delay: 0.6 }}
              className="md:text-3xl font-normal tracking-tighter leading-tight text-left text-black/80  mb-12"
            >
              Krio is a better-for-you energy drink crafted with natural,
              scientifically proven ingredients that work with your natural
              rhythm.
            </motion.p>

            <motion.div
              variants={slideInBottom}
              initial="initial"
              whileInView="animate"
              //viewport={viewportOptions}
              transition={{ delay: 0.9 }}
              className="md:inline-block"
            >
              <Link
                to="/formula"
                className="w-auto self-start inline-block bg-[#ce4e28] text-sm sm:text-base md:text-lg lg:text-xl text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded font-medium hover:bg-[#ce4e28]-800 hover:text-white/90 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                KNOW THE KRIO FORMULA
              </Link>
            </motion.div>
          </motion.div>

          {/* Can Images */}
          <motion.div
            variants={burstIn}
            initial="initial"
            whileInView="animate"
            //viewport={viewportOptions}
            className="relative h-[400px] md:h-[600px]"
          >
                <img
                  src="/lovable-uploads/Krio-punch.png"
                  alt="Krio Original Punch"
                  className="h-full object-cover"
                />

          </motion.div>

          <motion.div
            // variants={slideInBottom}
            // initial="initial"
            // whileInView="animate"
            //viewport={viewportOptions}
            // transition={{ delay: 0.2 }}
            className="text-left"
          >
            <motion.h2
              variants={slideInBottom}
              initial="initial"
              whileInView="animate"
              //viewport={viewportOptions}
              transition={{ delay: 0.5 }}
              className=" text-lg md:text-3xl text-[#ce4e28] mb-8 font-normal leading-tight tracking-tight border-[#ce4e28] border-b-2"
            >
              <span className="text-[#f9c24d] font-bold ">Cacao</span> Extract
              for lasting upbeat energy without jitters
            </motion.h2>
            <motion.h2
              variants={slideInBottom}
              initial="initial"
              whileInView="animate"
              //viewport={viewportOptions}
              transition={{ delay: 0.8 }}
              className=" text-lg md:text-3xl text-[#ce4e28] mb-8 font-normal leading-tight tracking-tight border-[#ce4e28] border-b-2"
            >
              <span className="text-[#f9c24d] font-bold ">L-theanine</span>{" "}
              supports focus and mental clarity
            </motion.h2>
            <motion.h2
              variants={slideInBottom}
              initial="initial"
              whileInView="animate"
              //viewport={viewportOptions}
              transition={{ delay: 1.1 }}
              className=" text-lg md:text-3xl text-[#ce4e28] mb-8 font-normal leading-tight tracking-tight border-[#ce4e28] border-b-2"
            >
              Energy releasing{" "}
              <span className="text-[#f9c24d] font-bold ">B-Vitamins</span>
            </motion.h2>
            <motion.h2
              variants={slideInBottom}
              initial="initial"
              whileInView="animate"
              //viewport={viewportOptions}
              transition={{ delay: 1.4 }}
              className=" text-lg md:text-3xl text-[#ce4e28] mb-8 font-normal leading-tight tracking-tight border-[#ce4e28] border-b-2"
            >
              <span className="text-[#f9c24d] font-bold ">Vitamin C </span>
              supports immune functions
            </motion.h2>
            <motion.h2
              variants={slideInBottom}
              initial="initial"
              whileInView="animate"
              //viewport={viewportOptions}
              transition={{ delay: 1.7 }}
              className=" text-lg md:text-3xl text-[#ce4e28] font-normal leading-tight tracking-tight border-[#ce4e28] border-b-2"
            >
              Replenishing and Hydrating{" "}
              <span className="text-[#f9c24d] font-bold ">Electrolytes</span>
            </motion.h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FormulaSection;
