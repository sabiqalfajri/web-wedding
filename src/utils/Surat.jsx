import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const Surat = () => {
  const src = "/gambar/Paper.webp";

  const text =
    "Dan diantara tanda tanda kekuasaan - Nya ialah diciptakan-Nya untukmu pasangan hidup dari jenismu sendiri, agar kamu mendapat ketenangan hati dan dijadikan-Nya kasih sayang diantara kamu, sesungguhnya yang demikian menjadi tanda-tanda kebesaran-Nya bagi orang-orang yang berfikir.";

  const [displayedText, setDisplayedText] = useState("");
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  const simulateTyping = () => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index += 1;
      if (index >= text.length) clearInterval(typingInterval);
    }, 50);
  };
  const isInViewport = (element) => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  const handleScroll = () => {
    if (ref.current && isInViewport(ref.current) && !hasAnimated) {
      simulateTyping();
      setHasAnimated(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasAnimated]);

  return (
    <>
      <motion.div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <div
          ref={ref}
          style={{
            paddingLeft: "3.5rem",
            paddingRight: "3.5rem",
          }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="surat-teks"
            style={{
              textAlign: "justify",
              animation: "blink-caret 0.75s step-end infinite",
              whiteSpace: "pre-wrap",
            }}
          >
            {" "}
            {displayedText}
          </motion.p>
          <p className="surat-teks">(QS. Ar-Rum : 21)</p>
        </div>
      </motion.div>
    </>
  );
};
export default Surat;
