import React from "react";
import Marquee from "react-fast-marquee";

const Features: React.FC = () => {
  const features = [
    { icon: "/lovable-uploads/sugar-free.png", text1: "ZERO", text2: "SUGAR" },
    {
      icon: "/lovable-uploads/no-cocoa.png",
      text1: "CAFFEINE",
      text2: "FREE",
    },
    {
      icon: "/lovable-uploads/no-calories.png",
      text1: "ZERO",
      text2: "CALORIES",
    },
    {
      icon: "/lovable-uploads/no-preservatives.png",
      text1: "NO",
      text2: "PRESERVATIVES",
    },
    {
      icon: "/lovable-uploads/no-artificial-colours.png",
      text1: "NO",
      text2: "ARTIFICIAL ",
    },
  ];

  return (
    <Marquee
      direction="right"
      speed={50}
      gradient={false}
      className="bg-[#ce4e28] py-4"
    >
      {features.map((feature, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center justify-center mx-4"
        >
          <img
            src={feature.icon}
            alt={feature.text1}
            className="h-auto w-64 mr-4"
          />
          <h2 className="text-4xl font-display leading-tight tracking-tighter text-white text-center">
            {feature.text1} <br /> {feature.text2}
          </h2>
        </div>
      ))}
    </Marquee>
  );
};

export default Features;
