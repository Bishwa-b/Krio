import { useState } from "react";
import Header from "../components/Header";
import ProductHero from "../components/sections/ProductHero";
import ProductDetails from "../components/sections/ProductDetails";
import ProductShowcase from "../components/sections/ProductShowcaseSection";
import FAQSection from "../components/sections/FAQSection";
import ProductFooter from "../components/ProductFooter";
import MobileFooter from "@/components/MobileFooter";


const Products = () => {
  const [activeProduct, setActiveProduct] = useState<number>(0);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative">
        <ProductHero
          activeProduct={activeProduct}
          setActiveProduct={setActiveProduct}
        />
        <div className="absolute top-0 left-0 right-0 z-10">
          <Header />
        </div>
      </div>
      <main className="flex-grow">
        <ProductDetails activeProduct={activeProduct} />
        <ProductShowcase />
        <FAQSection/>
      </main>
      <ProductFooter />
      <MobileFooter />
    </div>
  );
};

export default Products;
