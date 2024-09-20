import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Closing = () => {
  const { scrollY } = useScroll();

  // Mengatur transformasi skala berdasarkan scroll
  const scale = useTransform(scrollY, [0, 300], [1, 3]); // Ubah range sesuai kebutuhan

  return (
    <div className="wrapper">
      <motion.div
        className="image-container"
        style={{
          scale, // Terapkan skala pada kontainer gambar
          originX: 0.5, // Titik asal zoom di tengah
          originY: 0.5, // Titik asal zoom di tengah
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
