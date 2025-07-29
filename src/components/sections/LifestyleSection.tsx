// import React from "react";
// import { motion } from "framer-motion";
// import { burstIn, viewportOptions } from "@/utils/animations";

// const LifestyleSection: React.FC = () => {
//   const activities = [
//     {
//       title: "GAMING",
//       image: "/lovable-uploads/lifestyle-1.jpg",
//     },
//     {
//       title: "WORKING OUT",
//       image: "/lovable-uploads/lifestyle-2.jpg",
//     },
//     {
//       title: "PARTYING",
//       image: "/lovable-uploads/lifestyle-3.jpg",
//     },
//     {
//       title: "PERFORMING",
//       image: "/lovable-uploads/lifestyle-4.jpg",
//     },
//     {
//       title: "PLAYING",
//       image: "/lovable-uploads/lifestyle-5.jpg",
//     },
//     {
//       title: "WORKING",
//       image: "/lovable-uploads/lifestyle-6.jpg",
//     },
//   ];
//   return (
//     <section className="py-20 md:py-32  relative overflow-hidden bg-[#ce4e28]">
//       {/* Background hexagon pattern */}

//       <div className="container mx-auto px-4">
//         {/* Section Title */}
//         <motion.div
//           variants={burstIn}
//           initial="initial"
//           whileInView="animate"
//           //viewport={viewportOptions}
//           className="text-center mb-16"
//         >
//           <h2 className="text-white mb-4 text-2xl md:text-5xl font-medium">
//             Your Everyday Every Drink
//           </h2>
//           <p className="text-xl md:text-4xl text-[#f9c24d] font-normal">
//             #Create, Hustle & Achieve Greatness!
//           </p>
//         </motion.div>

//         {/* Image Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
//           {activities.map((activity, index) => (
//             <motion.div
//               key={index}
//               variants={burstIn}
//               initial="initial"
//               whileInView="animate"
//               //viewport={viewportOptions}
//               transition={{ delay: index * 0.1 }}
//               className="relative aspect-square overflow-hidden group"
//             >
//               <img
//                 src={activity.image}
//                 alt={activity.title}
//                 className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//               />
//               {/* <div className="absolute inset-0 bg-krio-main/20 group-hover:bg-krio-main/0 transition-all duration-300" /> */}
//               <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center z-20">
//                 <h3 className="text-3xl md:text-4xl font-bold uppercase text-white">
//                   {activity.title}
//                 </h3>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Bottom Product Image */}
//       </div>
//     </section>
//   );
// };

// export default LifestyleSection;

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// type Activity = {
//   title: string;
//   image: string;
//   headline: string;
//   description: string;
// };

// const activities: Activity[] = [
//   {
//     title: "GAMING",
//     image: "/lovable-uploads/lifestyle-1.jpg",
//     headline: "Dominate the Leaderboard",
//     description:
//       "Keep your reflexes razor-sharp during marathon sessions. Krio’s blend of natural nootropics delivers sustained focus so you never miss a frame or lag spike.",
//   },
//   {
//     title: "WORKING OUT",
//     image: "/lovable-uploads/lifestyle-2.jpg",
//     headline: "Power Your Workout",
//     description:
//       "Whether it’s cardio or lifting, Krio gives you that clean energy lift—no jitters, just pure drive to push one rep further.",
//   },
//   {
//     title: "PARTYING",
//     image: "/lovable-uploads/lifestyle-3.jpg",
//     headline: "Keep the Vibes Going",
//     description:
//       "When the music’s pumping, Krio keeps you in the groove—flavorful, social-ready, and crash-free so the night never stops.",
//   },
//   {
//     title: "PERFORMING",
//     image: "/lovable-uploads/lifestyle-4.jpg",
//     headline: "Hit Every Note",
//     description:
//       "Stage-ready focus, smooth nerves: Krio tunes your mind for peak performance—whether you’re belting out vocals or acing that presentation.",
//   },
//   {
//     title: "PLAYING",
//     image: "/lovable-uploads/lifestyle-5.jpg",
//     headline: "Play All Day",
//     description:
//       "From backyard games to board nights, Krio fuels endless fun without the crash. Its smooth taste keeps everyone coming back for more.",
//   },
//   {
//     title: "WORKING",
//     image: "/lovable-uploads/lifestyle-6.jpg",
//     headline: "Refresh & Recharge",
//     description:
//       "Stay sharp and energized through long workdays with Krio’s smooth cacao-powered boost—deliciously refreshing and crash-free.",
//   },
// ];

// const slideVariants = {
//   enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 100 : -100 }),
//   center: { opacity: 1, x: 0 },
//   exit: (dir: number) => ({ opacity: 0, x: dir < 0 ? 100 : -100 }),
// };

// const LifestyleSection: React.FC = () => {
//   const [index, setIndex] = useState(0);
//   const [direction, setDirection] = useState(0);

//   const goTo = (newIndex: number) => {
//     setDirection(newIndex > index ? 1 : -1);
//     setIndex(newIndex);
//   };

//   const current = activities[index];

