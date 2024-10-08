import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { motion } from "framer-motion";

const Confirm = () => {
  const [confirmation, setConfirmation] = useState("");
  const [nama, setNama] = useState("");
  const [jumlah, setJumlah] = useState("");

  const handleLink = () => {
    // prosses whatsapp
    let message = `Halo, Saya ${nama}.\n`;

    // jika user klik maaf saya tidak bisa hadir tampilkan code dibawah
    if (confirmation === "Maaf, saya tidak bisa hadir") {
      message +=
        "Dengan berat hati saya tidak dapat menghadiri acara pernikahan. Terimakasih";
    } else {
      message += `Ingin konfirmasi kehadiran bahwa saya akan datang ke acara pernikahan bersama ${jumlah} orang. Terimakasih`;
    }
    const encode = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6283103882464?text=${encode}`;

    window.open(whatsappUrl, "_blank");
  };

  const src = "/gambar/background-confirmation.webp";
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          paddingBottom: "2rem",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1
          style={{
            fontFamily: "Dancing Script",
            color: "#e63946",
            fontSize: "2.7rem",
            paddingTop: "4rem",
          }}
        ></h1>
        <p
          className="mt-3"
          style={{
            fontSize: "0.8rem",
            paddingTop: "3rem",
          }}
        >
          Isi form ini untuk melakukan konfirmasi kehadiran
        </p>
        <motion.div
          initial={{ scale: 0.4, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
            delay: 0.2,
          }}
          viewport={{ once: true }}
          className="d-flex justify-content-center mb-5"
        >
          <Form
            className="form-confirm"
            style={{
              width: "300px",
              padding: "1.5rem 1.5rem 1.5rem 1.5rem",
            }}
          >
            <Form.Group>
              <Form.Label className="form-label text-start w-100" for="nama">
                Nama
              </Form.Label>
              <Form.Control
                type="text"
                className="form-control"
                id="nama"
                name="nama"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label
                className="ms-0 form-label text-start w-100"
                for="nama"
              >
                Jumlah
              </Form.Label>
              <Form.Control
                type="number"
                className="form-control"
                id="number"
                name="nama"
                value={jumlah}
                onChange={(e) => setJumlah(e.target.value)}
                required
                min={0}
                max={5}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="text-start w-100">Kehadiran</Form.Label>
              <Form.Select
                value={confirmation}
                onChange={(e) => setConfirmation(e.target.value)}
                required
              >
                <option value="" disabled>
                  Pilih Konfirmasi
                </option>
                <option value="Hadir">hadir</option>
                <option value="Maaf, saya tidak bisa hadir">
                  Maaf, saya tidak bisa hadir
                </option>
              </Form.Select>
            </Form.Group>
            <div className="mt-3">
              <Button
                type="submit"
                onClick={handleLink}
                style={{
                  border: "white",
                  backgroundColor: "#25d366",
                  color: "black",
                }}
              >
                Konfirmasi via Whatsapp
              </Button>
            </div>
          </Form>
        </motion.div>
      </div>
    </>
  );
};
export default Confirm;
