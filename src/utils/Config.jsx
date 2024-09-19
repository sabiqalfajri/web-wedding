import React, { useEffect } from "react";
import Closing from "./Closing";

const SnowfallEffect = () => {
  useEffect(() => {
    const container = document.querySelectorAll(".container");

    if (container && window.snowFall) {
      window.snowFall.snow(container, {
        round: true,
        minsize: 17,
        maxsize: 7,
        shadow: true,
        flakeCount: 150,
      });
    } else {
      console.log("snowfall tidak ditemukan");
    }
  }, []);

  return (
    <div
      className="container"
      style={{ position: "relative", height: "100vh", zIndex: 2 }}
    >
      <Closing />
    </div>
  );
};

export default SnowfallEffect;
