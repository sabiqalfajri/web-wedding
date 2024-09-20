import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import React from "react";
const LightboxLogic = ({
  images,
  photoIndex,
  setPhotoIndex,
  open,
  setOpen,
}) => {
  const slides = images.map((image) => ({ src: image.src }));
  if (typeof global === "undefined") {
    window.global = window;
  }
  return (
    <>
      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
          index={photoIndex}
          on={{
            view: ({ index }) => setPhotoIndex(index),
          }}
        />
      )}
    </>
  );
};
export default LightboxLogic;
