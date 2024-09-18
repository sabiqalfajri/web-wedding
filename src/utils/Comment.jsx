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
        <div className="comment-input">
          <Comments website-id="11876" page-id="default-page-id" />
        </div>

        {/* Bagian daftar komentar yang dapat di-scroll */}
        <div className="comments-list">
          <Comments website-id="11876" page-id="default-page-id" />
        </div>
      </div>
    </div>
  );
};
export default Coment;
