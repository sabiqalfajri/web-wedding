import React, { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";

const Closing = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    // Inisialisasi ScrollReveal untuk zoom
    ScrollReveal().reveal(".zoom-image", {
      scale: 3, // Mulai dengan zoom 3x
      duration: 1000, // Durasi animasi 1 detik
      easing: "ease-in-out", // Animasi smooth
      distance: "0", // Tidak ada pergerakan dari arah tertentu, hanya scale
      opacity: 0.8, // Mulai dari opacity rendah jika diperlukan
      reset: false, // Hanya animasi satu kali, tidak diulang
    });
  }, []);

  return (
    <div className="wrapper">
      <div className="image-container" ref={imageRef}>
        <img
          src="https://via.placeholder.com/800x600" // Ganti dengan URL gambar Anda
          alt="Zoom"
          className="zoom-image"
        />
      </div>
      <section className="content">
        <div className="text">Haloo brow</div>
      </section>
    </div>
  );
};

export default Closing;
