import { Row, Col, Button } from "react-bootstrap";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Coment = ({ url }) => {
  const { name } = useParams();

  // Membuat URL dinamis berdasarkan nama tamu

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
    ></div>
  );
};
export default Coment;
