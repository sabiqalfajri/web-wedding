// import React, { useEffect } from "react";
// import Closing from "./Closing";

// const SnowfallEffect = () => {
//   useEffect(() => {
//     const container = document.querySelectorAll(".container");

//     if (container && window.snowFall) {
//       window.snowFall.snow(container, {
//         round: true,
//         minsize: 20,
//         maxsize: 30,
//         shadow: true,
//         maxSpeed: 2,
//         flakeCount: 100,
//       });
//     } else {
//       console.log("snowfall tidak ditemukan");
//     }
//   }, []);
//   const src = "/gambar/sliderpenutup.png";

//   return (
//     <div
//       className="container"
//       style={{
//         position: "relative",
//         height: "100vh",
//         zIndex: 1,
//         backgroundImage: `url(${src})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <Closing />
//     </div>
//   );
// };

// export default SnowfallEffect;
