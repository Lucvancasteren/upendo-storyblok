import React, { useState, useEffect } from "react";
import { storyblokEditable } from "@storyblok/react";

const HomePag_hero = ({ blok }) => {
  const [shapes, setShapes] = useState([]);

  useEffect(() => {
    const colors = ["#F4C5FF", "#A8FF1A", "#EAFFBD"];
    const initialShapes = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      type: Math.random() > 0.5 ? "circle" : "angle",
      initialX: Math.random() * 100,
      initialY: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 50 + 30,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * -30,
    }));
    setShapes(initialShapes);
  }, []);

  return (
    <>
      <section
        className="relative bg-[#002626] min-h-screen flex flex-col justify-center items-start px-10 pt-20 overflow-hidden"
        style={{ position: "relative" }}
        {...storyblokEditable(blok)}
      >
        {/* Floating shapes */}
        <div className="absolute inset-0 overflow-hidden">
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
                    borderLeft: `4px solid ${shape.color}`,
                    borderBottom: `4px solid ${shape.color}`,
                    opacity: 0.3,
                    animation: `rotate ${shape.duration * 2}s infinite linear`,
                  }}
                />
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row w-full max-w-[1200px] z-10">
          {/* Left Section: Text */}
          <div className="flex-1 text-left">
            {/* First Text */}
            <p
              className="text-[#F4C5FF] mb-2"
              style={{
                fontFamily: "Martian Mono, monospace",
                fontWeight: "500",
                fontSize: "32px",
              }}
            >
              Discover
            </p>

            {/* Second Text */}
            <h1
              className="text-[#A8FF1A] leading-tight mb-4"
              style={{
                fontFamily: "Arial, sans-serif",
                fontWeight: "400",
                fontSize: "64px",
              }}
            >
              Visualize your data, <br />
              seamlessly,
            </h1>

            {/* Third Text */}
            <p
              className="text-[#EAFFBD] mb-6"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: "500",
                fontSize: "32px",
              }}
            >
              Your Guide to Accessible and Impactful Data
            </p>

            {/* Button */}
            <button
              className="w-[152px] h-[52px] bg-[#F4C5FF] text-[#002626] font-bold rounded hover:bg-[#EAFFBD]"
              style={{ fontFamily: "Martian Mono, monospace" }}
            >
              Get started
            </button>
          </div>

          {/* Right Section: Image */}
          {blok.assetUrl && (
            <div className="flex-1 flex justify-center items-center">
              <div
                className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
                style={{
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)", // Custom shape
                  overflow: "hidden",
                }}
              >
                <img
                  src={blok.assetUrl.filename}
                  alt="Hero Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
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

export default HomePag_hero;
