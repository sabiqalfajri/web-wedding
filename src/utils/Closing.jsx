import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { useTransform } from "framer-motion";

const Closing = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center center", "end start"], // Mengatur offset untuk zoom
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 400]);

  return (
    <div className="wrapper">
      <div className="content">
        <section className="section hero">
          <div
            style={{
              marginTop: "2.5rem",
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
            <div>
              <p
                style={{
                  fontSize: "1rem",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                }}
              >
                Menjadi suatu kebahagiaan bagi kami jika berkenan datang ke
                acara pernikahan kami
              </p>
            </div>
          </div>
          <motion.img
            src="/gambar/floral.svg"
            alt=""
            style={{
              maxWidth: "10rem",
              height: "auto",
              position: "absolute",
              bottom: -10,
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
        </section>
      </div>
    </div>
  );
};

export default Closing;
