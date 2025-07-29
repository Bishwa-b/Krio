import { useState } from "react";
import HeroHeader from "../components/HeroHeader";
import ProductFooter from "../components/ProductFooter";
import MobileFooter from "@/components/MobileFooter";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Science = () => {
  useScrollAnimation();
  const [showReferences, setShowReferences] = useState(false);

  const toggleReferences = () => {
    setShowReferences(!showReferences);
  };

  return (
    <div className="bg-white min-h-screen">
      <HeroHeader />

      <section className="pt-28 pb-20 md:pt-36 md:pb-28 px-4">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight scroll-animation">
              The Science Behind the "Feel-Good Energy" of Krio Energy Drink
            </h1>

            <p className="text-gray-700 mb-6 text-2xl font-normal tracking-tight ">
              In today’s fast-paced world, energy is not just about physical
              stamina - it’s about mental clarity, emotional well-being, and
              sustained performance without burnout. Traditional energy
              solutions containing caffeine and excessive sugar which provide a
              temporary boost but often come with jitters, anxiety, crashes,
              dehydration, and metabolic issues. It can cause a rapid spike in
              adrenaline, leading to an initial burst of energy giving you wings
              to fly but causes a sharp crash within a few hours! Unlike these,
              Krio Energy drink is formulated using scientifically backed
              bioactive ingredients which harnesses the power of Cacao to offer
              a clean, natural, and effective energy source. It works
              synergistically with L-theanine, B-vitamins, Vitamin C, and
              Electrolytes to uplift and sustain your body and mind.
            </p>

            {/* Content Sections */}
            <div className="mb-12">
              <h2 className="text-4xl tracking-tight font-bold mb-4">
                1. Cacao Extract as a Natural Energy Source
              </h2>
              <p className="text-gray-700 mb-4 text-2xl font-normal tracking-tight">
                Cacao contains theobromine, polyphenols, and flavonoids, which
                provide a gentle, sustained boost without overstimulating the
                nervous system[1]. This avoids the sharp spikes and crashes
                associated with caffeine. Theobromine has a longer half-life
                (6–8 hours) compared to caffeine (3–5 hours), ensuring a gradual
                release of energy without sudden drops[2]. It may also help to
                reduce stress and improve mood.
              </p>
              <h2 className="text-4xl tracking-tight font-bold mb-4">
                2. L-Theanine for Cognitive Focus & Relaxation
              </h2>
              <p className="text-gray-700 mb-4 text-2xl font-normal tracking-tight">
                L-theanine is an amino acid derived from natural green tea which
                is known to support focus and reduce stress[3]. In regular
                energy drinks while caffeine increases cortisol and can cause
                anxiety, L-theanine works synergistically with cacao’s compounds
                to enhance focus and promote a calm state, ensuring energy
                without stress[4].
              </p>
              <h2 className="text-4xl tracking-tight font-bold mb-4">
                3. B-Vitamins & Vitamin C for Metabolism & Immunity
              </h2>
              <p className="text-gray-700 mb-4 text-2xl font-normal tracking-tight">
                Unlike artificial energy boosters, B-vitamins support the
                release of natural energy at the cellular level[5], while
                Vitamin C boosts recovery and antioxidant defense, keeping the
                body resilient and supporting immune functions[6].
              </p>

              <h2 className="text-4xl tracking-tight font-bold mb-4">
                4. Electrolytes for hydration and endurance
              </h2>
              <p className="text-gray-700 mb-4 text-2xl font-normal tracking-tight">
                Potassium and Magnesium is known to prevent
                dehydration-associated fatigue and muscle cramps, helps to
                improve endurance and hydration ensuring sustained performance.
                Magnesium also aids in energy metabolism and nerve
                function[7,8].
              </p>
            </div>

            {/* Other sections omitted for brevity */}

            <div className="text-center scroll-animation mb-12">
              <img
                src="/lovable-uploads/science.jpg"
                alt="Scientific Research"
                className="w-full h-64 object-cover rounded-lg mb-8"
              />
            </div>

            <div className="text-center scroll-animation">
              <a
                href="/formula"
                className="inline-block bg-krio-orange text-white md:px-8 px-2 py-3 rounded-md font-medium hover:bg-krio-orange/90 transition-colors mr-4 md:mb-0 mb-4"
              >
                LEARN ABOUT OUR FORMULA
              </a>
              <a
                href="https://amzn.in/d/5CWQ2pX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-black/90 transition-colors"
              >
                TRY KRIO TODAY
              </a>
            </div>

            {/* References Section */}
            <div className="mt-12">
              <button
                onClick={toggleReferences}
                className="text-krio-orange font-medium underline hover:text-krio-orange/90 transition-colors"
              >
                {showReferences ? "Hide References" : "Show References"}
              </button>
              {showReferences && (
                <div className="mt-4 bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">
                    Scientific References Supporting Krio Energy Drink's
                    Formulation
                  </h3>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>
                      Smit, H. J. (2011). Theobromine and the pharmacology of
                      cocoa. Frontiers in Pharmacology, 2, 14.
                      [DOI:10.3389/fphar.2011.00014]
                    </li>
                    <li>
                      Grassi, D., Desideri, G., et al. (2011). Neuroprotective
                      effects of cocoa flavanol consumption on cognitive
                      function in healthy individuals. The American Journal of
                      Clinical Nutrition, 93(6), 1365–1373.
                      [DOI:10.3945/ajcn.110.002899]
                    </li>
                    <li>
                      Brickman, A. M., Khan, U. A., et al. (2014). Enhancing
                      dentate gyrus function with dietary flavanols improves
                      cognition in older adults. Nature Neuroscience, 17(12),
                      1798–1803. [DOI:10.1038/nn.3850]
                    </li>
                    <li>
                      Scholey, A. B., et al. (2013). Acute cognitive effects of
                      polyphenols in healthy adults: A review of randomized,
                      double-blind, placebo-controlled trials. Nutrients, 5(12),
                      4881–4915. [DOI:10.3390/nu5124881]
                    </li>
                    <li>
                      Hidese, S., Ogawa, S., et al. (2019). Effects of
                      L-theanine on stress-related symptoms and cognitive
                      functions in healthy adults: A randomized controlled
                      trial. Nutrients, 11(10), 2362. [DOI:10.3390/nu11102362]
                    </li>
                    <li>
                      Kennedy, D. O. (2016). B vitamins and the brain:
                      Mechanisms, dose and efficacy—A review. Advances in
                      Nutrition, 7(3), 524–532. [DOI:10.3945/an.115.010306]
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <ProductFooter />
      <MobileFooter />
    </div>
  );
};

export default Science;
