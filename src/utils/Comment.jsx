import { Row, Col, Button } from "react-bootstrap";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Coment = ({ url }) => {
  const { name } = useParams();

  // Membuat URL dinamis berdasarkan nama tamu
  const currentPageUrl = `https://digital.com/mail&asih/${name}`;
  const src = "/gambar/information.png";
  return (
    <div
      style={{
        textAlign: "center",
        boxSizing: "border-box",
        maxWidth: "100%",
        backgroundImage: `url(${src})`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        height: "100vh",
      }}
    >
      <div id="fb-root"></div>
      <script
        async
        defer
        crossorigin="anonymous"
        src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v20.0"
        nonce="sEGzHr1U"
      ></script>
      <div
        className="fb-comments"
        data-href={currentPageUrl}
        data-width="100%"
        data-numposts="5"
      ></div>
    </div>
  );
};
export default Coment;
