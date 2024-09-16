import { DiscussionEmbed, CommentCount } from "disqus-react";
import { Row, Col, Button } from "react-bootstrap";
import React, { useEffect } from "react";
import { useState } from "react";
import HyvorTalkComments from "./hyvorTalk";

const Coment = ({ article }) => {
  const disqusShortname = "wedding-zbuegcb3d0";
  const disqusConfig = {
    url: article.url,
    identifier: article.id,
    title: article.title,
    language: "id",
  };
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
          <HyvorTalkComments />
        </div>
      </Col>
    </Row>
  );
};
export default Coment;
