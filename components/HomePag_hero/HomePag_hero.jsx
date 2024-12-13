import React from "react";
import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

const HomePag_hero = ({ blok }) => {
  return (
    <section
      className="relative bg-[#002626] min-h-screen flex flex-col justify-center items-start px-10 pt-20 overflow-hidden"
      {...storyblokEditable(blok)}
    >
      <div className="container mx-auto px-10 z-10">
        <div className="flex flex-col md:flex-row">
          {/* Left Section: Text */}
          <div className="flex-1 text-left">
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

            <h1
              className="text-[#A8FF1A] leading-tight mb-4"
              style={{
                fontFamily: "Area, sans-serif",
                fontWeight: "400",
                fontSize: "64px",
              }}
            >
              Visualize your <span className="text-white">data,</span> <br />
              <span className="text-white">seamlessly,</span>
            </h1>

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
            <Link href="/services" passHref>
              <button
                className="w-[180px] h-[52px] bg-[#F4C5FF] text-[#002626] font-bold rounded hover:bg-[#EAFFBD] flex justify-center items-center gap-2 px-4"
                style={{ fontFamily: "Martian Mono, monospace" }}
              >
                <span>Get started</span>
                <span className="text-[#002626]">&gt;</span>
              </button>
            </Link>
          </div>

          {/* Right Section: Main Image */}
          {blok.hero_image && (
            <div className="flex-1 flex justify-end items-start pr-10">
              <img
                src={blok.hero_image.filename}
                alt="Hero Image"
                className="object-contain"
                style={{
                  width: "100%",
                  maxWidth: "600px",
                  height: "auto",
                }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomePag_hero;
