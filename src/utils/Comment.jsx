import React, { useEffect } from "react";
import { CommentCount } from "@hyvor/hyvor-talk-react";
import { CommentCounts } from "@hyvor/hyvor-talk-base";
import { Comments } from "@hyvor/hyvor-talk-react";

const Coment = () => {
  useEffect(() => {
    CommentCounts.load({
      "website-id": "11876",
    });
  }, []);

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
      <div
        style={{
          maxWidth: "400px",
        }}
      >
        <CommentCount page-id="page_comment" />

        <Comments website-id="11876" page-id="page_comment" />
      </div>
    </div>
  );
};
export default Coment;
