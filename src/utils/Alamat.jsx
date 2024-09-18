import { Button, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {
  FaCalendar,
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Alamat = () => {
  const handleClick = () => {
    // URL ke lokasi di Google Maps
    window.open("https://maps.app.goo.gl/1cFnQVNc2txyh72a8", "_blank");
  };
  const src = "/gambar/backgroundAlamat.png";
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          backgroundImage: `url(${src})`,
          paddingBottom: "3rem",
          paddingTop: "1rem",
        }}
      >
        <div>
          <h1
            className="mt-4"
            style={{
              fontFamily: "Dancing Script",
              color: "#e63946",
              fontSize: "3rem",
            }}
          >
            Informasi Acara
          </h1>

          <p
            style={{
              fontSize: "0.9rem",
              padding: "2rem",
              marginTop: "1rem",
            }}
          >
            Alamat: JL.Teuku Umar rt 02 rw 03 Buntu-Situmang Kec. Kroya Kab.
            Cilacap
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "2rem",
            }}
          >
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.3,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
            >
              <Card
                className="alamat text-center mt-2"
                style={{
                  width: "350px",
                }}
              >
                <Card.Header>Resepsi</Card.Header>
                <Card.Body>
                  <Row>
                    <Col
                      md={6}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        gap: "0.3rem",
                      }}
                    >
                      <FaClock style={{ fontSize: "1.5rem" }} />
                      <span>08.00 - Selesai</span>
                    </Col>
                    <Col
                      md={6}
                      className="mt-1"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        gap: "0.3rem",
                      }}
                    >
                      <FaCalendarAlt style={{ fontSize: "1.5rem" }} />
                      <span>Rabu, 16 Oktober 2024</span>
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Footer
                  className="text-muted footer-card"
                  style={{
                    fontSize: "0.9rem",
                  }}
                >
                  {" "}
                  <FaMapMarkerAlt style={{ fontSize: "1.5rem" }} />
                  <strong>Rumah Mempelai Pria</strong>
                </Card.Footer>
              </Card>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.5,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
            >
              <Card
                className="alamat text-center mt-2"
                style={{
                  width: "350px",
                }}
              >
                <Card.Header>Akad Nikah</Card.Header>
                <Card.Body>
                  <Row>
                    <Col
                      md={6}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        gap: "0.3rem",
                      }}
                    >
                      <FaClock style={{ fontSize: "1.5rem" }} />
                      <span>08.00 - Selesai</span>
                    </Col>
                    <Col
                      md={6}
                      className="mt-1"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        gap: "0.3rem",
                      }}
                    >
                      <FaCalendarAlt style={{ fontSize: "1.5rem" }} />
                      <span>Kamis, 17 Oktober 2024</span>
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Footer
                  className="text-muted footer-card"
                  style={{
                    fontSize: "0.9rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  <FaMapMarkerAlt style={{ fontSize: "1.5rem" }} />
                  <strong>Rumah Mempelai Wanita</strong>
                </Card.Footer>
              </Card>
            </motion.div>

            <motion.div
              initial={{ rotate: -100, opacity: 0 }} // Mulai dengan rotasi -90 derajat
              whileInView={{ rotate: 0, opacity: 1 }} // Rotasi ke posisi normal
            ></motion.div>

            {/* // untuk maps tampil */}
            <motion.div>
              {/* ini adalah bagian yang saya ingin tambahkan gambar maps */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.3489396830137!2d109.25147817411462!3d-7.426581873155667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655e99e023afb1%3A0x58606b87c5866b75!2sJl.%20Penatusan%201%20No.9%2C%20Purwokerto%20Wetan%2C%20Kec.%20Purwokerto%20Tim.%2C%20Kabupaten%20Banyumas%2C%20Jawa%20Tengah%2053111!5e0!3m2!1sid!2sid!4v1725937980981!5m2!1sid!2sid"
                width="100%"
                height="250"
                style={{
                  border: "0",
                  maxWidth: "300px",
                  border: "2px solid white",
                  marginTop: "2rem",
                }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
            <div
              style={{
                marginTop: "1rem",
              }}
            >
              <Button onClick={handleClick}>Lihat Maps</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Alamat;
