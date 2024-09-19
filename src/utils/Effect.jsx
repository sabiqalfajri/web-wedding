import Particles from "react-tsparticles";
import React from "react";
import { loadFull } from "tsparticles";

const Effect = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesOptions = {
    background: {
      color: {
        value: "#f5f5f5",
      },
    },
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.7,
      },
      size: {
        value: 5,
        random: true,
      },
      move: {
        direction: "bottom",
        enable: true,
        speed: 2,
        straight: false,
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: false,
        },
        onClick: {
          enable: false,
        },
      },
      modes: {
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
      },
    },
    detectRetina: true,
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesOptions}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0, // Pastikan salju berada di bawah elemen lain
      }}
    />
  );
};

export default Effect;
