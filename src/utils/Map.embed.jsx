import { Button } from "react-bootstrap";
const Map = () => {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.3489396830137!2d109.25147817411462!3d-7.426581873155667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655e99e023afb1%3A0x58606b87c5866b75!2sJl.%20Penatusan%201%20No.9%2C%20Purwokerto%20Wetan%2C%20Kec.%20Purwokerto%20Tim.%2C%20Kabupaten%20Banyumas%2C%20Jawa%20Tengah%2053111!5e0!3m2!1sid!2sid!4v1725937980981!5m2!1sid!2sid"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <Button>Lihat di Maps</Button>
    </>
  );
};
export default Map;
