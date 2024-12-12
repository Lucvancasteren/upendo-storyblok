"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { storyblokEditable } from "@storyblok/react";

const ServicesCarousel = ({ blok }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      image: "/images/Configuration.svg",
      title: "Configuration",
      description: "Configure your system settings and preferences with ease.",
      button_text: "Learn More",
      button_link: { url: "/services/configuration" },
    },
    {
      image: "/images/Optimalisation.svg",
      title: "Optimalisation",
      description: "Boost your system’s performance to achieve better results.",
      button_text: "Get Started",
      button_link: { url: "/services/optimalisation" },
    },
    {
      image: "/images/Visualisation.svg",
      title: "Visualisation",
      description: "Visualize your data for better decision making.",
      button_text: "See Examples",
      button_link: { url: "/services/visualisation" },
    },
    {
      image: "/images/Analysis.svg",
      title: "Analysis",
      description: "Perform detailed analysis for deeper insights.",
      button_text: "Analyze Now",
      button_link: { url: "/services/analysis" },
    },
    {
      image: "/images/Training.svg",
      title: "Training",
      description: "Learn how to use our tools with in-depth training.",
      button_text: "Join Training",
      button_link: { url: "/services/training" },
    },
  ];

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
      className=" min-h-screen py-20 px-4 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Title */}
        <h2 className="text-5xl font-bold mb-20 text-transparent bg-clip-text bg-gradient-to-r from-[#EAFFBD] to-[#F4C5FF] flex items-center">
          <div className="inline-block w-10 h-10 relative mr-4">
            <Image
              src="/images/logo1.svg"
              alt="Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EAFFBD] to-[#F4C5FF]">
            {blok.title_part2}
          </span>
        </h2>

        {/* Carousel */}
        <div className="relative">
          <div className="flex items-center gap-12">
            {/* Image */}
            <div className="w-1/2 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden">
                <Image
                  src={services[currentIndex].image}
                  alt={services[currentIndex].title}
                  width={400}
                  height={300}
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
                href={services[currentIndex].button_link?.url}
                className="bg-[#F4C5FF] text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-md"
              >
                {services[currentIndex].button_text}
              </a>
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-[#A8FF1A] h-10 w-10 rounded-l-full flex items-center justify-center hover:bg-gray-100 transition-opacity"
          >
            <ChevronLeft className="w-7 h-7 text-[#003A47]" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-[#A8FF1A] h-10 w-10 rounded-r-full flex items-center justify-center hover:bg-gray-100 transition-opacity"
          >
            <ChevronRight className="w-7 h-7 text-[#003A47]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCarousel;
