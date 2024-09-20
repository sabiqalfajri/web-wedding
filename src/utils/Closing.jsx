import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Closing = () => {
  const [scrollY, setScrollY] = useState(0);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Adjust zoom based on scroll position
      const scaleValue = 1 + currentScrollY / window.innerHeight; // Adjusts zoom based on viewport height
      setZoom(scaleValue); // Continue zooming based on scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Section 1 with Zoom Effect */}
      <motion.div
        className="section"
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        animate={{
          scale: zoom, // Zoom based on scroll
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 40,
        }}
      >
        <h1 style={{ fontSize: "4rem" }}>Zoom Effect</h1>
      </motion.div>

      {/* Section 2 - Transition to next section */}
      <div
        className="section"
        style={{
          height: "100vh",
          backgroundColor: "#f4f4f4",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "4rem" }}>Next Section</h1>
      </div>
    </div>
  );
};

export default Closing;
