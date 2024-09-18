import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import Content from "./Content";
import Journey from "./Journey";
import Gift from "./Gift";
import Confirm from "./Confirm";
import { useParams } from "react-router-dom";
import Alamat from "./Alamat";
import Surat from "./Surat";
import Coment from "./Comment";
import { motion } from "framer-motion";
import Galery from "./Galery";
import Closing from "./Closing";
import { Comments } from "@hyvor/hyvor-talk-react";

const Home = () => {
  // gambar
  const src = "/gambar/background-revisi.png";
  const srcDua = "/gambar/couple2.jpg";

  const { name } = useParams();

  const [scroll, setScroll] = useState(false);
  const contenRef = useRef(null);
  const weddingDate = new Date("2024-10-17T00:00:00");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = weddingDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const storedScrollState = localStorage.getItem("scroll");
    if (storedScrollState) {
      const parsedScrol = JSON.parse(storedScrollState);
      setScroll(parsedScrol);
    }
  }, []);

  useEffect(() => {
    localStorage.getItem("scroll", JSON.stringify(scroll));
    document.body.style.overflowY = scroll ? "auto" : "hidden";
  }, [scroll]);

  const [show, setShow] = useState(false);
  const audioRef = useRef(null);

  const handleShow = () => {
    setShow((prevShow) => {
      const newShow = !prevShow;
      if (newShow) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      return newShow;
    });
  };

  // untuk mengatur button lihat undangan
  const handleClick = () => {
    handleShow();
    setScroll(true);
    setTimeout(() => {
      if (contenRef.current) {
        window.scrollTo({
          top: contenRef.current.offsetTop,
          behavior: "smooth",
        });
      }
    }, 0);
  };

  const article = {
    id: "unique-article-id",
    url: window.location.href,
    title: "Judul Halaman",
  };

  return (
    <>
      <div
        className="first-content"
        style={{
          height: "100vh",
          overflow: "hidden",
          position: "relative",
          backgroundImage: `url(${srcDua})`,
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            flexDirection: "column",
            marginTop: "3.5rem",
          }}
        >
          <h5
            className="mb-2"
            style={{
              fontSize: "1rem",
            }}
          >
            Kepada Bapak/Ibu/Saudara/i,
            <span
              style={{
                color: "#e63946",
              }}
              className="text-red"
            >
              {" "}
              {name}
            </span>
          </h5>
          <motion.h1
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.6 },
              ease: "easeIn",
              duration: 1,
            }}
            style={{
              fontFamily: "Dancing Script",
              color: "#e63946",
              fontSize: "3rem",
            }}
          >
            Ismail & Asih
          </motion.h1>
          <h5
            className="mt-2"
            style={{
              fontSize: "1rem",
            }}
          >
            Acara kami akan dimulai dalam:
          </h5>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.6 },
              ease: "easeIn",
              duration: 1,
            }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="me-4 text-center">
              <h3
                style={{
                  fontSize: "1.2rem",
                }}
              >
                {timeLeft.days || "0"}
              </h3>
              <p
                style={{
                  fontSize: "0.8rem",
                }}
              >
                Hari
              </p>
            </div>
            <div className="me-4 text-center">
              <h3
                style={{
                  fontSize: "1.2rem",
                }}
              >
                {" "}
                {timeLeft.hours || "0"}
              </h3>
              <p
                style={{
                  fontSize: "0.8rem",
                }}
              >
                Jam
              </p>
            </div>
            <div className="me-4 text-center">
              <h3
                style={{
                  fontSize: "1.2rem",
                }}
              >
                {timeLeft.minutes || "0"}
              </h3>
              <p
                style={{
                  fontSize: "0.8rem",
                }}
              >
                Menit
              </p>
            </div>
            <div className="me-4 text-center">
              <h3
                style={{
                  fontSize: "1.2rem",
                }}
              >
                {timeLeft.seconds || "0"}{" "}
              </h3>
              <p
                style={{
                  fontSize: "0.8rem",
                }}
              >
                Detik
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.6 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <Button onClick={handleClick}>Lihat undangan</Button>
          </motion.div>
          {/* lagu yang diputar */}
          <audio ref={audioRef} loop>
            <source src="/gambar/riziky-febian.mp3" type="audio/mp3" />
          </audio>
        </div>
      </div>

      {scroll && (
        <div
          style={{
            overflow: "auto",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* konten yang ingin mendpat animasi ketika discroll */}
          <div
            ref={contenRef}
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
            }}
            className="parallax"
          ></div>
          {/* selesai konten yang ingin mendapat animasi ketika discroll */}
          <div>
            <Content show={show} handleShow={handleShow} />
            <Journey />
            <Galery />
            <Surat />
            <Alamat />
            <Gift />
            <Confirm />
            <Coment website-id="11876" page-id="page_comment" />
            <Closing />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
