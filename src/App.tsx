import React, { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/sections/ScrollToTop";
import Index from "./pages/Index";
import Products from "./pages/Products";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Science from "./pages/Science";
import Formula from "./pages/Formula";
import Ambassador from "./pages/Ambassador";
import LoadingScreen from "./components/LoadingScreen";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload your important assets here
    const preloadAssets = async () => {
      try {
        // Add your asset preloading logic here
        // Example: Preload important images
        const importantImages = [
          "/lovable-uploads/krio-icon.png",
          "/lovable-uploads/Krio-punch.png",
          "/lovable-uploads/Krio-blue.png",
          "/lovable-uploads/Krio-can.png",
          // Add other important images
        ];

        await Promise.all(
          importantImages.map((src) => {
            return new Promise((resolve, reject) => {
              const img = new Image();
              img.src = src;
              img.onload = resolve;
              img.onerror = reject;
            });
          })
        );

        // Minimum loading time of 2 seconds for animation
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const loader = document.getElementById("global-loader");
        if (loader) loader.remove();

        setIsLoading(false);
      } catch (error) {
        console.error("Error preloading assets:", error);
        const loader = document.getElementById("global-loader");
        if (loader) {
          loader.style.opacity = "0";
          setTimeout(() => loader.remove(), 500); // matches CSS transition
        }
        setIsLoading(false);
      }
    };

    preloadAssets();
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          {/* Global loader */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<Products />} />

            <Route path="/about" element={<About />} />

            <Route path="/science" element={<Science />} />
            <Route path="/formula" element={<Formula />} />
            <Route path="/ambassador" element={<Ambassador />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
