import React from "react";
import FAQAccordion from "@/components/FAQAccordion";
import { faqs } from "@/data/faqs";
import { motion } from "framer-motion";
import { slideInBottom, viewportOptions } from "@/utils/animations";

const FAQSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <motion.div
        // variants={slideInBottom}
        // initial="initial"
        // whileInView="animate"
        // viewport={viewportOptions}
        // transition={{ delay: 0.4 }}
        className="container mx-auto max-w-5xl"
      >
        <motion.h2
          variants={slideInBottom}
          initial="initial"
          whileInView="animate"
          // viewport={viewportOptions}
          transition={{ delay: 0.4 }}
          className="text-3xl md:text-5xl text-zinc text-center mb-12 font-display uppercase text-center"
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div
          variants={slideInBottom}
          initial="initial"
          whileInView="animate"
          // viewport={viewportOptions}
          transition={{ delay: 0.6 }}
          className="scroll-animation"
        >
          <FAQAccordion faqs={faqs} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FAQSection;
