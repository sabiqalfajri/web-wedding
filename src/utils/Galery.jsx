import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React from "react";
import { motion } from "framer-motion";

const Galery = () => {
  const src = "/gambar/Galerry.png";

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
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
          >
            <img
              src="gambar/couple1.jpg"
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
          >
            <img
              src="gambar/couple2.jpg"
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
          >
            <img
              src="gambar/couple7.jpg"
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
          >
            <img
              src="gambar/couple6.jpg"
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
          >
            <img
              src="gambar/couple2.jpg"
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
          >
            <img
              src="gambar/couple3.jpg"
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
      </div>

      {/* <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "5rem",
          marginTop: "2rem",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${src})`,
        }}
      >
        <h1
          style={{
            fontFamily: "Dancing Script",
            color: "#e63946",
            fontSize: "2.7rem",
            paddingTop: "4rem",
          }}
        >
          Galery <br />
        </h1>
        <Swiper
          style={{
            paddingTop: "2rem",
          }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={2}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".button-next",
            prevEl: ".button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container mt-5"
        >
          <SwiperSlide>
            <img
              style={{
                maxWidth: "200px",
                height: "auto",
                borderRadius: "15px",
              }}
              src="gambar/lina.jpg"
              alt="gambar-satu"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{
                maxWidth: "200px",
                height: "auto",
                borderRadius: "15px",
              }}
              src="gambar/abdulloh.jpg"
              alt="gambar/lina.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{
                maxWidth: "200px",
                height: "auto",
                borderRadius: "15px",
              }}
              src="gambar/lina.jpg"
              alt="gambar/lina.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{
                maxWidth: "200px",
                height: "auto",
                borderRadius: "15px",
              }}
              src="gambar/lina.jpg"
              alt="gambar/lina.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{
                maxWidth: "200px",
                height: "auto",
                borderRadius: "15px",
              }}
              src="gambar/lina.jpg"
              alt="gambar/lina.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{
                maxWidth: "200px",
                height: "auto",
                borderRadius: "15px",
              }}
              src="gambar/lina.jpg"
              alt="gambar/lina.jpg"
            />
          </SwiperSlide>
          <div
            className="slider-controller"
            style={{
              marginTop: "1rem",
              display: "flex",
              justifyContent: "center",
              gap: "3rem",
              marginLeft: "1rem",
            }}
          >
            <div className="button-prev slider-arrow">
              <FaArrowCircleLeft size={30} />
            </div>
            <div
              className="button-next slider-arrow"
              style={{
                marginLeft: "3rem",
              }}
            >
              <FaArrowCircleRight size={30} />
            </div>
            <div
              className="swiper-pagination"
              style={{
                marginLeft: "0.5rem",
              }}
            ></div>
          </div>
        </Swiper>
      </div> */}
    </>
  );
};
export default Galery;
