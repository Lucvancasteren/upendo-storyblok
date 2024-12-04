import React, { useState, useEffect } from "react";
import { storyblokEditable } from "@storyblok/react";

const PricingHeader = ({ blok }) => {
  const [shapes, setShapes] = useState([]);

  // Generate dynamische vormen bij component-mount
  useEffect(() => {
    const colors = ["#F4C5FF", "#A8FF1A", "#EAFFBD"]; // Kleuren voor de vormen
    const initialShapes = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      type: Math.random() > 0.5 ? "circle" : "angle", // Kies willekeurig tussen cirkel of hoek
      initialX: Math.random() * 100, // Willekeurige horizontale positie
      initialY: Math.random() * 100, // Willekeurige verticale positie
      color: colors[Math.floor(Math.random() * colors.length)], // Willekeurige kleur
      size: Math.random() * 10 + 5, // Willekeurige grootte
      duration: Math.random() * 20 + 10, // Willekeurige animatieduur
      delay: Math.random() * -30, // Willekeurige animatievertraging
    }));
    setShapes(initialShapes); // Update state met de gegenereerde vormen
  }, []);

  // Parse rich text inhoud
  const parseRichText = (richText) => {
    if (!richText || !richText.content) return null;

    return richText.content.map((node, index) => {
      if (!node.content || !Array.isArray(node.content)) {
        return null;
      }

      switch (node.type) {
        case "paragraph":
          return (
            <p key={index} className="mb-4">
              {node.content.map((child, idx) => {
                if (child.marks) {
                  const colorMark = child.marks.find(
                    (mark) => mark.type === "textStyle" && mark.attrs?.color
                  );
                  if (colorMark) {
                    return (
                      <span key={idx} style={{ color: colorMark.attrs.color }}>
                        {child.text}
                      </span>
                    );
                  }
                }
                return <span key={idx}>{child.text}</span>;
              })}
            </p>
          );
        default:
          return null;
      }
    });
  };

  return (
    <>
      {/* Sectie met vaste hoogte, verborgen op mobiele apparaten */}
      <section className="bg-[#002626] h-[60px] hidden sm:block"></section>

      {/* Hoofdsectie met achtergrond en vormen */}
      <section className="relative bg-[#002626] min-h-[600px] flex flex-col justify-start items-center px-10 pt-20 overflow-hidden">
        {/* Dynamisch gegenereerde vormen */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-1">
          {shapes.map((shape) => (
            <div
              key={shape.id}
              className="absolute"
              style={{
                left: `${shape.initialX}%`,
                top: `${shape.initialY}%`,
                animation: `float ${shape.duration}s infinite ease-in-out`,
                animationDelay: `${shape.delay}s`,
              }}
            >
              {shape.type === "circle" ? (
                <div
                  className="rounded-full"
                  style={{
                    width: `${shape.size}px`,
                    height: `${shape.size}px`,
                    backgroundColor: shape.color,
                    opacity: 0.3,
                  }}
                />
              ) : (
                <div
                  style={{
                    width: `${shape.size}px`,
                    height: `${shape.size}px`,
                    borderLeft: `2px solid ${shape.color}`,
                    borderBottom: `2px solid ${shape.color}`,
                    opacity: 0.3,
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Content-wrapper met dynamische inhoud */}
        <div
          className="content-wrapper flex flex-col md:flex-row justify-between w-full"
          {...storyblokEditable(blok)}
        >
          {/* Titel en tekstsectie */}
          <section className="relative">
            <div className="flex-1 pl-2 sm:pl-5 z-2 relative top-[-40px] sm:top-0">
              <h1 className="mb-4 text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-mono text-[#F4C5FF] mt-0">
                {blok.titel || ""}
              </h1>
              <div className="w-full max-w-lg text-left text-white text-[1.5rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] leading-[30px] sm:leading-[40px] md:leading-[60px]">
                {parseRichText(blok.titelslogan)}
              </div>
              <div className="w-full max-w-lg text-left mt-6 text-[#EAFFBD] text-[1rem] sm:text-[1.5rem] md:text-[2rem] leading-[25px] sm:leading-[30px] md:leading-[35px]">
                {parseRichText(blok.titelinfo)}
              </div>
            </div>
          </section>

          {/* Afbeeldingsectie */}
          {blok.assetUrl && (
            <div className="flex-1 flex justify-center items-start md:items-end mt-6 md:mt-0">
              <img
                src={blok.assetUrl.filename}
                alt="Afbeelding"
                className="w-full max-w-[400px] object-contain relative top-[-40px]"
              />
            </div>
          )}
        </div>

        {/* Optionele midden-tekst sectie */}
        {blok.middleText && (
          <div className="w-full text-center mt-20 text-white text-[1rem] leading-[30px]">
            {parseRichText(blok.middleText)}
          </div>
        )}
      </section>
    </>
  );
};

export default PricingHeader;

 
