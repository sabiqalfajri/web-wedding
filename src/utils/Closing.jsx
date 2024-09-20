import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const Closing = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 0"], // Mengatur offset untuk zoom
  });

  return (
    <div className="wrapper" ref={ref}>
      <motion.div
        className="image-container"
        style={{
          scale: scrollYProgress, // Gunakan scrollYProgress langsung
          opacity: scrollYProgress,
          originX: 0.5,
          originY: 0.5,
        }}
      >
        <img
          src="https://via.placeholder.com/800x600" // Ganti dengan URL gambar Anda
          alt="Zoom"
          className="zoom-image"
        />
      </motion.div>
      <section className="content">
        <div className="text">Haloo brow</div>
      </section>
    </div>
  );
};

export default Closing;