//   return (
//     <section className="bg-[#ce4e28] py-20 md:py-32">
//       <div className="container mx-auto text-white text-center">
//         <h2 className="text-3xl font-bold">Your Everyday Energy Drink</h2>
//         <p className="mt-2 text-xl">#Create, Hustle & Achieve Greatness</p>

//         {/* nav pills */}
//         <div className="mt-6 flex flex-wrap justify-center gap-6">
//           {activities.map((act, i) => (
//             <button
//               key={act.title}
//               onClick={() => goTo(i)}
//               className={`uppercase font-semibold pb-1 transition ${
//                 i === index
//                   ? "text-white border-b-2 border-white"
//                   : "text-white/70 hover:text-white"
//               }`}
//             >
//               {act.title}
//             </button>
//           ))}
//         </div>

//         {/* carousel panel */}
//         <div className="mt-12 bg-white rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row">
//           <AnimatePresence initial={false} custom={direction}>
//             <motion.img
//               key={current.title + "-img"}
//               src={current.image}
//               alt={current.title}
//               className="w-full md:w-1/2 h-64 md:h-auto object-cover"
//               custom={direction}
//               variants={slideVariants}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               transition={{ duration: 0.5 }}
//             />
//           </AnimatePresence>

//           <AnimatePresence initial={false} custom={direction}>
//             <motion.div
//               key={current.title + "-txt"}
//               className="p-8 md:p-12 text-left"
//               custom={direction}
//               variants={slideVariants}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               transition={{ duration: 0.5 }}
//             >
//               <h3 className="text-2xl font-bold text-[#ce4e28]">
//                 {current.headline}
//               </h3>
//               <p className="mt-4 text-gray-700">{current.description}</p>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default LifestyleSection;

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// type Activity = {
//   title: string;
//   image: string;
//   headline: string;
//   description: string;
// };

// const activities: Activity[] = [
//   {
//     title: "GAMING",
//     image: "/lovable-uploads/lifestyle-1.jpg",
//     headline: "Dominate the Leaderboard",
//     description:
//       "Keep your reflexes razor-sharp during marathon sessions. Krio’s blend of natural nootropics delivers sustained focus so you never miss a frame or lag spike.",
//   },
//   {
//     title: "WORKING OUT",
//     image: "/lovable-uploads/lifestyle-2.jpg",
//     headline: "Power Your Workout",
//     description:
//       "Whether it’s cardio or lifting, Krio gives you that clean energy lift—no jitters, just pure drive to push one rep further.",
//   },
//   {
//     title: "PARTYING",
//     image: "/lovable-uploads/lifestyle-3.jpg",
//     headline: "Keep the Vibes Going",
//     description:
//       "When the music’s pumping, Krio keeps you in the groove—flavorful, social-ready, and crash-free so the night never stops.",
//   },
//   {
//     title: "PERFORMING",
//     image: "/lovable-uploads/lifestyle-4.jpg",
//     headline: "Hit Every Note",
//     description:
//       "Stage-ready focus, smooth nerves: Krio tunes your mind for peak performance—whether you’re belting out vocals or acing that presentation.",
//   },
//   {
//     title: "PLAYING",
//     image: "/lovable-uploads/lifestyle-5.jpg",
//     headline: "Play All Day",
//     description:
//       "From backyard games to board nights, Krio fuels endless fun without the crash. Its smooth taste keeps everyone coming back for more.",
//   },
//   {
//     title: "WORKING",
//     image: "/lovable-uploads/lifestyle-6.jpg",
//     headline: "Refresh & Recharge",
//     description:
//       "Stay sharp and energized through long workdays with Krio’s smooth cacao-powered boost—deliciously refreshing and crash-free.",
//   },
// ];

// const slideVariants = {
//   enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 100 : -100 }),
//   center: { opacity: 1, x: 0 },
//   exit: (dir: number) => ({ opacity: 0, x: dir < 0 ? 100 : -100 }),
// };

// const LifestyleSection: React.FC = () => {
//   const [index, setIndex] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const total = activities.length;

//   // autoplay every 4 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setDirection(1);
//       setIndex((i) => (i + 1) % total);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [total]);

//   const goTo = (newIndex: number) => {
//     setDirection(newIndex > index ? 1 : -1);
//     setIndex(newIndex);
//   };

//   const current = activities[index];

//   return (
//     <section className="bg-[#ce4e28] py-20 md:py-32">
//       <div className="container mx-auto text-white text-center">
//         <h2 className="text-3xl font-bold">Your Everyday Energy Drink</h2>
//         <p className="mt-2 text-xl">#Create, Hustle & Achieve Greatness</p>

//         {/* nav pills */}
//         <div className="mt-6 flex flex-wrap justify-center gap-6">
//           {activities.map((act, i) => (
//             <button
//               key={act.title}
//               onClick={() => goTo(i)}
//               className={`uppercase font-semibold pb-1 transition ${
//                 i === index
//                   ? "text-white border-b-2 border-white"
//                   : "text-white/70 hover:text-white"
//               }`}
//             >
//               {act.title}
//             </button>
//           ))}
//         </div>

