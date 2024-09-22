import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { useTransform } from "framer-motion";

const Closing = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 0"], // Mengatur offset untuk zoom
  });
  const backroundSize = useTransform(scrollYProgress, [0, 1], ["10%", "200%"]);

  return (
    <div className="wrapper" ref={ref}>
      <div className="content">
        <motion.section
          className="section hero"
          style={{
            scale: backroundSize, // Zoom hingga memenuhi layar (2x)
            opacity: 1 - scrollYProgress, // Opacity dari 1 ke 0
            // originX: 0.5,
            // originY: 0.5,
          }}
        ></motion.section>
        <section className="section gradient-purple">section 2</section>
        <section className="section gradient-blue">section 3</section>
        <div className="image-container">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Closing;
