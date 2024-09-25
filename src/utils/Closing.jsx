import React, { useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { useTransform } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect } from "react";
import { useSpring } from "framer-motion";

const Closing = () => {
  const ref = useRef(null);
  const { scrollYProgress, scrollXProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // Mengatur offset untuk zoom
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [0, 800]);
  const translateX = useTransform(scrollYProgress, [0, 1], [0, -500]);

  const smoothScroll = useSpring(translateY, {
    stiffness: 50,
    damping: 20,
  });
  const smoothScrollAwan = useSpring(translateX, {
    stiffness: 50,
    damping: 20,
  });

  // efek typing
  const text = "See you on our wedding day!";
  const [displayedText, setDisplayedText] = useState("");
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;

    const simulateTyping = () => {
      const typingInterval = setInterval(() => {
        setDisplayedText(text.slice(0, index + 1)); // Menampilkan teks hingga index
        index += 1;

        // Ketika teks sudah selesai ditampilkan
        if (index > text.length) {
          clearInterval(typingInterval); // Hentikan interval setelah teks selesai
          setTimeout(() => {
            setIsTyping(false); // Setelah delay, set typing ke false
          }, 1000); // Tambahkan delay 1000ms sebelum reset
        }
      }, 100); // Kecepatan typing
    };
    if (isTyping) {
      simulateTyping();
    } else {
      // Mulai ulang animasi setelah beberapa detik
      const restartTyping = setTimeout(() => {
        setDisplayedText(""); // Kosongkan teks
        setIsTyping(true); // Mulai ulang efek typing
      }, 1000); // Jeda waktu 1000ms sebelum mengulang efek
      return () => clearTimeout(restartTyping); // Cleanup timeout saat unmount
    }
  }, [isTyping]);

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
                y: smoothScroll,
                transition: { duration: 0.5, ease: "easeInOut" },
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
          {/* awan */}
          <motion.div
            style={{
              position: "absolute",
              top: 160,
              right: 0,
              left: 0,
              x: smoothScrollAwan,
            }}
          >
            <Player
              src="/gambar/awan.json"
              background="transparent"
              speed={1}
              loop
              autoplay
              style={{
                height: "250px",
                width: "250px",
              }}
            />
          </motion.div>
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
              Menjadi suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i
              berkenan hadir dalam hari bahagia ini. Terimakasih atas segala
              ucapan, doa, dan perhatian yang diberikan.
            </p>
            <motion.p
              style={{
                marginTop: "1rem",
                marginBottom: "1rem",
                minHeight: "24px",
              }}
            >
              <strong>{displayedText}</strong>
            </motion.p>
            <p
              style={{
                fontSize: "2rem",
                fontFamily: "Dancing Script",
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