//         {/* carousel panel */}
//         <div className="mt-12 bg-white rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row">
//           <AnimatePresence initial={false} custom={direction}>
//             <motion.img
//               key={current.title + "-img"}
//               src={current.image}
//               alt={current.title}
//               className="w-full md:w-1/2 h-64 md:h-auto object-cover"
//               custom={direction}
//               variants={slideVariants}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               transition={{ duration: 0. }}
//             />
//           </AnimatePresence>

//           <AnimatePresence initial={false} custom={direction}>
//             <motion.div
//               key={current.title + "-txt"}
//               className="p-8 md:p-12 text-left"
//               custom={direction}
//               variants={slideVariants}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               transition={{ duration: 0.5 }}
//             >
//               <h3 className="text-2xl font-bold text-[#ce4e28]">
//                 {current.headline}
//               </h3>
//               <p className="mt-4 text-gray-700">{current.description}</p>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default LifestyleSection;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { burstIn, slideInBottom } from "@/utils/animations";

type Activity = {
  title: string;
  image: string;
  headline: string;
  description: string;
};

const activities: Activity[] = [
  {
    title: "GAMING",
    image: "/lovable-uploads/lifestyle-1.jpg",
    headline: "Dominate the field",
    description:
      "Keep your reflexes razor-sharp during marathon sessions. Krio’s blend of natural nootropics delivers sustained focus so you never miss a frame or lag spike.",
  },
  {
    title: "WORKING OUT",
    image: "/lovable-uploads/lifestyle-2.jpg",
    headline: "Power Your Workout",
    description:
      "Whether it’s cardio or lifting, Krio gives you that clean energy lift—no jitters, just pure drive to push one rep further.",
  },
  {
    title: "PARTYING",
    image: "/lovable-uploads/lifestyle-3.jpg",
    headline: "Keep the Vibes Going",
    description:
      "When the music’s pumping, Krio keeps you in the groove—flavorful, social-ready, and crash-free so the night never stops.",
  },
  {
    title: "PERFORMING",
    image: "/lovable-uploads/lifestyle-4.jpg",
    headline: "Hit Every Note",
    description:
      "Stage-ready focus, smooth nerves: Krio tunes your mind for peak performance—whether you’re belting out vocals or acing that presentation.",
  },
  {
    title: "PLAYING",
    image: "/lovable-uploads/lifestyle-5.jpg",
    headline: "Play All Day",
    description:
      "From backyard games to board nights, Krio fuels endless fun without the crash. Its smooth taste keeps everyone coming back for more.",
  },
  {
    title: "WORKING",
    image: "/lovable-uploads/lifestyle-6.jpg",
    headline: "Refresh & Recharge",
    description:
      "Stay sharp and energized through long workdays with Krio’s smooth cacao-powered boost—deliciously refreshing and crash-free.",
  },
];

const LifestyleSection: React.FC = () => {
  const [index, setIndex] = useState(0);
  const total = activities.length;

  // auto-advance every 4s
  useEffect(() => {
    const iv = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 4000);
    return () => clearInterval(iv);
  }, [total]);

  const current = activities[index];

  return (
    <section className="bg-[#ce4e28] py-20 md:py-32 ">
      <motion.div
        variants={slideInBottom}
        initial="initial"
        whileInView={"animate"}
        transition={{ delay: 0.1 }}
        className="container mx-auto text-white text-center"
      >
        <motion.h1
          variants={slideInBottom}
          initial="initial"
          whileInView={"animate"}
          transition={{ delay: 0.2 }}
          className="text-white mb-4 uppercase  text-2xl md:text-6xl font-display leading-tight tracking-tighter"
        >
          Your Everyday Energy Drink
        </motion.h1>
        <motion.h2
          variants={slideInBottom}
          initial="initial"
          whileInView={"animate"}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-5xl text-[#f9c24d] mb-8 font-display leading-tight tracking-tighter"
        >
          #Create, Hustle & Achieve Greatness
        </motion.h2>

        {/* nav pills */}
        <motion.div
          variants={slideInBottom}
          initial="initial"
          whileInView={"animate"}
          transition={{ delay: 0.8 }}
          className="mt-6 flex flex-wrap justify-center gap-6"
        >
          {activities.map((act, i) => (
            <button
              key={act.title}
              onClick={() => setIndex(i)}
              className={`uppercase font-semibold pb-1 transition ${
                i === index
                  ? "text-[#f9c24d] border-b-2 border-[#f9c24d]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {act.title}
            </button>
          ))}
        </motion.div>

        {/* panel */}
        <motion.div
          variants={slideInBottom}
          initial="initial"
          whileInView={"animate"}
          transition={{ delay: 1.2 }}
          className="mt-6 bg-white rounded-3xl overflow-hidden shadow-lg flex flex-col md:flex-row"
        >
          {/* static swap */}
          <img
            src={current.image}
            alt={current.title}
            className="w-full md:w-1/2 h-64 md:h-auto object-cover"
          />
          <div className="p-8 md:p-16 text-left">
            <h3 className="text-5xl leading-tight tracking-tighter uppercase font-semibold text-[#ce4e28]">
              {current.headline}
            </h3>
            <p className="text-2xl font-light tracking-wide mt-4 text-black/80">
              {current.description}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default LifestyleSection;
