import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileFooter from "@/components/MobileFooter";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
// Import section components
import HeroSection from "@/components/sections/HeroSection";
import Features from "@/components/sections/Features";
import WhyKrioSection from "@/components/sections/WhyKrioSection";
import VideoSection from "@/components/sections/VideoSection";
import FormulaSection from "@/components/sections/FormulaSection";
import LifestyleSection from "@/components/sections/LifestyleSection";
import Promotion from "@/components/sections/Promotion";
import ProductShopSection from "@/components/sections/ProductShopSection";
import NewsletterSection from "@/components/sections/NewsletterSection";

const Index = () => {
  // Initialize scroll animation
  useScrollAnimation();

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Header />
      <main>
        <HeroSection />
        <Features />
        <VideoSection />
        <WhyKrioSection />
        <FormulaSection />
        <LifestyleSection />
        <Promotion />
        <ProductShopSection />
        <NewsletterSection />
      </main>

      <Footer />
      <MobileFooter />
    </div>
  );
};

export default Index;
