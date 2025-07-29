import { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { slideInBottom } from "@/utils/animations";

interface ProductDetailsProps {
  activeProduct: number;
}

const ProductDetails = ({ activeProduct }: ProductDetailsProps) => {
  const [selectedTab, setSelectedTab] = useState<string>("benefits");
  const sectionRef = useRef<HTMLDivElement>(null);

  const products = [
    {
      id: 1,
      name: "Krio Original Punch",
      tagline:
        "Smooth cocoa flavor with subtle caramel notes and a hint of zing.",
      description:
        "Step into a refreshing world of clean, plant-based energy with Krio Sparkling Original Punch. Crafted for those who crave focus, hydration, and flavor without the jitters or sugar crash, Krio brings you energy powered by cacao, not caffeine.",
      benefits: [
        "NATURAL CACAO EXTRACT:  RICH IN THEOBROMINE & POLYPHENOLS",
        "Provides lasting upbeat energy without the crash, may help reduce stress and improve mood",
        "RICH IN B-VITAMINS (B3, B5, B6 & B12) Helps to unlock Energy",
        "RICH IN VITAMIN C Supports immune health",
        "L-THEANINE FROM GREEN TEA Boosts focus and mental clarity",
        "SOURCE OF ELECTROLYTES: POTASSIUM & MAGNESIUM Replenishes and hydrates",
      ],
      ingredients:
        "Carbonated Water, Lemon Juice Concentrate, Natural Cacao Extract, Minerals (Potassium Chloride and Magnesium Sulphate), Natural L-theanine from Green tea, Vitamins (B3, B5, B6 and B12), Steviol Glycoside (INS 960) and Natural and Nature Identical Flavors.",
      nutrition: {
        per100ml: {
          energy: "0 kcal",
          protein: "0g",
          carbohydrates: "0g",
          addedSugar: "0g",
          totalSugar: "0g",
          fat: "0g",
          sodium: "20mg",
          cacaoExtract: "350-500mg",
          lTheanine: "32mg",
          niacin: "0.84mg",
          vitaminB5: "0.3mg",
          vitaminB6: "0.12mg",
          vitaminB12: "0.12µg",
          potassium: "70mg",
          magnesium: "26.4mg",
          chloride: "64.4mg",
        },
        per250ml: {
          energy: "0 ",
          protein: "0",
          carbohydrates: "0",
          addedSugar: "0",
          totalSugar: "#",
          fat: "0",
          sodium: "2.5",
          cacaoExtract: "#",
          lTheanine: "#",
          niacin: "15",
          vitaminB5: "15",
          vitaminB6: "15",
          vitaminB12: "15",
          potassium: "5",
          magnesium: "15",
          chloride: "8.9",
        },
      },
      accentColor: "bg-krio-orange",
      textColor: "text-krio-orange",
    },
    {
      id: 2,
      name: "Krio Blueberry Lemonade",
      tagline: "A zingy lemonade with a hint of blueberry.",
      description:
        "Step into a refreshing world of clean, plant-based energy with Krio Sparkling Blueberry Lemonade. Crafted for those who crave focus, hydration, and flavor without the jitters or sugar crash, Krio brings you energy powered by cacao, not caffeine.",
      benefits: [
        "NATURAL CACAO EXTRACT:  RICH IN THEOBROMINE & POLYPHENOLS",
        "Provides lasting upbeat energy without the crash, may help reduce stress and improve mood",
        "RICH IN B-VITAMINS (B3, B5, B6 & B12) Helps to unlock Energy",
        "RICH IN VITAMIN C Supports immune health",
        "L-THEANINE FROM GREEN TEA Boosts focus and mental clarity",
        "SOURCE OF ELECTROLYTES: POTASSIUM & MAGNESIUM Replenishes and hydrates",
      ],
      ingredients:
        "Carbonated Water, Lemon Juice Concentrate, Natural Cacao Extract, Minerals (Potassium Chloride and Magnesium Sulphate), Natural L-theanine from Green tea, Vitamins (B3, B5, B6 and B12), Steviol Glycoside (INS 960) and Natural and Nature Identical Flavours.",
      nutrition: {
        per100ml: {
          energy: "0 kcal",
          protein: "0g",
          carbohydrates: "0g",
          addedSugar: "0g",
          totalSugar: "0g",
          fat: "0g",
          sodium: "20mg",
          cacaoExtract: "350-500mg",
          lTheanine: "32mg",
          niacin: "0.84mg",
          vitaminB5: "0.3mg",
          vitaminB6: "0.12mg",
          vitaminB12: "0.12µg",
          potassium: "70mg",
          magnesium: "26.4mg",
          chloride: "64.4mg",
        },
        per250ml: {
          energy: "0 ",
          protein: "0",
          carbohydrates: "0",
          addedSugar: "0",
          totalSugar: "#",
          fat: "0",
          sodium: "2.5",
          cacaoExtract: "#",
          lTheanine: "#",
          niacin: "15",
          vitaminB5: "15",
          vitaminB6: "15",
          vitaminB12: "15",
          potassium: "5",
          magnesium: "15",
          chloride: "8.9",
        },
      },
      accentColor: "bg-krio-main",
      textColor: "text-krio-main",
    },
  ];

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.classList.add("animated");

      const animatedElements =
        sectionRef.current.querySelectorAll(".appear-animation");
      animatedElements.forEach((element) => {
        element.classList.add("animated");
      });
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");

          const animatedElements =
            entry.target.querySelectorAll(".appear-animation");
          animatedElements.forEach((element) => {
            element.classList.add("animated");
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const activeProductData = products[activeProduct];

  return (
    <section className="py-16 md:py-24 bg-white" id="details" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            variants={slideInBottom}
            initial="initial"
            whileInView="animate"
            // viewport={viewportOptions}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-display uppercase mb-4 text-center appear-animation animated"
          >
            {activeProductData.name}
          </motion.h2>

          <motion.p
            variants={slideInBottom}
            initial="initial"
            whileInView="animate"
            // viewport={viewportOptions}
            transition={{ delay: 0.6 }}
            className="text-3xl max-w-5xl mx-auto leading-tight  font-normal mt-4 mb-2 text-center tracking-tight"
          >
            {activeProductData.tagline}
          </motion.p>

          <motion.p
            variants={slideInBottom}
            initial="initial"
            whileInView="animate"
            // viewport={viewportOptions}
            transition={{ delay: 0.3 }}
            className="text-3xl max-w-5xl mx-auto leading-tight font-normal mb-16 text-center uppercase"
          >
            Crash-free | Zero sugar | Zero calories.
          </motion.p>
          <div className="appear-animation animated mb-10 text-center">
            <motion.p
              variants={slideInBottom}
              initial="initial"
              whileInView="animate"
              // viewport={viewportOptions}
              transition={{ delay: 0.5 }}
              className="text-3xl max-w-5xl mx-auto leading-tight font-normal"
            >
              {activeProductData.description}
            </motion.p>
          </div>

          <div className="appear-animation animated">
            <motion.div
              variants={slideInBottom}
              initial="initial"
              whileInView="animate"
              // viewport={viewportOptions}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap justify-center border-b border-gray-200 mb-8"
            >
              <button
                onClick={() => setSelectedTab("benefits")}
                className={`px-4 md:px-8 py-4 text-3xl font-medium ${
                  selectedTab === "benefits"
                    ? `border-b-2 ${activeProductData.textColor}`
                    : "text-gray-500"
                }`}
              >
                Benefits
              </button>
              <button
                onClick={() => setSelectedTab("ingredients")}
                className={`px-4 md:px-8 py-4 text-3xl font-medium ${
                  selectedTab === "ingredients"
                    ? `border-b-2 ${activeProductData.textColor}`
                    : "text-gray-500"
                }`}
              >
                Ingredients
              </button>
              <button
                onClick={() => setSelectedTab("nutrition")}
                className={`px-4 md:px-8 py-4 text-3xl font-medium ${
                  selectedTab === "nutrition"
                    ? `border-b-2 ${activeProductData.textColor}`
                    : "text-gray-500"
                }`}
              >
                Nutrition
              </button>
            </motion.div>

            <motion.div
              variants={slideInBottom}
              initial="initial"
              whileInView="animate"
              // viewport={viewportOptions}
              transition={{ delay: 1.2 }}
              className="py-6"
            >
              {selectedTab === "benefits" && (
                <div className="flex flex-col  items-start justify-center gap-6">
                  {activeProductData.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle2
                        className={activeProductData.textColor}
                        size={30}
                      />
                      <span className="text-2xl leading-tighter font-medium tracking-tighter">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {selectedTab === "ingredients" && (
                <div className="max-w-3xl mx-auto">
                  <p className="text-2xl leading-relaxed">
                    {activeProductData.ingredients}
                  </p>
                  <div
                    className={`${activeProductData.accentColor} flex justify-around p-4 mt-6 rounded-lg`}
                  >
                    {/* <p className="text-white text-center font-medium">
                      All natural ingredients. No artificial colors, flavors, or
                      preservatives.
                    </p> */}
                    <div className="flex flex-col items-center mr-4">
                      <img
                        src="/lovable-uploads/no-artificial-colours.png"
                        alt="Organic"
                        className="w-40 h-40"
                      />
                      <p className="text-white text-center font-medium mt-2">
                        All natural ingredients.
                      </p>
                    </div>
                    <div className="flex flex-col items-center mr-4">
                      <img
                        src="/lovable-uploads/label.png"
                        alt="No artificial flavors"
                        className="w-40 h-40"
                      />
                      <p className="text-white text-center font-medium mt-2">
                        No artificial flavors
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <img
                        src="/lovable-uploads/no-preservatives.png"
                        alt="No Preservatives"
                        className="w-40 h-40"
                      />
                      <p className="text-white text-center font-medium mt-2">
                        No Preservatives
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {selectedTab === "nutrition" && (
                <div className="max-w-3xl mx-auto border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-100 p-4 border-b border-gray-200">
                    <h3 className="text-xl font-bold">Nutrition Facts</h3>
                  </div>

                  <div className="p-4">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-gray-300">
                          <th className="text-left py-2">
                            Nutritional Information
                          </th>
                          <th className="text-right py-2">Per 100ml</th>
                          <th className="text-right py-2">% RDA Per 250ml</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(
                          activeProductData.nutrition.per100ml
                        ).map(([key, value100ml]) => {
                          const value250ml =
                            activeProductData.nutrition.per250ml[key];
                          return (
                            <tr key={key} className="border-b border-gray-200">
                              <td className="py-2 font-medium capitalize">
                                {key.replace(/([A-Z])/g, " $1").trim()}
                              </td>
                              <td className="text-right py-2">{value100ml}</td>
                              <td className="text-right py-2">{value250ml}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                    <p className="text-sm mt-4 text-gray-600">
                      *RDA= RECOMMENDED DAILY ALLOWANCE, *RDA of an average
                      adult *2000 kcal as per FSSAI and ICMR RDA Table 2020,
                      #RDA Values not established.
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
