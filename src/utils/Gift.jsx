import { useState } from "react";
import { Button } from "react-bootstrap";
import { FaCheck, FaCopy } from "react-icons/fa";
import { motion } from "framer-motion";

const Gift = () => {
  const src = "/gambar/giftBackground.png";
  const [copy, setCopy] = useState({
    bri: false,
    bni: false,
  });
  const copyTo = (bank) => {
    const rekeningElement = document.getElementById(bank);
    const rekening = rekeningElement.innerText;
    navigator.clipboard.writeText(rekening).then(
      () => {
        setCopy((prev) => ({ ...prev, [bank]: true }));

        setTimeout(() => {
          setCopy((prev) => ({ ...prev, [bank]: false }));
        }, 1500);
      },
      (err) => {
        setCopy("Gagal menyalin no rekening");
      }
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${src})`,
      }}
    >
      <h1
        style={{
          fontFamily: "Dancing Script",
          color: "#e63946",
          fontSize: "3.5rem",
          paddingTop: "1rem",
        }}
      >
        Kirim Hadiah
      </h1>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.1,
        }}
      >
        <img
          style={{
            maxWidth: "300px",
            height: "auto",
            borderTopLeftRadius: "18px",
            borderTopRightRadius: "18px",
            borderBottomRightRadius: "18px",
            borderBottomLeftRadius: "18px",
            position: "relative",
          }}
          src="/gambar/bri-ismail.svg"
          alt="bri-ismail"
        />
        <p id="bri" style={{ display: "none" }}>
          682701013767532
        </p>
        <Button
          onClick={() => copyTo("bri")}
          style={{
            position: "absolute",
            marginLeft: "-6.5rem",
            marginTop: "9rem",
            borderTopRightRadius: "18px",
            borderTopLeftRadius: "18px",
            borderBottomRightRadius: "18px",
            borderBottomLeftRadius: "18px",
            border: "white",
            backgroundColor: "white",
            color: "black",
          }}
        >
          {copy.bri ? <FaCheck /> : <FaCopy />}
          {copy.bri ? "success" : "copy"}
        </Button>
      </motion.div>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.2,
        }}
        className="mb-5"
      >
        <img
          style={{
            maxWidth: "300px",
            height: "auto",
            borderTopLeftRadius: "18px",
            borderTopRightRadius: "18px",
            borderBottomRightRadius: "18px",
            borderBottomLeftRadius: "18px",
            position: "relative",

            lineHeight: "none",
          }}
          src="/gambar/bri-mistriasih.svg"
          alt="bni-logo"
        />
        <p id="bni" style={{ display: "none" }}>
          682801026277538
        </p>
        <Button
          onClick={() => copyTo("bni")}
          style={{
            position: "absolute",
            marginLeft: "-6.5rem",
            marginTop: "9rem",
            borderTopRightRadius: "18px",
            borderTopLeftRadius: "18px",
            borderBottomRightRadius: "18px",
            borderBottomLeftRadius: "18px",
            border: "white",
            backgroundColor: "white",
            color: "black",
          }}
        >
          {copy.bni ? <FaCheck /> : <FaCopy />}
          {copy.bni ? "success" : "copy"}
        </Button>
      </motion.div>
    </div>
  );
};

export default Gift;
