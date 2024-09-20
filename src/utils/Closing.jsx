import React from "react";

const Closing = () => {
  const src = "/gambar/sliderpenutup.png";
  return (
    <>
      <div
        className="closing"
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <img
          src="/gambar/border-slideterakhir.png"
          alt=""
          style={{
            maxWidth: "25rem",
            height: "auto",
            zIndex: 3,
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
              color: "white",
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
            color: "white",
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
    </>
  );
};

export default Closing;
