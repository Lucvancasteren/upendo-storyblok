import React from "react";

const RotatingImages = ({ blok }) => {
  const images = [blok.afbeelding1, blok.afbeelding2, blok.afbeelding3];

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-[150px] flex justify-center items-center">
        Geen afbeeldingen beschikbaar
      </div>
    );
  }

  return (
    <div className="w-full h-[100px] sm:h-[150px] md:h-[200px] lg:h-[250px] xl:h-[300px] overflow-hidden">
      <div className="flex animate-move-line md:animate-move-line-slow lg:animate-move-line-fast">
        {images.map((image, index) => (
          <img
            key={`original-${index}`}
            src={image?.filename || ""}
            alt={`Afbeelding ${index + 1}`}
            className="h-full w-auto object-cover"
          />
        ))}
        {images.map((image, index) => (
          <img
            key={`clone-${index}`}
            src={image?.filename || ""}
            alt={`Afbeelding ${index + 1}`}
            className="h-full w-auto object-cover"
          />
        ))}
        {images.map((image, index) => (
          <img
            key={`clone-2-${index}`}
            src={image?.filename || ""}
            alt={`Afbeelding ${index + 1}`}
            className="h-full w-auto object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default RotatingImages;
