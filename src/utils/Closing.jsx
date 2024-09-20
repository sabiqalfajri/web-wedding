import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Closing = () => {
  useEffect(() => {
    gsap.to("#parent #gambar", {
      scale: 200,
      duration: 2,
      stagger: 0.25,
      scrollTrigger: {
        trigger: "#parent",
        pin: true,
        end: `+=${window.innerHeight * 1.5}`,
        scrub: 3,
      },
    });
  }, []);
  useEffect(() => {
    // Memuat script snowfall dari public folder
    const script = document.createElement("script");
    script.src = "/snowfall.min.js";
    script.async = true;
    document.body.appendChild(script);

    // Menjalankan efek snowfall setelah script dimuat
    script.onload = () => {
      window.snowFall.snow(document.body, {
        flakeCount: 120,
        maxSpeed: 5,
        minSize: 2,
        maxSize: 5,
        zIndex: 0,
      });
    };
    return () => {
      const snowflakes = document.querySelectorAll(".snowfall-flakes");
      snowflakes.forEach((flake) => flake.remove());
      document.body.removeChild(script);
    };
  }, []);
  const src = "/gambar/sliderpenutup.png";
  return (
    <>
      <div
        className="closing"
        id="parent"
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <img
          id="gambar"
          src="/gambar/border-slideterakhir.png"
          alt=""
          style={{
            maxWidth: "75%",
            height: "auto",
            zIndex: 3,
          }}
        />
        <div
          style={{
            maxWidth: "25rem",
            zIndex: 1,
          }}
        >
          <p
            style={{
              marginTop: "-8rem",
              color: "white",
            }}
          >
            Menjadi suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i
            berkenan hadir dalam hari bahagia ini. Terima kasih atas segala
            ucapan, doa, dan perhatian yang diberikan
          </p>
        </div>
        <div
          style={{
            maxWidth: "20rem",
            color: "white",
            zIndex: 1,
          }}
        >
          {" "}
          <strong>See you on your wedding day!</strong>
          <strong
            style={{
              fontSize: "1.2rem",
              fontFamily: "Dancing Script",
              marginTop: "1rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            Mail & Asih
          </strong>
        </div>
      </div>
    </>
  );
};

export default Closing;
