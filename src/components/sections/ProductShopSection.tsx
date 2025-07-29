import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { burstIn } from "@/utils/animations";

const ProductShopSection = () => {
  return (
    <section className="bg-white py-20 px-2 md:pb-30 relative">
      <a
        href="https://amzn.in/d/5CWQ2pX"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.div
          variants={burstIn}
          initial="initial"
          whileInView={"animate"}
          transition={{ delay: 0.2 }}
          className="container mx-auto bg-blue-900 rounded-2xl"
        >
          <div className="flex items-center md:justify-around justify-between py-6 px-4 md:px-12 relative overflow-hidden">
            {/* Left: Krio cans */}
            <div className="hidden md:block flex items-center">
              <img
                src="/lovable-uploads/Krio-blue.png"
                alt="Krio Blue Can"
                className="w-16 md:w-40 absolute top-4 left-1 -rotate-12"
              />
              <img
                src="/lovable-uploads/Krio-punch.png"
                alt="Krio Red Can"
                className="w-16 md:w-40 absolute top-4 left-16 rotate-12"
              />
            </div>

            {/* Center: Text */}
            <div className="md:text-center text-white md:ml-32">
              <h2 className="text-white text-2xl md:text-4xl font-medium">
                Ready to shop?
              </h2>
              <p className="text-xl md:text-4xl text-[#f9c24d] font-normal">
                grab a{" "}
                <span className="text-white text-2xl md:text-4xl font-medium">
                  Krio.
                </span>
              </p>
            </div>

            {/* Right: Retailer logos */}
            <div className="flex items-center space-x-4">
              <img
                src="/lovable-uploads/blinkit.png"
                alt="blinkit"
                className="h-6 md:h-12"
              />
              <img
                src="/lovable-uploads/swiggy.png"
                alt="Swiggy Instamart"
                className="h-6 md:h-12"
              />
              <img
                src="/lovable-uploads/natures-basket.png"
                alt="Nature's Basket"
                className="h-6 md:h-14"
              />
              <img
                src="/lovable-uploads/amazon2.png"
                alt="Amazon"
                className="h-6 md:h-12"
              />
            </div>
          </div>
        </motion.div>
      </a>
    </section>
  );
};

export default ProductShopSection;
