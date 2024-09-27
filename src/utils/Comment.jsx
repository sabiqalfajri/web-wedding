import React, { useEffect } from "react";
import { DiscussionEmbed, CommentCount } from "disqus-react";

const Coment = ({ url, identifier, title }) => {
  const disqusShortname = "digitalsabiqcom"; // Ganti dengan shortname Disqus Anda

  const disqusConfig = {
    url: url, // Diterima dari props
    identifier: identifier, // ID unik halaman dari props
    title: title, // Judul halaman dari props
    language: "en", // Bahasa opsional
  };
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
          <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </div>
      </div>
    </div>
  );
};
export default Coment;
