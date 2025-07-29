// src/pages/Formula.tsx
import HeroHeader from "../components/HeroHeader";
import ProductFooter from "../components/ProductFooter";
import MobileFooter from "@/components/MobileFooter";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

const Formula = () => {
  useScrollAnimation();

  return (
    <div className="bg-white min-h-screen">
      <HeroHeader />

      <section className="pt-28 pb-20 md:pt-36 md:pb-28 px-4 relative">
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-krio-green/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-krio-purple/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-krio-orange/10 rounded-full blur-3xl" />

        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-paytone mb-12 text-center scroll-animation text-krio-purple">
              Know Your Krio Formula
            </h1>

            {/* Two‐column grid of ingredients */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              {/* Left ingredients */}
              <div className="space-y-16">
                <div className="scroll-animation-left">
                  <div className="aspect-square rounded-2xl overflow-hidden mb-4 shadow-lg">
                    <img
                      src="/lovable-uploads/cacoa.jpg"
                      alt="Cacao"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <h3 className="text-3xl font-bold mb-2 tracking-tight text-krio-purple">
                    Theobroma Cacao
                  </h3>
                  <p className="text-gray-700 font-normal max-w-2xl text-2xl tracking-tighter">
                    Nature's ultimate superfruit rich in theobromine &
                    polyphenols, providing lasting upbeat energy without the
                    crash, and may help reduce stress and improve mood.
                  </p>
                </div>

                <div className="scroll-animation-left">
                  <div className="aspect-square rounded-2xl overflow-hidden mb-4 shadow-lg">
                    <img
                      src="/lovable-uploads/vitamins.jpg"
                      alt="B Vitamins"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <h3 className="text-3xl  mb-2 font-bold tracking-tight text-krio-teal">
                    B-Vitamins
                  </h3>
                  <p className="text-gray-700 font-normal max-w-2xl text-2xl tracking-tighter">
                    Essential for energy production, nervous system function,
                    and cognitive performance. B-vitamins help convert food into
                    usable energy.
                  </p>
                </div>
              </div>

              {/* Right ingredients */}
              <div className="space-y-16">
                <div className="scroll-animation-right">
                  <div className="aspect-square rounded-2xl overflow-hidden mb-4 shadow-lg">
                    <img
                      src="/lovable-uploads/green-tea.jpg"
                      alt="L-Theanine"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <h3 className="text-3xl mb-2 font-bold tracking-tight text-green-700">
                    L-Theanine
                  </h3>
                  <p className="text-gray-700 font-normal max-w-2xl text-2xl tracking-tighter">
                    An amino acid from green tea that promotes relaxation
                    without drowsiness, helps reduce stress, improves focus and
                    promote a calm state.
                  </p>
                </div>

                <div className="scroll-animation-right">
                  <div className="aspect-square rounded-2xl overflow-hidden mb-4 shadow-lg">
                    <img
                      src="/lovable-uploads/minerals.jpg"
                      alt="Minerals"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <h3 className="text-3xl font-bold tracking-tight mb-2  text-krio-orange">
                    Minerals
                  </h3>
                  <p className="text-gray-700 font-normal max-w-2xl text-2xl tracking-tighter">
                    Vital for hydration, muscle function, and energy metabolism.
                    Our formula includes electrolytes that support overall
                    well-being.
                  </p>
                </div>
              </div>
            </div>

            {/* How it works */}
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-12 scroll-animation relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-krio-yellow/10 to-krio-green/10" />
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-4 font-paytone text-krio-blue">
                  How Krio Formula Works
                </h2>
                <p className="text-gray-700 mb-4 font-normal text-2xl tracking-tighter ">
                  Unlike traditional energy drinks that rely on caffeine and
                  sugar for a quick buzz followed by a crash, Krio's formula
                  provides sustainable energy through natural ingredients.
                </p>
                <p className="text-gray-700 mb-4 font-normal text-2xl tracking-tighter">
                  The theobromine in cacao offers a longer-lasting, smoother
                  boost than caffeine—without jitters or crash. Combined with
                  L-theanine, it creates a balanced state of alert calmness.
                </p>
                <p className="text-gray-700 font-normal text-2xl tracking-tighter">
                  B vitamins and minerals support your body's natural energy
                  production, while the absence of artificial ingredients means
                  you get clean energy without unwanted side effects.
                </p>
              </div>
            </div>

            {/* Call to action */}
            <div className="text-center scroll-animation">
              <a
                href="https://amzn.in/d/5CWQ2pX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-krio-orange text-white px-8 py-3 rounded-md font-medium hover:bg-krio-orange/90 transition-colors"
              >
                TRY KRIO TODAY
              </a>
            </div>
          </div>
        </div>
      </section>

      <ProductFooter />
      <MobileFooter />
    </div>
  );
};

export default Formula;
