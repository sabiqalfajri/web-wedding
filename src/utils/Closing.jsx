import Effect from "./Effect";

const Closing = () => {
  return (
    <>
      <div className="closing-container">
        <Effect />
        <div
          className="closing-content"
          style={{
            position: "relative",
            zIndex: 1, // Content should be above the particles
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            textAlign: "center",
          }}
        >
          <img
            src="/gambar/border-slideterakhir.png"
            alt=""
            style={{
              maxWidth: "25rem",
              height: "auto",
              zIndex: 2,
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
