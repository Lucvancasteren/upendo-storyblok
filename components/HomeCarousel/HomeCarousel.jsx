"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { storyblokEditable } from "@storyblok/react";

const ServicesCarousel = ({ blok }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const services = [
    {
      image: "/images/Configuration.svg",
      title: "Configuration",
      description:
        "Configure your system settings and preferences with ease. This service allows you to have full control over system adjustments, ensuring optimal performance and customization.",
      button_text: "Learn More",
      button_link: { url: "/configuration" },
    },
    {
      image: "/images/Optimalisation.svg",
      title: "Optimalisation",
      description:
        "Boost your system’s performance to achieve better results. With advanced optimization techniques, your system will run faster and more efficiently.",
      button_text: "Get Started",
      button_link: { url: "/configuration" },
    },
    {
      image: "/images/Visualisation.svg",
      title: "Visualisation",
      description:
        "Visualize your data for better decision making. Our visualization tools provide insights at a glance, making data analysis more intuitive and actionable.",
      button_text: "See Examples",
      button_link: { url: "/configuration" },
    },
    {
      image: "/images/Analysis.svg",
      title: "Analysis",
      description:
        "Perform detailed analysis for deeper insights. Our analytical tools give you the power to explore your data with precision and depth.",
      button_text: "Analyze Now",
      button_link: { url: "/configuration" },
    },
    {
      image: "/images/Training.svg",
      title: "Training",
      description:
        "Learn how to use our tools with in-depth training. Our training programs ensure you have the knowledge and skills to leverage our services effectively.",
      button_text: "Join Training",
      button_link: { url: "/configuration" },
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
      <div className="max-w-6xl mx-auto relative text-center">
        {/* Title */}
        <h2 className="text-6xl font-bold mb-20 text-transparent bg-clip-text bg-gradient-to-r from-[#EAFFBD] to-[#F4C5FF] flex items-center justify-center">
          <div className="inline-block w-16 h-16 relative mr-4">
            <Image
              src="/images/logo1.svg"
              alt="Logo"
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EAFFBD] to-[#F4C5FF] font-['Martial Mono']">
            {blok.title_part2}
          </span>
        </h2>

        {/* Carousel */}
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform ease-in-out duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: "100%",
            }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0"
                style={{ width: "100%" }}
              >
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="relative w-full md:w-1/2 aspect-[4/3] rounded-3xl overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="object-cover rounded-3xl"
                    />
                  </div>
                  <div className="text-white text-center md:text-left mt-4 md:mt-0 md:w-1/2 md:pl-8">
                    <h3 className="text-[36px] font-bold font-['Martial Mono'] mb-2 text-[#EAFFBD]">
                      {service.title}
                    </h3>
                    <p className="text-[15px] font-bold font-['Area Normal'] mb-4 text-[#FEFFF8]">
                      {service.description}
                    </p>
                    <a
                      href={service.button_link?.url}
                      className="bg-[#F4C5FF] text-black text-[15px] font-bold font-['Area Normal'] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-md inline-block"
                    >
                      {service.button_text}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-20 bg-[#A8FF1A] h-10 w-10 rounded-l-full flex items-center justify-center hover:bg-gray-100 transition-opacity"
        >
          <ChevronLeft className="w-7 h-7 text-[#003A47]" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-20 bg-[#A8FF1A] h-10 w-10 rounded-r-full flex items-center justify-center hover:bg-gray-100 transition-opacity"
        >
          <ChevronRight className="w-7 h-7 text-[#003A47]" />
        </button>
      </div>
    </div>
  );
};

export default ServicesCarousel;
