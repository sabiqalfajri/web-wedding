import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { useTransform } from "framer-motion";

const Closing = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // Mengatur offset untuk zoom
  });
  const backroundSize = useTransform(
    scrollYProgress,
    [0, 0.8],
    ["10%", "200%"]
  );
  const opacitiy = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  return (
    <div className="wrapper" ref={ref}>
      <div className="content">
        <motion.section
          className="section hero"
          style={{
            scale: backroundSize, // Zoom hingga memenuhi layar (2x)
            // originX: 0.5,
            // originY: 0.5,
          }}
        ></motion.section>
        <motion.section
          className="section gradient-purple"
          initial={{ opacitiy: 0 }}
          animate={{ opacity: scrollYProgress >= 0.8 ? 1 : 0 }}
        >
          section 2
        </motion.section>
        <section className="section gradient-blue">section 3</section>
        <div className="image-container">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Closing;
