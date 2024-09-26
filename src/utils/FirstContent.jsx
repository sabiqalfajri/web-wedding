import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const First = () => {
  return (
    <>
      <div
        style={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          background: "url('/gambar/first-background.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <h1>Wedding Of</h1>
        <h1>Mail & Asih</h1>
        <Player
          src="/gambar/moon.json"
          background="transparent"
          speed={1}
          loop
          autoplay
          style={{
            height: "150px",
            width: "150px",
            position: "absolute",
            top: 0,
            right: 0,
          }}
        />
        <img
          viewport={{ once: true }}
          src="/gambar/flower2-first.png"
          alt=""
          style={{
            position: "absolute",
            width: "150px",
            bottom: 0,
            right: 0,
          }}
        />
        <img
          viewport={{ once: true }}
          src="/gambar/flower2-first.png"
          alt=""
          style={{
            position: "absolute",
            width: "150px",
            bottom: 0,
            left: 0,
          }}
        />
      </div>
    </>
  );
};
export default First;
