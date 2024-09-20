import { motion } from "framer-motion";
import { FaMicrophoneAlt, FaPauseCircle } from "react-icons/fa";
import Journey from "./Journey";
import Galery from "./Galery";

const Content = ({ show, handleShow }) => {
  const src = "/gambar/revisiFramer.png";

  return (
    <>
      {/* content gambar pertama  */}
      <div
        style={{
          width: "100%",
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          height: "100vh",
        }}
      >
        <motion.img
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 3,
          }}
          style={{
            marginTop: "3.5rem",
            maxWidth: "205px",
            width: "100%",
            borderTopLeftRadius: "20rem",
            borderTopRightRadius: "20rem",
            paddingTop: "1rem",
          }}
          src="/gambar/ismail.jpg"
          alt="Calon satu"
        />

        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.2 },
            ease: "easeIn",
            duration: 1,
          }}
          className="mt-2"
        >
          Achmad Ismail
        </motion.h2>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.2 },
            ease: "easeIn",
            duration: 1,
          }}
          className="mx-auto"
          style={{
            fontSize: "0.8rem",
            maxWidth: "17rem",
            textAlign: "center",
          }}
        >
          Putra dari Bapak Sulkhani dan Ibu Rusmini <br /> Buntu - Kroya
        </motion.p>
        <div
          style={{
            paddingBottom: "2rem",
          }}
        >
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 3,
            }}
            style={{
              marginTop: "3.5rem",
              maxWidth: "205px",
              width: "100%",
              borderTopLeftRadius: "20rem",
              borderTopRightRadius: "20rem",
              paddingTop: "1rem",
            }}
            src="/gambar/mistriasih.jpg"
            alt="Calon kedua"
          />

          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="mt-2"
          >
            Mistriasih
          </motion.h2>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="mx-auto"
            style={{
              fontSize: "0.8rem",
              maxWidth: "17rem",
              textAlign: "center",
            }}
          >
            Putri dari Bapak Hadi Sugito dan Ibu Tusinem <br /> Watuagung -
            Tambak
          </motion.p>
          <div>
            <div
              className="audio-icon-wrapper"
              style={{
                width: "3rem",
                height: "3rem",
                fontSize: "2rem",
                position: "fixed",
                bottom: "2rem",
                right: "0.5rem",
                cursor: "pointer",
                opacity: "0.8",
                zIndex: 99,
              }}
            >
              <a onClick={handleShow}>
                {show ? <FaPauseCircle /> : <FaMicrophoneAlt />}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Content;
