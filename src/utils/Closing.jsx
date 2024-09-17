const Closing = () => {
  return (
    <>
      <div
        className="closing"
        style={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <img
          src="/gambar/border-slideterakhir.png"
          alt=""
          style={{
            maxWidth: "30rem",
          }}
        />
        <div
          style={{
            paddingRight: "2rem",
            paddingLeft: "2rem",
          }}
        >
          <p
            style={{
              marginTop: "1rem",
            }}
          >
            Menjadi suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i
            berkenan hadir dalam hari bahagia ini. Terima kasih atas segala
            ucapan, doa, dan perhatian yang diberikan
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingBottom: "1.5rem",
            }}
          >
            <strong
              style={{
                fontSize: "1.5rem",
              }}
            >
              See you on your wedding day!
            </strong>
            <strong
              style={{
                fontSize: "2rem",
                fontFamily: "Dancing Script",
                marginTop: "1rem",
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
