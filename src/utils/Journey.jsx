import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import { useState } from "react";
import LightboxLogic from "./Lightbox";

const Journey = () => {
  const images = [
    { src: "/gambar/couple4.jpg" },
    { src: "/gambar/couple5.jpg" },
  ];
  const [photoIndex, setPhotoIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const src = "/gambar/information.webp";
  return (
    <>
      <div
        className="journey"
        style={{
          backgroundImage: `url(${src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <div
          style={{
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            padding: "0 20px",
            margin: "0 auto",
            maxWidth: "100%",
            marginTop: "1rem",
            position: "relative",
          }}
        >
          <h1
            style={{
              fontFamily: "Dancing Script",
              color: "#e63946",
              fontSize: "4rem",
              marginTop: "1rem",
            }}
          >
            Cerita Kami
          </h1>
          <p
            style={{
              fontSize: "1rem",
            }}
          >
            Bagaimana cinta kami bersemi
          </p>
        </div>
        <Row style={{ margin: 0, padding: 0 }}>
          <Col xm={12} md={6}>
            <ul className="timeline">
              <li>
                <motion.div
                  initial={{ y: -100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.3,
                    y: { type: "spring", stiffness: 60 },
                    opacity: { duration: 0.2 },
                    ease: "easeIn",
                    duration: 1,
                  }}
                  viewport={{ once: true }}
                  className="timeline-image"
                  style={{
                    marginLeft: "1.3rem",
                    backgroundImage: `url(${images[0]?.src})`,
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setPhotoIndex(0);
                    setOpen(true);
                  }}
                ></motion.div>
                <motion.div
                  initial={{ y: -100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.2,
                    y: { type: "spring", stiffness: 60 },
                    opacity: { duration: 0.2 },
                    ease: "easeIn",
                    duration: 1,
                  }}
                  viewport={{ once: true }}
                  className="timeline-panel"
                  style={{
                    fontSize: "0.8rem",
                    width: "80%",
                    maxWidth: "15rem",
                  }}
                >
                  <div className="timeline-heading">
                    <h4>Bertemu</h4>
                    <strong style={{ marginTop: "1rem" }}>April 2023</strong>
                  </div>
                  <div
                    className="timeline-body"
                    style={{
                      width: "100%",
                    }}
                  >
                    <p className="text-justify">
                      Saat pertama kali kita bertemu, siapa sangka pertemuan ini
                      akan menjadi awal dari sebuah cerita yang begitu indah.
                    </p>
                  </div>
                </motion.div>
              </li>
              <li>
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.2,
                    y: { type: "spring", stiffness: 60 },
                    opacity: { duration: 0.2 },
                    ease: "easeIn",
                    duration: 1,
                  }}
                  viewport={{ once: true }}
                  className="timeline-image image-kedua"
                  style={{
                    marginLeft: "1.3rem",
                    backgroundImage: `url(${images[1]?.src})`,
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setPhotoIndex(1);
                    setOpen(true);
                  }}
                ></motion.div>
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.4,
                    y: { type: "spring", stiffness: 60 },
                    opacity: { duration: 0.2 },
                    ease: "easeIn",
                    duration: 1,
                  }}
                  viewport={{ once: true }}
                  className="timeline-panel"
                  style={{
                    fontSize: "0.8rem",
                    width: "80%",
                    maxWidth: "15rem",
                  }}
                >
                  <div className="timeline-heading">
                    <h4>Tunangan</h4>
                    <strong style={{ marginTop: "1rem" }}>Januari 2024</strong>
                  </div>
                  <div
                    className="timeline-body"
                    style={{
                      width: "100%",
                    }}
                  >
                    <p className="text-justify">
                      Setelah melalui momen penuh suka duka, kami memutuskan
                      untuk melangkah ketahap yang lebih serius.
                    </p>
                  </div>
                </motion.div>
              </li>
            </ul>
          </Col>
        </Row>
        <LightboxLogic
          images={images}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
          open={open}
          setOpen={setOpen}
        />
      </div>
    </>
  );
};
export default Journey;
