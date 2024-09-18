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
          paddingRight: "1.5rem",
          paddingLeft: "1.5rem",
        }}
      >
        <div className="comment-input">
          <Comments website-id="11876" page-id="default-page-id" />
        </div>
      </div>
    </div>
  );
};
export default Coment;
