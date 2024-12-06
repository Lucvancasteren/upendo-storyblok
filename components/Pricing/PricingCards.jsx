import React, { useEffect, useState, useRef } from "react";

// Floating Background Component
const FloatingBackground = () => {
  const [shapes, setShapes] = useState([]);

  useEffect(() => {
    const colors = ["bg-[#F4C5FF]", "bg-[#A8FF1A]", "bg-[#EAFFBD]"];
    const initialShapes = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      type: Math.random() > 0.5 ? "circle" : "angle",
      initialX: Math.random() * 100,
      initialY: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 10 + 5, // Size between 5 and 15
      duration: Math.random() * 20 + 10, // Animation duration
      delay: Math.random() * -30, // Animation delay
    }));
    setShapes(initialShapes);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#002626] overflow-hidden z-[-1] max-w-full">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className="absolute animate-float"
          style={{
            left: `${shape.initialX}%`,
            top: `${shape.initialY}%`,
            animationDelay: `${shape.delay}s`,
          }}
        >
          {shape.type === "circle" ? (
            <div
              className={`rounded-full ${shape.color} opacity-30`}
              style={{
                width: `${shape.size}px`,
                height: `${shape.size}px`,
              }}
            />
          ) : (
            <div
              className={`border-l-2 border-b-2 ${shape.color} opacity-30`}
              style={{
                width: `${shape.size}px`,
                height: `${shape.size}px`,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

// Pricing Card Component
const PricingCard = ({ blok, selected }) => {
  const price = selected === "monthly" ? blok.monthlyPrice : blok.yearlyPrice;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center flex flex-col w-[300px] h-[400px] relative">
      <div className="absolute top-2 left-2 bg-[#002626] text-white py-1 px-3 rounded-full text-sm font-bold">
        {blok.title || "Starter Plan"}
      </div>
      <h2 className="text-3xl font-bold mt-10">
        €{price} / {selected === "monthly" ? "month" : "year"}
      </h2>
      <ul className="mt-4 text-left">
        {blok.activeFeatures.map((feature, index) => (
          <li key={index} className="font-bold">
            ✔️ {feature.trim()}
          </li>
        ))}
        {blok.inactiveFeatures.map((feature, index) => (
          <li key={index + blok.activeFeatures.length} className="text-gray-500">
            ❌ {feature.trim()}
          </li>
        ))}
      </ul>
      <button className="bg-[#D9A9FF] text-white py-2 px-4 rounded-lg mt-auto mx-auto w-[150px]">
        Get started →
      </button>
    </div>
  );
};

// Test Page Component
const TestPage = () => {
  const [selected, setSelected] = useState("monthly");
  const [activeCard, setActiveCard] = useState(0);
  const scrollContainerRef = useRef(null);

  const cards = [
    {
      title: "Starter Plan",
      monthlyPrice: 130,
      yearlyPrice: 1500,
      activeFeatures: ["Protect your data", "Datasharing", "Connecting"],
      inactiveFeatures: ["Visualize", "Dashboards"],
    },
    {
      title: "Pro Plan",
      monthlyPrice: 250,
      yearlyPrice: 2800,
      activeFeatures: [
        "Protect your data",
        "Datasharing",
        "Connecting",
        "Visualize",
      ],
      inactiveFeatures: ["Dashboards"],
    },
    {
      title: "Enterprise Plan",
      monthlyPrice: 640,
      yearlyPrice: 7200,
      activeFeatures: [
        "Protect your data",
        "Datasharing",
        "Connecting",
        "Visualize",
        "Dashboards",
      ],
      inactiveFeatures: [],
    },
  ];

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const cardWidth = scrollContainerRef.current.offsetWidth;
      const currentCard = Math.round(scrollLeft / cardWidth);
      setActiveCard(currentCard);
    }
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0;
    }
  }, []);

  return (
    <>
      <FloatingBackground />
      <div className="flex flex-col items-center justify-start min-h-screen bg-transparent p-5 overflow-hidden">
        {/* Pricing Toggle */}
        <div className="flex bg-[#D9D9D9] overflow-hidden mb-5 w-[200px] h-[40px] rounded-[20px] relative sm:w-[250px] sm:h-[50px] lg:w-[330px] lg:h-[60px]">
          <div
            className={`absolute top-1 left-1 h-[calc(100%-6px)] w-[48%] bg-[#A8FF1A] text-center rounded-[20px] transition-all duration-300 ${
              selected === "monthly" ? "left-1" : "left-[50%]"
            }`}
          ></div>
          <div className="w-full flex justify-between items-center text-gray-700 text-center z-10">
            <button
              className="w-1/2 z-20"
              onClick={() => setSelected("monthly")}
            >
              Monthly
            </button>
            <button
              className="w-1/2 z-20"
              onClick={() => setSelected("yearly")}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Cards Container */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory w-full px-6 lg:justify-center no-scrollbar"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="snap-center flex-shrink-0 w-[300px] mb-5"
            >
              <PricingCard blok={card} selected={selected} />
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-3 sm:hidden">
          {cards.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${
                activeCard === index ? "bg-[#A8FF1A]" : "bg-gray-400"
              }`}
              onClick={() => {
                setActiveCard(index);
                scrollContainerRef.current.scrollTo({
                  left: index * scrollContainerRef.current.offsetWidth,
                  behavior: "smooth",
                });
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TestPage;

 
