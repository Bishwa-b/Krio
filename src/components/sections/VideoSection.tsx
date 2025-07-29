// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { slideInBottom, slideInLeft, slideInRight } from "@/utils/animations";

// const VideoSection: React.FC = () => {
//   return (
//     <section className="py-20 md:py-10 bg-[#ce4e28] relative overflow-hidden">
//       <div className=" flex flex-col items-center">
//         {/* Video Panel */}
//         <motion.div
//           variants={slideInBottom}
//           initial="initial"
//           whileInView="animate"
//           // viewport={viewportOptions}
//           transition={{ delay: 0.5 }}
//           className="w-full overflow-hidden py-20 "
//         >
//           <video autoPlay loop muted className="w-full h-auto object-cover">
//             <source src="/lovable-uploads/krio-video.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </motion.div>

//         {/* Text & Image Panel */}
//         <motion.div
//           variants={slideInBottom}
//           initial="initial"
//           whileInView="animate"
//           // viewport={viewportOptions}
//           transition={{ delay: 0.2 }}
//           className="container w-[80%] bg-[#f9c24d] p-6 flex flex-col md:flex-row justify-evenly items-center relative rounded-[35px]"
//         >
//           <div className="flex flex-col items-start justify-center w-full md:w-1/2 ml-5">
//             <h1 className="text-4xl md:text-5xl font-display leading-tight tracking-tighter  text-[#ce4e28] mb-6">
//               #There is more to <br />
//               <span className="text-white font-bold">Cacao</span> than chocolate
//             </h1>

//             <Link
//               to="/formula"
//               className="inline-block bg-[#ce4e28] hover:bg-[#b43b20] text-white px-6 py-3 font-bold rounded shadow-md transition-colors"
//             >
//               Learn more
//             </Link>
//           </div>

//           {/* Cacao Image positioned at bottom-right */}
//           <div className="md:top-4 right-0 w-1/2">
//             <img
//               src="/lovable-uploads/cacao-image.png"
//               alt="cacao"
//               className="w-full h-auto md:object-cover md:w-[90%] "
//             />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default VideoSection;

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { slideInBottom } from "@/utils/animations";

const VideoSection: React.FC = () => {
  return (
    <section className="py-20 md:py-10 bg-[#ce4e28] relative overflow-hidden">
      <div className="flex flex-col items-center">
        {/* Video Panel */}
        <motion.div
          variants={slideInBottom}
          initial="initial"
          whileInView="animate"
          transition={{ delay: 0.5 }}
          className="w-full overflow-hidden"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-h-[100vh] object-cover"
          >
            <source src="/lovable-uploads/krio-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        {/* Text & Image Panel */}
        <motion.div
          variants={slideInBottom}
          initial="initial"
          whileInView="animate"
          transition={{ delay: 0.2 }}
          className="w-[90%] max-w-6xl bg-[#f9c24d] p-6 flex flex-col md:flex-row justify-between items-center md:mt-20 mt-8 rounded-[35px] gap-6"
        >
          {/* Text Section */}
          <div className="w-full md:w-1/2 px-2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#ce4e28] mb-6 leading-tight">
              #There is more to <br />
              <span className="text-white">Cacao</span> than chocolate
            </h1>

            <Link
              to="/formula"
              className="inline-block bg-[#ce4e28] hover:bg-[#b43b20] text-white px-6 py-3 font-bold rounded shadow-md transition-colors"
            >
              Learn more
            </Link>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/lovable-uploads/cacao-image.png"
              alt="cacao"
              className="w-[80%] md:w-full h-auto object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
