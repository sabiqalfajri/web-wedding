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
    window.open("https://maps.app.goo.gl/73iwLLPMTJBXb5qS6", "_blank");
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
          position: "relative",
        }}
      >
        <img
          src="/gambar/flower-kiri.png"
          alt=""
          style={{
            position: "absolute",
            width: "150px",
            bottom: 0,
            left: 0,
          }}
        />
        <img
          src="/gambar/flower-kanan.png"
          alt=""
          style={{
            position: "absolute",
            width: "150px",
            bottom: 0,
            right: 0,
          }}
        />
        <img
          src="/gambar/flower-top-kiri.png"
          alt=""
          style={{
            position: "absolute",
            width: "150px",
            top: 0,
            left: 0,
          }}
        />
        <img
          src="/gambar/flower-top-kanan.png"
          alt=""
          style={{
            position: "absolute",
            width: "150px",
            top: 0,
            right: 0,
          }}
        />
        <div>
          <h1
            className="mt-4"
            style={{
              fontFamily: "Dancing Script",
              color: "#e63946",
              fontSize: "3rem",
              paddingTop: "2rem",
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
          ></p>
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
                <Card.Header
                  style={{
                    border: "1px solid black",
                  }}
                >
                  Resepsi
                </Card.Header>
                <Card.Body
                  style={{
                    border: "1px solid black",
                  }}
                >
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
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    border: "1px solid black",
                  }}
                >
                  {" "}
                  <FaMapMarkerAlt style={{ fontSize: "1.5rem" }} />
                  <strong>
                    JL.Teuku Umar rt 02 rw 03 Buntu-Situmang Kec. Kroya Kab.
                    Cilacap
                  </strong>
                </Card.Footer>
              </Card>
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
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
                <Card.Header
                  style={{
                    border: "1px solid black",
                  }}
                >
                  Akad Nikah
                </Card.Header>
                <Card.Body
                  style={{
                    border: "1px solid black",
                  }}
                >
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
                      <span>10.00 - Selesai</span>
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
                    border: "1px solid black",
                  }}
                >
                  {" "}
                  <FaMapMarkerAlt style={{ fontSize: "1.5rem" }} />
                  <strong>
                    {" "}
                    Watuagung - Tambak <br /> Rumah Mempelai Wanita
                  </strong>
                </Card.Footer>
              </Card>
            </motion.div>

            {/* // untuk maps tampil */}
            <motion.div>
              {/* ini adalah bagian yang saya ingin tambahkan gambar maps */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.8273188116!2d109.2522551702977!3d-7.593765258264069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6543dc489eb731%3A0xfa4b4bf577faadfb!2sJl.%20Teuku%20Umar%20No.10%2C%20Buntu%2C%20Kec.%20Kroya%2C%20Kabupaten%20Cilacap%2C%20Jawa%20Tengah%2053282!5e0!3m2!1sid!2sid!4v1727039425700!5m2!1sid!2sid"
                width="100%"
                height="250"
                style={{
                  border: "0",
                  maxWidth: "300px",
                  border: "2px solid white",
                  marginTop: "2rem",
                  borderRadius: "15px",
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
