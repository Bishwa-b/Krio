import HeroHeader from "../components/HeroHeader";
import ProductFooter from "../components/ProductFooter";
import MobileFooter from "@/components/MobileFooter";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const About = () => {
  useScrollAnimation();

  return (
    <div className="bg-white min-h-screen">
      <HeroHeader />

      <section className="pt-28 pb-20 md:pt-36 md:pb-28 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center scroll-animation">
              The Krio Story
            </h1>

            <div className="mb-16 scroll-animation">
              <img
                src="/lovable-uploads/krio-iconb.png"
                alt="Krio Logo"
                className="w-48 mx-auto mb-8"
              />

              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p className="text-2xl tracking-tighter font-normal">
                  We set out to create a clean, natural energy drink which works
                  with your body and not against it!
                </p>

                <p className="text-2xl tracking-tighter font-normal">
                  Founded by a team of health-conscious entrepreneurs and food
                  scientists, Krio Energy was born out of a desire to
                  revolutionize the energy drink category. Most energy drinks
                  rely on high doses of caffeine, sugar, artificial stimulants,
                  color, and flavor that cause energy crashes, jitters,
                  dehydration, and long-term health concerns.
                </p>

                <p className="text-2xl tracking-tighter font-normal">
                  We discovered the untapped potential of Theobroma cacao -
                  nature's ultimate superfood, which has long been used as a
                  vitality beverage in traditional cultures and revered for
                  centuries as a natural energizer, and combined it with
                  L-theanine, B and C vitamins and Electrolytes, to craft a
                  formula that delivers on all fronts.
                </p>

                <p className="text-2xl tracking-tighter font-normal">
                  What sets Krio apart is not just what it contains, but what it
                  doesn't. Our caffeine-free, zero-sugar and calorie product is
                  designed for conscious consumers who want to feel energized
                  without compromising their health.
                </p>

                <p className="text-2xl tracking-tighter font-normal">
                  Today Krio is at the forefront of a movement towards healthier
                  energy solutions in India and beyond. Our mission is to
                  empower individuals to achieve their full potential through
                  products that enhance their well-being. Whether you're
                  working, studying, exercising, gaming or socializing, Krio is
                  designed to help you be at your best.
                </p>

                <p className="text-2xl tracking-tighter font-normal">
                  Thank you for joining us on this journey to redefine energy
                  drinks in India. With Krio, you can truly be different be
                  limitless.
                </p>
              </div>
            </div>
            <div className="mb-16 scroll-animation h-[500px]">
              <img
                src="/lovable-uploads/promotion4.png"
                alt="Krio Energy Drink"
                className="w-full h-full rounded-lg shadow-lg mb-8 object-cover"
              />
            </div>
            <div className="text-center scroll-animation">
              <h2 className="text-3xl tracking-tighter font-bold mb-6">Join Our Mission</h2>
              <p className="text-gray-700 mb-6 text-2xl tracking-tighter font-normal">
                We invite you to be part of our journey towards revolutionizing
                the energy drink industry with clean, sustainable, and effective
                alternatives.
              </p>
              <div className="space-x-4">
<a
                href="https://amzn.in/d/5CWQ2pX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-krio-orange text-white px-8 py-3 rounded-md font-medium hover:bg-krio-orange/90 transition-colors"
              >
                TRY KRIO TODAY
              </a>
                <a
                  href="/ambassador"
                  className="inline-block bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-black/90 transition-colors"
                >
                  Become an Ambassador
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductFooter />
      <MobileFooter />
    </div>
  );
};

export default About;
