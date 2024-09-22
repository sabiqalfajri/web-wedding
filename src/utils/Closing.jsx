import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { useTransform } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";

const Closing = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center center", "end start"], // Mengatur offset untuk zoom
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 700]);

  return (
    <div className="wrapper">
      <div className="content">
        <section className="section hero">
          <div
            style={{
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <motion.img
              ref={ref}
              src="/gambar/border-slideterakhir.png"
              alt=""
              style={{
                maxWidth: "22rem",
                y: translateY,
              }}
            />
          </div>
          <motion.img
            src="/gambar/floral.svg"
            alt=""
            style={{
              maxWidth: "10rem",
              height: "auto",
              position: "absolute",
              bottom: 0,
              right: 0,
            }}
            animate={{
              rotate: [0, 5, -5, 0], // Goyang kanan kiri
              filter: [
                "drop-shadow(0 0 10px rgba(255, 255, 0, 0.5))",
                "drop-shadow(0 0 20px rgba(255, 255, 0, 1))",
                "drop-shadow(0 0 10px rgba(255, 255, 0, 0.5))",
              ], // Efek glowing
            }}
            transition={{
              duration: 4, // Durasi animasi
              ease: "easeInOut",
              repeat: Infinity, // Ulang animasi terus-menerus
              rotate: { duration: 2, ease: "easeInOut", repeat: Infinity }, // Durasi dan pengulangan goyang
            }}
          />
          <motion.img
            src="/gambar/floral.svg"
            alt=""
            style={{
              maxWidth: "10rem",
              height: "auto",
              position: "absolute",
              bottom: 0,
              left: 0,
            }}
            animate={{
              rotate: [0, 5, -5, 0], // Goyang kanan kiri
              filter: [
                "drop-shadow(0 0 10px rgba(255, 255, 0, 0.5))",
                "drop-shadow(0 0 20px rgba(255, 255, 0, 1))",
                "drop-shadow(0 0 10px rgba(255, 255, 0, 0.5))",
              ], // Efek glowing
            }}
            transition={{
              duration: 4, // Durasi animasi
              ease: "easeInOut",
              repeat: Infinity, // Ulang animasi terus-menerus
              rotate: { duration: 2, ease: "easeInOut", repeat: Infinity }, // Durasi dan pengulangan goyang
            }}
          />
        </section>
        <section
          style={{
            height: "100vh",
            width: "100%",
            background: "url('/gambar/Closing.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 2,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            position: "relative",
            textAlign: "center",
            boxSizing: "border-box",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "0.8rem",
                paddingLeft: "1rem",
                paddingRight: "1rem",
              }}
            >
              Menjadi suatu kebahagiaan bagi kami apabla Bapak/Ibu/Saudara/i
              berkenan hadir dalam hari bahagia ini. Terimakasih atas segala
              ucapan, doa, dan perhatian yang diberikan.
            </p>
            <p>
              <strong>See you on our wedding day!</strong>
            </p>
            <p
              style={{
                fontSize: "2rem",
              }}
            >
              Mail & Asih
            </p>
          </div>
          <Player
            src="/gambar/butterfly.json"
            background="transparent"
            speed={1}
            loop
            autoplay
            style={{
              height: "100px",
              width: "100px",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
          <Player
            src="/gambar/butterfly.json"
            background="transparent"
            speed={1}
            loop
            autoplay
            style={{
              height: "100px",
              width: "100px",
              position: "absolute",
              bottom: 0,
              right: 0,
            }}
          />
        </section>
      </div>
    </div>
  );
};

export default Closing;
