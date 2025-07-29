import React from "react";
import HeroHeader from "../components/HeroHeader";
import ProductFooter from "../components/ProductFooter";
import MobileFooter from "@/components/MobileFooter";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { toast } from "@/components/ui/use-toast";

const Ambassador = () => {
  useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application received!",
      description:
        "Thank you for applying to be a Krio ambassador. We'll review your application and get back to you soon.",
    });
  };

  return (
    <div className="bg-white min-h-screen">
      <HeroHeader />

      <section className="pt-28 pb-20 md:pt-36 md:pb-28 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center scroll-animation">
              Become a Krio Ambassador
            </h1>
            <p className="text-xl text-center text-gray-700 mb-12 scroll-animation">
              Join our community of health-conscious individuals and help spread
              the word about clean energy
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="scroll-animation-left">
                <img
                  src="/lovable-uploads/ambassador.jpg"
                  alt="Krio Ambassador"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              <div className="scroll-animation-right">
                <h2 className="text-2xl font-bold mb-4">
                  Why Become an Ambassador?
                </h2>
                <ul className="space-y-4 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <span className="text-krio-green font-bold mr-2">•</span>
                    <span>Free product samples and exclusive merchandise</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-krio-green font-bold mr-2">•</span>
                    <span>
                      Commissions on sales through your unique referral link
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-krio-green font-bold mr-2">•</span>
                    <span>Early access to new products and flavors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-krio-green font-bold mr-2">•</span>
                    <span>Opportunity to be featured on our social media</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-krio-green font-bold mr-2">•</span>
                    <span>Join a community of like-minded individuals</span>
                  </li>
                </ul>
                <p className="text-gray-700">
                  We're looking for passionate individuals who believe in clean
                  energy and want to share their experience with others.
                </p>
              </div>
            </div>

            <div className="bg-krio-yellow/10 p-8 rounded-lg shadow-lg mb-16 scroll-animation">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Apply to be an Ambassador
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-gray-700 mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-krio-orange focus:border-krio-orange"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-gray-700 mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-krio-orange focus:border-krio-orange"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-krio-orange focus:border-krio-orange"
                  />
                </div>

                <div>
                  <label
                    htmlFor="instagram"
                    className="block text-gray-700 mb-2"
                  >
                    Instagram Handle
                  </label>
                  <input
                    type="text"
                    id="instagram"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-krio-orange focus:border-krio-orange"
                  />
                </div>

                <div>
                  <label htmlFor="why" className="block text-gray-700 mb-2">
                    Why do you want to be a Krio Ambassador?
                  </label>
                  <textarea
                    id="why"
                    rows={4}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-krio-orange focus:border-krio-orange"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-krio-orange text-white px-8 py-3 rounded-md font-medium hover:bg-krio-orange/90 transition-colors"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>

            <div className="text-center scroll-animation">
              <h2 className="text-2xl font-bold mb-6">Got Questions?</h2>
              <p className="text-gray-700 mb-6">
                If you have any questions about the ambassador program, please
                reach out to us at:
              </p>
              <a
                href="mailto:ambassadors@krio.com"
                className="text-krio-orange font-medium hover:underline"
              >
                ambassadors@krio.com
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

export default Ambassador;
