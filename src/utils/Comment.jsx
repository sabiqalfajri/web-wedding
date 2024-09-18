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
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
        }}
      >
        <div
          className="comment-input"
          style={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}
        >
          <Comments website-id="11876" page-id="default-page-id" />
        </div>
      </div>
    </div>
  );
};
export default Coment;
