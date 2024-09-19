import ParticlesComponent from "./Effect";
import React from "react";

const Closing = () => {
  return (
    <>
      <div
        className="closing"
        style={{ position: "relative", width: "100%", height: "100vh" }}
      >
        <ParticlesComponent />
        <div
          className="closing-content"
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <img
            src="/gambar/border-slideterakhir.png"
            alt=""
            style={{
              maxWidth: "25rem",
              height: "auto",
              zIndex: 1,
            }}
          />
          <div
            style={{
              maxWidth: "25rem",
              zIndex: 1,
            }}
          >
            <p
              style={{
                marginTop: "-8rem",
              }}
            >
              Menjadi suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i
              berkenan hadir dalam hari bahagia ini. Terima kasih atas segala
              ucapan, doa, dan perhatian yang diberikan
            </p>
          </div>
          <div
            style={{
              maxWidth: "20rem",
              zIndex: 1,
            }}
          >
            {" "}
            <strong>See you on your wedding day!</strong>
            <strong
              style={{
                fontSize: "1.2rem",
                fontFamily: "Dancing Script",
                marginTop: "1rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              Mail & Asih
            </strong>
          </div>
        </div>
      </div>
    </>
  );
};

export default Closing;
