import React, { useState, useEffect } from "react";
import { storyblokEditable } from "@storyblok/react";

const PricingHeader = ({ blok }) => {
  // State for floating shapes
  const [shapes, setShapes] = useState([]);

  // Effect to generate floating shapes
  useEffect(() => {
    const colors = ["#F4C5FF", "#A8FF1A", "#EAFFBD"]; // Available colors for the shapes
    const initialShapes = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      type: Math.random() > 0.5 ? "circle" : "angle", // Random type: circle or angle
      initialX: Math.random() * 100, // Random horizontal starting position (percentage)
      initialY: Math.random() * 100, // Random vertical starting position (percentage)
      color: colors[Math.floor(Math.random() * colors.length)], // Random color
      size: Math.random() * 10 + 5, // Size between 5 and 15 pixels
      duration: Math.random() * 20 + 10, // Animation duration between 10 and 30 seconds
      delay: Math.random() * -30, // Random animation delay
    }));
    setShapes(initialShapes);
  }, []);

  // Function to parse Rich Text and apply inline styles
  const parseRichText = (richText) => {
    if (!richText || !richText.content) return null;

    return richText.content.map((node, index) => {
      if (!node.content || !Array.isArray(node.content)) {
        return null;
      }

      switch (node.type) {
        case "paragraph":
          return (
            <p key={index} style={{ marginBottom: "1rem" }}>
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
      {/* Space between the navigation bar and the Pricing Header */}
      <section
        style={{
          backgroundColor: "#002626", // Dark green background color
          height: "60px", // Height equal to the navigation bar
        }}
      ></section>

      {/* Pricing Header section */}
      <section
        className="relative bg-[#002626] min-h-[600px] flex flex-col justify-start items-center px-10 pt-20 overflow-hidden"
        style={{ position: "relative" }}
      >
        {/* Floating shapes */}
        <div
          className="absolute inset-0"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            zIndex: 1,
          }}
        >
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
                    animation: `rotate ${shape.duration * 2}s infinite linear`,
                  }}
                />
              )}
            </div>
          ))}
        </div>

        <div
          className="flex flex-row justify-between w-full"
          {...storyblokEditable(blok)}
        >
          {/* Left side: Title and Rich Text */}
          <div
            className="flex-1"
            style={{
              paddingLeft: "50px",
              zIndex: 2,
            }}
          >
            <h1
              className="mb-4"
              style={{
                fontSize: "1.5rem",
                fontFamily: "Martian Mono, monospace",
                color: "#F4C5FF",
                marginTop: "0",
              }}
            >
              {blok.titel || ""}
            </h1>

            <div
              className="w-full max-w-lg text-left"
              style={{
                fontSize: "2rem",
                fontFamily: "Martian Mono, monospace",
                color: "#FFFFFF",
                lineHeight: "40px",
              }}
            >
              {parseRichText(blok.titelslogan)}
            </div>

            <div
              className="w-full max-w-lg text-left mt-6"
              style={{
                fontSize: "1.2rem",
                fontFamily: "Martian Mono, monospace",
                color: "#EAFFBD",
                lineHeight: "30px",
              }}
            >
              {parseRichText(blok.titelinfo)}
            </div>
          </div>

          {/* Right side: Image outside the text */}
          {blok.assetUrl && (
            <div
              className="flex-1 flex justify-center items-start"
              style={{
                alignSelf: "flex-start",
                marginTop: "-50px",
              }}
            >
              <img
                src={blok.assetUrl.filename}
                alt="Afbeelding"
                style={{
                  width: "100%",
                  maxWidth: "350px",
                  objectFit: "contain",
                  position: "relative",
                  top: "1px",
                }}
              />
            </div>
          )}
        </div>

        {/* Middle Text section */}
        {blok.middleText && (
          <div
            className="w-full text-center mt-20"
            style={{
              fontSize: "1rem",
              fontFamily: "Martian Mono, monospace",
              color: "#FFFFFF",
              lineHeight: "30px",
              zIndex: 2,
            }}
          >
            {parseRichText(blok.middleText)}
          </div>
        )}
      </section>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(20px, 20px);
          }
          50% {
            transform: translate(-20px, 10px);
          }
          75% {
            transform: translate(10px, -20px);
          }
        }
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
};

export default PricingHeader;




