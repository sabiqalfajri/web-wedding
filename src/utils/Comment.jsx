import { Row, Col, Button } from "react-bootstrap";
import React, { useEffect } from "react";
import { Comments, CommentCount } from "@hyvor/hyvor-talk-react";
import { CommentCounts } from "@hyvor/hyvor-talk-base";

const Coment = () => {
  useEffect(() => {
    CommentCounts.load({
      "website-id": "11900",
    });
  }, []);

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
        <h1>Halaman Komentar</h1>
        {/* Komponen Comments untuk menampilkan komentar */}
        <Comments
          website-id="11900" // ID website dari Hyvor Talk Anda
          page-id="page-1" // ID halaman unik yang bisa Anda tentukan sendiri
        />

        {/* Komponen CommentCount untuk menampilkan jumlah komentar */}
        <p>
          Jumlah Komentar: <CommentCount />
        </p>
      </div>
    </div>
  );
};
export default Coment;
