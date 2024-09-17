import { Row, Col, Button } from "react-bootstrap";
import React, { useEffect } from "react";
import { Comments, CommentCount } from "@hyvor/hyvor-talk-react";

const Coment = () => {
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
      <div>
        {/* Komponen Comments untuk menampilkan komentar */}
        <Comments
          website-id="11900" // Ganti dengan ID website dari Hyvor Talk Anda
          page-id="home-page" // Ganti dengan ID unik halaman Anda
        />

        {/* Komponen CommentCount untuk menampilkan jumlah komentar */}

        <CommentCount page-id="home-page" />
      </div>
    </div>
  );
};
export default Coment;
