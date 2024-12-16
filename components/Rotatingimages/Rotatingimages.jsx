import React from "react";

const RotatingImages = ({ blok }) => {
  const images = [blok.afbeelding1, blok.afbeelding2, blok.afbeelding3];

  if (!images || images.length === 0) {
    return (
      <div className="m-0 p-0 flex justify-center items-center">
        Geen afbeeldingen beschikbaar
      </div>
    );
  }

  return (
    <div className="m-0 p-0 inline-flex h-auto overflow-hidden mt-36">
      <div className="flex animate-move-line md:animate-move-line-slow lg:animate-move-line-fast">
        {images.map((image, index) => (
          <img
            key={`original-${index}`}
            src={image?.filename || ""}
            alt={`Afbeelding ${index + 1}`}
            className="h-full w-auto object-cover shrink-0"
          />
        ))}
        {images.map((image, index) => (
          <img
            key={`clone-${index}`}
            src={image?.filename || ""}
            alt={`Afbeelding ${index + 1}`}
            className="h-full w-auto object-cover shrink-0"
          />
        ))}
        {images.map((image, index) => (
          <img
            key={`clone-2-${index}`}
            src={image?.filename || ""}
            alt={`Afbeelding ${index + 1}`}
            className="h-full w-auto object-cover shrink-0"
          />
        ))}
      </div>
    </div>
  );
};

export default RotatingImages;
