import React, { useState, useEffect } from "react";
import { storyblokEditable } from "@storyblok/react";

const PricingHeader = ({ blok }) => {
  const [shapes, setShapes] = useState([]);
  const [paddingLeft, setPaddingLeft] = useState(50); // Verhoog de standaard padding

  useEffect(() => {
    const updatePadding = () => {
      if (window.innerWidth >= 1600) {
        setPaddingLeft(160); // Meer padding voor brede schermen
      } else {
        setPaddingLeft(50); // Standaard padding
      }
    };

    updatePadding();
    window.addEventListener("resize", updatePadding);
    return () => window.removeEventListener("resize", updatePadding);
  }, []);

  // useEffect(() => {
  //   const colors = ["#F4C5FF", "#A8FF1A", "#EAFFBD"];
  //   const initialShapes = Array.from({ length: 15 }, (_, i) => ({
  //     id: i,
  //     type: Math.random() > 0.5 ? "circle" : "angle",
  //     initialX: Math.random() * 100,
  //     initialY: Math.random() * 100,
  //     color: colors[Math.floor(Math.random() * colors.length)],
  //     size: Math.random() * 10 + 5,
  //     duration: Math.random() * 20 + 10,
  //     delay: Math.random() * -30,
  //   }));
  //   setShapes(initialShapes);
  // }, []);

  const parseRichText = (richText) => {
    if (!richText || !richText.content) return null;

    return richText.content.map((node, index) => {
      if (!node.content || !Array.isArray(node.content)) return null;

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
      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
            100% {
              transform: translateY(0px);
            }
          }
        `}
      </style>

      <section className="bg-[#002626] h-[60px] hidden sm:block"></section>

      <section className="relative bg-[#002626] min-h-[600px] flex flex-col justify-start items-center px-10 pt-20 overflow-hidden">
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

        <div
          className="content-wrapper flex flex-col md:flex-row justify-between w-full"
          {...storyblokEditable(blok)}
        >
          <section className="relative">
            <div
              className="flex-1 z-2 relative top-[-40px] sm:top-0"
              style={{
                paddingLeft: `${paddingLeft}px`, // Verhoogde padding
              }}
            >
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

          {blok.assetUrl && (
            <div className="flex-1 flex justify-center items-start md:items-end mt-6 md:mt-0 pl-48">
              <img
                src={blok.assetUrl.filename}
                alt="Afbeelding"
                className="w-full max-w-[400px] object-contain relative top-[-40px]"
              />
            </div>
          )}
        </div>

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

 



 
