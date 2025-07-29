import React from "react";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-krio-main z-50 flex flex-col items-center justify-center font-poppins">
      {/* Zoom-in/out animation on logo */}
      <img
        src="/lovable-uploads/krio-icon.png"
        alt="logo"
        className="w-[700px] h-auto animate-zoomPulse"
      />

      {/* Pulse animation on text */}
      <p className="mt-8 text-white text-xl font-semibold animate-pulseText">
        Loading...
      </p>

      {/* Tailwind-based keyframes via @layer (or custom CSS below) */}
    </div>
  );
};

export default LoadingScreen;
