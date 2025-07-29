import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { link } from "fs";

interface ProductHeroProps {
  activeProduct: number;
  setActiveProduct: (index: number) => void;
}

const ProductHero = ({
  activeProduct,
  setActiveProduct,
}: ProductHeroProps): JSX.Element => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, {
    once: false,
    margin: "-20% 0px -20% 0px",
  });

  const products = [
    {
      id: 1,
      name: "Krio Original Punch",
      tagline: "Smooth cocoa flavor with subtle caramel notes and a hint of zing.",
      color: "bg-[#ce4e28]",
      textColor: "text-white",
      image: "/lovable-uploads/punch-two.png",
      link: "https://amzn.in/d/5CWQ2pX",
    },
    {
      id: 2,
      name: "Krio Blueberry Lemonade",
      tagline: "A zingy lemonade with a hint of blueberry.",
      color: "bg-krio-main",
      textColor: "text-white",
      image: "/lovable-uploads/blue-two.png",
      link: "https://amzn.in/d/0PMI1Ae",
    },
  ];

  const activeProductData = products[activeProduct];

  // Auto-carousel logic
  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      const nextIndex = (activeProduct + 1) % products.length;
      setActiveProduct(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [isInView, activeProduct, products.length, setActiveProduct]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      className={`relative min-h-[100vh] ${activeProductData.color} flex items-center`}
      ref={heroRef}
    >
      <div className="container mx-auto px-4 md:px-8 py-8 md:py-16 relative z-0">
        <motion.div
          className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:gap-0 items-center pt-20 md:pt-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-6 md:space-y-8 text-left mt-6 md:mt-0">
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-display uppercase leading-tight tracking-tighter text-white"
            >
              {activeProductData.name}
            </motion.h1>

            <motion.div variants={itemVariants}>
              <h2 className="text-2xl md:text-3xl max-w-5xl font-display uppercase leading-tight tracking-tighter text-white/90">
                {activeProductData.tagline}
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl uppercase tracking-wider text-white/80 font-light"
            >
              Crash-free | Zero sugar | Zero calories.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <motion.a
                href="#details"
                className="inline-flex items-center justify-center gap-2 bg-krio-chalk px-6 py-2 rounded-lg font-semibold tracking-[3px] text-lg shadow-lg hover:shadow-xl transform transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View Details</span>
              </motion.a>
              <motion.a
                href={activeProductData.link}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 bg-krio-blue px-6 py-2 rounded-lg font-semibold tracking-[3px] text-lg shadow-lg hover:shadow-xl transform transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>BUY NOW</span>
                <img
                  src="/lovable-uploads/amazon.png"
                  alt="Amazon logo"
                  className="w-12 h-12 object-contain pt-1"
                />
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            className="flex justify-center items-start h-full"
            variants={itemVariants}
          >
            <motion.img
              src={activeProductData.image}
              alt={activeProductData.name}
              className="w-auto h-auto object-cover mx-auto "
              variants={imageVariants}
              whileHover="hover"
              animate="visible"
              initial="hidden"
            />
          </motion.div>
        </motion.div>

        <div className="md:absolute md:bottom-20 md:left-0 md:right-0 flex justify-center space-x-4 mt-4">
          {products.map((product, index) => (
            <motion.button
              key={product.id}
              onClick={() => setActiveProduct(index)}
              className={`md:w-5 md:h-5 w-1 h-1 rounded-full transition-all duration-500 ${
                activeProduct === index
                  ? "bg-white md:scale-125 shadow-lg"
                  : "bg-white/40 hover:bg-white/60"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`View ${product.name}`}
            />
          ))}
        </div>
      </div>

      {/* Wavy Border Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden hidden md:block">
        <svg
          className="relative block w-full h-[60px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-white"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </svg>
      </div>
    </section>
  );
};

export default ProductHero;
