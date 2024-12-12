"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { storyblokEditable } from "@storyblok/react";

const HomeCarousel = ({ blok }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const services = blok?.services || [];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + services.length) % services.length
    );
  };

  if (services.length === 0) {
    return <div>No services found</div>;
  }

  return (
    <div
      {...storyblokEditable(blok)}
      className="bg-[#1a1a1a] min-h-screen py-20 px-4 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0)_100%)]" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_40px,rgba(255,255,255,0.03)_40px,rgba(255,255,255,0.03)_41px)]" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Title */}
        <h2 className="text-5xl font-bold mb-20">
          <span className="text-[#e6e6a3]">{blok.title_part1}</span>
          {""}
          <span className="text-[#e9b3c4]">{blok.title_part2}</span>
        </h2>

        {/* Carousel */}
        <div className="relative">
          <div className="flex items-center gap-12">
            {/* Image */}
            <div className="w-1/2 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-[#e6e6a3] opacity-10 rounded-3xl" />
                <Image
                  src={services[currentIndex].image.filename}
                  alt={services[currentIndex].title}
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-1/2 text-white">
              <h3 className="text-4xl font-semibold mb-6">
                {services[currentIndex].title}
              </h3>
              <p className="text-lg mb-8 text-gray-300">
                {services[currentIndex].description}
              </p>
              <a
                href={services[currentIndex].button_link.url}
                className="bg-[#e9b3c4] text-black px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors"
              >
                {services[currentIndex].button_text}
              </a>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-[#e6e6a3] bg-opacity-20 p-3 rounded-full hover:bg-opacity-30 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-[#e6e6a3]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-[#e6e6a3] bg-opacity-20 p-3 rounded-full hover:bg-opacity-30 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-[#e6e6a3]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCarousel;
