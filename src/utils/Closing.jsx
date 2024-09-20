import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import _ScrollTrigger, { ScrollTrigger } from "gsap/ScrollTrigger";

// Registrasi ScrollTrigger ke dalam GSAP
gsap.registerPlugin(ScrollTrigger);

const Closing = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;

    // Animasi Zoom
    gsap.fromTo(
      ".image-container img",
      { scale: 1 }, // Awalnya gambar memiliki ukuran normal
      {
        scale: 3, // Zoom
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".image-container",
          start: "top top+=50", // Mulai animasi saat bagian atas gambar mencapai tengah layar
          end: "bottom bottom-=100", // Akhir animasi saat bawah gambar mencapai tengah layar
          scrub: true, // Animasi mengikuti scroll
          invalidateOnRefresh: true,
          onRefresh: () => ScrollTrigger.refresh(),
          markers: true,
        },
      }
    );
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
