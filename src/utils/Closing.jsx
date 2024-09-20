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
          scale: scrollYProgress.to([0, 1], [1, 2]), // Zoom hingga memenuhi layar
          opacity: scrollYProgress.to([0, 1], [1, 0]), // Opacity dari 1 ke 0
          originX: 0.5,
          originY: 0.5,
        }}
      >
        <img
          src="/gambar/border-slideterakhir.png" // Ganti dengan URL gambar Anda
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
