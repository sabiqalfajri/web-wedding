import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { useTransform } from "framer-motion";

const Closing = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center center", "end start"], // Mengatur offset untuk zoom
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div className="wrapper">
      <div className="content">
        <section className="section hero">
          <div
            style={{
              marginTop: "2.5rem",
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
        </section>
        <section
          style={{
            height: "100vh",
          }}
        ></section>
      </div>
    </div>
  );
};

export default Closing;
