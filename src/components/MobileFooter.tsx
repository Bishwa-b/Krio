import React from "react";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

export const MobileFooter: React.FC = () => (
  <footer className="bg-black text-white py-6 md:hidden">
    <div className="max-w-md mx-auto px-4 flex flex-col items-center">
      {/* Logo with black background */}
      <div className="p-2 mb-4">
        <img
          src="/lovable-uploads/krio-icon.png"
          alt="Krio Logo"
          className="h-8 w-auto"
        />
      </div>

      {/* Social Icons */}
      <div className="flex space-x-5 mb-4">
        <a href="#" aria-label="Instagram" className="hover:text-gray-400">
          <Instagram size={18} />
        </a>
        <a href="#" aria-label="Facebook" className="hover:text-gray-400">
          <Facebook size={18} />
        </a>
        <a href="#" aria-label="Twitter" className="hover:text-gray-400">
          <Twitter size={18} />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-xs opacity-50 text-center">
        © {new Date().getFullYear()} Krio Energy Drink.
      </p>
    </div>
  </footer>
);

export default MobileFooter;
