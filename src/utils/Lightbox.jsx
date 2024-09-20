import Lightbox from "react-image-lightbox";
import React from "react";
import "react-image-lightbox/style.css";

const LightboxLogic = ({
  images,
  photoIndex,
  setPhotoIndex,
  open,
  setOpen,
}) => {
  console.log("Lightbox Logic Props:", { images, photoIndex, open });
  if (typeof global === "undefined") {
    window.global = window;
  }
  return (
    <>
      {open && (
        <Lightbox
          mainSrc={images[photoIndex].src}
          nextSrc={images[(photoIndex + 1) % images.length].src}
          prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
          onCloseRequest={() => setOpen(false)}
          onMoveRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </>
  );
};
export default LightboxLogic;
