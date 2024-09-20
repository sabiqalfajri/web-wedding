import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registrasi ScrollTrigger ke dalam GSAP
gsap.registerPlugin(ScrollTrigger);

const Closing = () => {
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    const content = contentRef.current;

    // Animasi Zoom
    gsap.fromTo(
      image,
      { scale: 1 }, // Awalnya gambar memiliki ukuran normal
      {
        scale: window.innerWidth < 768 ? 3 : 2, // Zoom
        scrollTrigger: {
          trigger: image,
          start: "top center", // Mulai animasi saat bagian atas gambar mencapai tengah layar
          end: "bottom center", // Akhir animasi saat bawah gambar mencapai tengah layar
          scrub: true, // Animasi mengikuti scroll
        },
      }
    );

    // Scroll to Content
    gsap.fromTo(
      content,
      { opacity: 0, y: 50 }, // Konten mulai dengan opacity 0 dan turun 50px
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: content,
          start: "top bottom", // Mulai saat bagian atas konten mencapai bawah layar
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="content">
      <section className="image-container">
        <img
          ref={imageRef}
          src="https://via.placeholder.com/800x600" // Ganti dengan URL gambar Anda
          alt="Zoom"
          className="zoom-image"
        />
        <div className="circle-overlay"></div>
      </section>

      <section className="content-section" ref={contentRef}>
        <div className="text-content">
          <h1>Welcome to the Content Section</h1>
          <p>This is the content after the zoomed image animation.</p>
        </div>
      </section>
    </div>
  );
};

export default Closing;
