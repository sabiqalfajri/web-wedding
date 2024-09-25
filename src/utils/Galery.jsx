import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import LightboxLogic from "./Lightbox";

const Galery = () => {
  const images = [
    { src: "/gambar/couple1.jpg" },
    { src: "/gambar/couple2.jpg" },
    { src: "/gambar/couple3.jpg" },
    { src: "/gambar/couple6.jpg" },
    { src: "/gambar/couple7.jpg" },
  ];
  const src = "/gambar/Galerry.png";
  const [photoIndex, setPhotoIndex] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="gallery"
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          className="div-kedua"
          style={{
            marginBottom: "-13rem",
            paddingTop: "5rem",
          }}
        >
          <h1>Galery</h1>
        </div>
        <div
          className="grid-container"
          style={{
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            paddingBottom: "5rem",
          }}
        >
          <motion.div
            className="image image-1"
            initial={{ opacity: 0, y: 100, scale: 0.2 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: 0.2,
              opacity: { duration: 0.5 },
              y: { type: "spring", stiffness: 60 },
              scale: { type: "spring", stiffness: 60 },
            }}
            onClick={() => {
              setPhotoIndex(0);
              setOpen(true);
            }}
          >
            <img
              src={images[0]?.src}
              alt=""
              style={{
                maxWidth: "250px",
                width: "100%",
                maxHeight: "200px",
                objectFit: "cover",
                paddingRight: "1rem",
              }}
            />
          </motion.div>
          <motion.div
            className="image image-2"
            initial={{ opacity: 0, y: 150, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: 0.4,
              opacity: { duration: 0.5 },
              y: { type: "spring", stiffness: 60 },
              scale: { type: "spring", stiffness: 60 },
            }}
            onClick={() => {
              setPhotoIndex(1);
              setOpen(true);
            }}
          >
            <img
              src={images[1]?.src}
              onClick={() => {
                setPhotoIndex(index);
                setOpen(true);
              }}
              alt=""
              style={{
                maxWidth: "250px",
                width: "100%",
                objectFit: "cover",
                paddingLeft: "1rem",
              }}
            />
          </motion.div>
          <motion.div
            className="image image-3"
            style={{
              position: "relative",
              gridRow: "1 / 1",
              gridColumn: "1 / 1",
            }}
            initial={{ opacity: 0, x: -100, scale: 0.2 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              delay: 0.6,
              opacity: { duration: 0.7 },
              x: { type: "spring", stiffness: 60 },
              scale: { type: "spring", stiffness: 60 },
            }}
            onClick={() => {
              setPhotoIndex(2);
              setOpen(true);
            }}
          >
            <img
              src={images[2]?.src}
              alt=""
              style={{
                maxWidth: "9rem",
                width: "100%",
                maxHeight: "150px",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
                top: "140%",
                left: "65%",
              }}
            />
          </motion.div>
          <motion.div
            className="image image-4"
            style={{
              position: "relative",
              gridRow: "1 / 1",
              zIndex: "3",
            }}
            initial={{ opacity: 0, x: 100, scale: 0.2 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              delay: 0.6,
              opacity: { duration: 0.5 },
              x: { type: "spring", stiffness: 60 },
              scale: { type: "spring", stiffness: 60 },
            }}
            onClick={() => {
              setPhotoIndex(3);
              setOpen(true);
            }}
          >
            <img
              src={images[3]?.src}
              alt=""
              style={{
                maxWidth: "8rem",
                width: "100%",
                maxHeight: "150px",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
                top: "240%",
                right: "70%",
              }}
            />
          </motion.div>
          <div
            style={{
              position: "absolute",
              backgroundColor: "#C1AB7A",
              color: "white",
              width: "320px",
              left: "10%",
              top: "62%",
              zIndex: "1",
            }}
          >
            <p
              className="text-center"
              style={{
                paddingTop: "1rem",
                paddingLeft: "4rem",
              }}
            >
              2024
            </p>
          </div>
          <motion.div
            className="image image-5"
            style={{
              zIndex: "2",
            }}
            initial={{ opacity: 0, y: -100, scale: 0.2 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: 0.2,
              opacity: { duration: 0.5 },
              y: { type: "spring", stiffness: 60 },
              scale: { type: "spring", stiffness: 60 },
            }}
            onClick={() => {
              setPhotoIndex(1);
              setOpen(true);
            }}
          >
            <img
              src={images[1]?.src}
              alt=""
              style={{
                maxWidth: "auto",
                maxHeight: "200px",
                height: "100%",
                width: "100%",
                objectFit: "cover",
                marginTop: "2rem",
                marginRight: "2rem",
              }}
            />
          </motion.div>
          <motion.div
            className="image image-6"
            style={{
              zIndex: "2",
            }}
            initial={{ opacity: 0, y: -100, scale: 0.6 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: 0.6,
              opacity: { duration: 0.5 },
              y: { type: "spring", stiffness: 60 },
              scale: { type: "spring", stiffness: 60 },
            }}
            onClick={() => {
              setPhotoIndex(4);
              setOpen(true);
            }}
          >
            <img
              src={images[4]?.src}
              alt=""
              style={{
                maxHeight: "150px",
                height: "100%",
                maxWidth: "250px",
                width: "100%",
                marginTop: "5rem",
                objectFit: "cover",
              }}
            />
          </motion.div>
        </div>
        {/* komponen lightbox */}
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
export default Galery;
