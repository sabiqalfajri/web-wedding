import { Row, Col, Button } from "react-bootstrap";
import React, { useEffect } from "react";
import { Comments } from "@hyvor/hyvor-talk-react";
import { CommentCount } from "@hyvor/hyvor-talk-react";
import { CommentCounts } from "@hyvor/hyvor-talk-base";

const Coment = ({ article }) => {
  useEffect(() => {
    CommentCounts.load({
      "website-id": "11900",
    });
  }, []);
  const src = "/gambar/information.png";

  return (
    <Row
      style={{
        textAlign: "center",
        boxSizing: "border-box",
        maxWidth: "100%",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        boxSizing: "border-box",
        backgroundImage: `url(${src})`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        marginBottom: "10rem",
      }}
    >
      <Col md={6} className="mx-auto">
        <h2
          style={{
            marginBottom: "2rem",
            marginTop: "2rem",
            fontFamily: "Dancing Script",
            color: "#e63946",
            fontSize: "3rem",
          }}
        >
          Ucapan
        </h2>
        <div
          className="coment-form"
          style={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "1rem 1rem 1rem 1rem",
            boxSizing: "border-box",
            width: "350px",
            height: "auto",
          }}
        >
          <Comments
            website-id={11900} // Ganti dengan ID website dari Hyvor Talk
            page-id="unique-page-1" // Ganti dengan ID unik untuk halaman ini
          />
          <div>
            <p>
              Halaman 1: <CommentCount page-id="page-1" />
            </p>
            <p>
              Halaman 2: <CommentCount page-id="page-2" />
            </p>
          </div>
        </div>
      </Col>
    </Row>
  );
};
export default Coment;
