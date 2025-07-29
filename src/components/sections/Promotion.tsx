// import React from "react";
// import { motion } from "framer-motion";
// import { slideInBottom } from "@/utils/animations";
// const Promotion: React.FC = () => {
//   return (
//     <section className="relative bg-white overflow-hidden">
//       <motion.div
//         variants={slideInBottom}
//         initial="initial"
//         whileInView="animate"
//         transition={{ delay: 0.5 }}
//         className="flex items-center justify-center text-center h-[500px]"
//       >
//         <div className="w-1/5 h-full">
//           <img
//             src="/lovable-uploads/4_brand.jpg"
//             alt="promotion"
//             className="w-full h-full"
//           />
//         </div>
//         <div className="w-1/5 h-full flex justify-end">
//           <img
//             src="/lovable-uploads/blue3.png"
//             alt="promotion"
//             className="w-full h-full object-cover"
//             style={{
//               filter: "drop-shadow(0 0 0px rgba(0, 0, 0, 0.5))",
//             }}
//           />
//         </div>
//         <div className="w-1/5 h-full">
//           <img
//             src="/lovable-uploads/5_brand.jpg"
//             alt="promotion"
//             className="w-full h-full"
//           />
//         </div>
//         <div className="w-1/5 h-full">
//           <img
//             src="/lovable-uploads/promotion4.png"
//             alt="promotion"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="w-1/5 h-full">
//           <img
//             src="/lovable-uploads/punch2.png"
//             alt="promotion"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </motion.div>
//     </section>
//   );
// };
// export default Promotion;

// import React from "react";
// import { motion } from "framer-motion";
// import { slideInBottom } from "@/utils/animations";

// const Promotion: React.FC = () => {
//   return (
//     <section className="relative bg-white overflow-hidden">
//       <motion.div
//         variants={slideInBottom}
//         initial="initial"
//         whileInView="animate"
//         transition={{ delay: 0.2 }}
//         className="flex flex-col md:flex-row items-center justify-center text-center h-auto md:h-[500px]"
//       >
//         {[
//           "/lovable-uploads/4_brand.jpg",
//           "/lovable-uploads/blue3.png",
//           "/lovable-uploads/5_brand.jpg",
//           "/lovable-uploads/promotion4.png",
//           "/lovable-uploads/punch2.png",
//         ].map((src, idx) => (
//           <div key={idx} className="w-full md:w-1/5 h-[200px] md:h-full p-2">
//             <img
//               src={src}
//               alt={`promotion-${idx}`}
//               className="w-full h-full object-cover rounded-lg shadow-md"
//               style={
//                 src.includes("blue3.png")
//                   ? {
//                       filter: "drop-shadow(0 0 0px rgba(0, 0, 0, 0.5))",
//                     }
//                   : {}
//               }
//             />
//           </div>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default Promotion;

import React from "react";
import { motion } from "framer-motion";

// Variants for the container
const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.3, // delay between each child
    },
  },
};

// Variants for each image
const imageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3, // additional custom delay if needed
      duration: 0.2,
      ease: "easeInOut",
      type: "spring",
      stiffness: 100, // spring stiffness for a bouncy effect
    },
  }),
};

const Promotion: React.FC = () => {
  const images = [
    "/lovable-uploads/4_brand.avif",
    "/lovable-uploads/blue3.png",
    "/lovable-uploads/5_brand.avif",
    "/lovable-uploads/promotion4.png",
    "/lovable-uploads/punch2.png",
  ];

  return (
    <section className="relative bg-white overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        className="flex flex-col md:flex-row items-center justify-center text-center h-auto md:h-[500px] pt-1"
      >
        {images.map((src, idx) => (
          <motion.div
            key={idx}
            variants={imageVariants}
            custom={idx}
            className="w-full md:w-1/5 h-[200px] md:h-full"
          >
            <img
              src={src}
              alt={`promotion-${idx}`}
              className="w-full h-full object-cover"
              style={
                src.includes("blue3.png")
                  ? {
                      filter: "drop-shadow(0 0 0px rgba(0, 0, 0, 0.5))",
                    }
                  : {}
              }
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Promotion;
