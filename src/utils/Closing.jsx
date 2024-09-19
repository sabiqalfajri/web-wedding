const Closing = () => {
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
          height: "100vh",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <div
          className="snnow"
          style={{
            zIndex: 1,
          }}
        ></div>
        <img
          src="/gambar/border-slideterakhir.png"
          alt=""
          style={{
            maxWidth: "25rem",
            height: "auto",
          }}
        />
        <div
          style={{
            maxWidth: "25rem",
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
