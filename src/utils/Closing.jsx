import Effect from "./Effect";

const Closing = () => {
  return (
    <>
      <Effect />
      <div
        className="closing"
        style={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          display: "flex",
          boxSizing: "border-box",
        }}
      >
        <img
          src="/gambar/border-slideterakhir.png"
          alt=""
          style={{
            maxWidth: "25rem",
            height: "auto",
            position: "relative",
            zIndex: "1",
          }}
        />
        <div
          style={{
            maxWidth: "25rem",
            position: "relative",
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
            position: "relative",
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
