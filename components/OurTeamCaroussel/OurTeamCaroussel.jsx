'use client'

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { storyblokEditable } from "@storyblok/react/rsc"

// Afbeeldingen en extra info
const images = [
  { src: "/images/Group 39898.svg", title: "Edwin", info: "CEO" },
  { src: "/images/Group 39899.svg", title: "Finn", info: "COO" },
  { src: "/images/Group 39900.svg", title: "Driek", info: "Support en kwaliteitsmanager" },
  { src: "/images/Group 39899.svg", title: "Team Member 4", info: "Backend Developer" },
  { src: "/images/Group 39898.svg", title: "Team Member 5", info: "Project Manager" },
  { src: "/images/Group 39900.svg", title: "Team Member 6", info: "Content Creator" },
  { src: "/images/Group 39900.svg", title: "Team Member 7", info: "SEO Specialist" },
  { src: "/images/Group 39898.svg", title: "Team Member 8", info: "Graphic Designer" },
  { src: "/images/Group 39899.svg", title: "Team Member 9", info: "Data Analyst" },
]

const OurTeamCarousel = ({ blok }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fadeIn, setFadeIn] = useState(false)

  const totalSlides = Math.ceil(images.length / 3)

  useEffect(() => {
    setFadeIn(true)
  }, [currentIndex])

  const handlePrevious = () => {
    setFadeIn(false)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - 3, 0))
    }, 300)
  }

  const handleNext = () => {
    setFadeIn(false)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => Math.min(prevIndex + 3, images.length - 3))
    }, 300)
  }

  const visibleImages = images.slice(currentIndex, currentIndex + 3)

  return (
    <div className="mt-20 flex flex-col items-center justify-center bg-[#002626]" {...storyblokEditable(blok)}>
      <h1 className="mb-10 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#EAFFBD] to-[#F4C5FF]">Our Team</h1>

      {/* Carousel */}
      <div className="w-full max-w-7xl mx-auto px-4 flex flex-col items-center">
        <div className="w-full flex items-center justify-center">
          {/* Vorige Knop */}
          <button
            className={`h-10 w-10 rounded-l-full flex items-center justify-center bg-[#A8FF1A] transition-opacity duration-200 ${
              currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
            }`}
            disabled={currentIndex === 0}
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-7 w-7" style={{ color: "#003A47" }} />
            <span className="sr-only">Previous slide</span>
          </button>

          {/* Afbeeldingen */}
          <div className={`flex justify-center items-center overflow-hidden gap-6 transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
            {visibleImages.map((image, index) => (
              <div
                key={currentIndex + index}
                className="flex-shrink-0 transition-opacity duration-500 rounded-lg shadow-md overflow-hidden p-10 transform hover:scale-105 hover:rotate-1 hover:shadow-xl"
              >
                <Image
                  src={image.src}
                  alt={`Carousel Image ${currentIndex + index + 1}`}
                  width={275} // Kleinere breedte
                  height={275} // Kleinere hoogte
                  className="object-contain transition-transform duration-500 hover:scale-110"
                />
                <h2 className="mt-4 text-xl font-bold text-white text-center">{image.title}</h2>
                <p className="mt-2 text-sm text-gray-300 text-center">{image.info}</p>
              </div>
            ))}
          </div>

          {/* Volgende Knop */}
          <button
            className={`h-10 w-10 rounded-r-full flex items-center justify-center bg-[#A8FF1A] transition-opacity duration-500 ${
              currentIndex >= images.length - 3 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
            }`}
            disabled={currentIndex >= images.length - 3}
            onClick={handleNext}
          >
            <ChevronRight className="h-7 w-7" style={{ color: "#003A47" }} />
            <span className="sr-only">Next slide</span>
          </button>
        </div>

        {/* Indicatoren */}
        <div className="flex justify-center mt-10 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-opacity duration-500`}
              style={{
                backgroundColor: Math.floor(currentIndex / 3) === index ? "#F4C5FF" : "#636363",
              }}
              onClick={() => setCurrentIndex(index * 3)}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurTeamCarousel
