"use client";

import React, { useEffect, useState } from "react";

// Floating Background Component
const FloatingBackground = () => {
  const [shapes, setShapes] = useState([]);

  useEffect(() => {
    const colors = ["#F4C5FF", "#A8FF1A", "#EAFFBD"];
    const initialShapes = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      type: Math.random() > 0.5 ? "circle" : "angle",
      initialX: Math.random() * 100,
      initialY: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 10 + 5, // Size between 5 and 15
      duration: Math.random() * 20 + 10, // Animation duration between 10 and 30 seconds
      delay: Math.random() * -30, // Random delay to stagger animations
    }));
    setShapes(initialShapes);
  }, []);

  return (
    <div
      className="fixed inset-0 overflow-hidden"
      style={{ backgroundColor: "#002626", zIndex: -1 }}
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
    </div>
  );
};

// Pricing Card Component
const PricingCard = ({ blok, selected }) => {
  const price = selected === "monthly" ? blok.monthlyPrice : blok.yearlyPrice;

  return (
    <div
      className="bg-white rounded-lg shadow-lg p-6 text-center"
      style={{
        width: "300px",
        height: "400px",
        borderRadius: "20px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>
        <div
          className="absolute top-2 left-2 bg-[#002626] text-white py-1 px-3 rounded-full"
          style={{
            fontSize: "0.9rem",
            fontWeight: "bold",
          }}
        >
          {blok.title || "Starter Plan"}
        </div>
        <h2
          className="text-3xl font-bold mt-10"
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            whiteSpace: "nowrap",
          }}
        >
          €{price} / {selected === "monthly" ? "month" : "year"}
        </h2>
        <ul className="mt-4 text-left">
          {blok.activeFeatures.map((feature, index) => (
            <li key={index} style={{ fontWeight: "bold" }}>
              ✔️ {feature.trim()}
            </li>
          ))}
          {blok.inactiveFeatures.map((feature, index) => (
            <li
              key={index + blok.activeFeatures.length}
              style={{ color: "gray" }}
            >
              ❌ {feature.trim()}
            </li>
          ))}
        </ul>
      </div>
      <button
        className="bg-[#D9A9FF] text-white py-2 px-4 rounded-lg"
        style={{
          fontSize: "1rem",
          marginTop: "auto",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "8px 20px",
          width: "150px",
        }}
      >
        Get started →
      </button>
    </div>
  );
};

// Test Page
const TestPage = () => {
  const [selected, setSelected] = useState("monthly");

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

  return (
    <>
      <FloatingBackground />
      <div
        style={{
          backgroundColor: "transparent", // Background comes from FloatingBackground
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div
          className="flex bg-[#D9D9D9] overflow-hidden mb-10"
          style={{
            width: "330px",
            height: "60px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "5px",
            borderRadius: "20px",
          }}
        >
          <button
            className={`w-1/2 h-full text-center ${
              selected === "monthly" ? "text-black" : "bg-transparent text-gray-700"
            }`}
            style={{
              backgroundColor:
                selected === "monthly" ? "#A8FF1A" : "transparent",
              borderRadius: "20px",
              fontSize: "15px",
              fontWeight: "normal",
            }}
            onClick={() => setSelected("monthly")}
          >
            Monthly
          </button>
          <button
            className={`w-1/2 h-full text-center ${
              selected === "yearly" ? "text-black" : "bg-transparent text-gray-700"
            }`}
            style={{
              backgroundColor:
                selected === "yearly" ? "#A8FF1A" : "transparent",
              borderRadius: "20px",
              fontSize: "15px",
              fontWeight: "normal",
            }}
            onClick={() => setSelected("yearly")}
          >
            Yearly
          </button>
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {cards.map((card, index) => (
            <PricingCard key={index} blok={card} selected={selected} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TestPage;
