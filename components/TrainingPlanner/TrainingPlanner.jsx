import React, { useState } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/solid";


// TrainingSelector Component
const TrainingSelector = () => {
  // State voor trainingstype en tijd
  const [selectedTraining, setSelectedTraining] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  // Trainingsopties en beschikbare tijden met afbeeldingen
  const trainingOptions = [
    {
      label: "G4A Training",
      src: "/images/image 25 (1).svg", // Placeholder-afbeelding
    },
    {
      label: "Piwik Pro Training",
      src: "/images/Looker_6f803d7fdc2 1.svg", // Placeholder-afbeelding
    },
    {
      label: "GTM Training",
      src: "/images/image 27.svg", // Placeholder-afbeelding
    },
    {
      label: "Server-Side T-Training",
      src: "/images/image 25 (1).svg", // Placeholder-afbeelding
    },
    {
      label: "Looker Studio Training",
      src: "/images/Looker_6f803d7fdc2 1.svg", // Placeholder-afbeelding
    },
  ];

  const availableTimes = ["10:30", "11:00", "13:30"];

  // Toggle voor het dropdown-menu voor trainingstype
  const [showTrainingDropdown, setShowTrainingDropdown] = useState(false);
  const [showTimeDropdown, setShowTimeDropdown] = useState(false);

  return (
    <div className="w-[400px] h-[200px] mx-auto mt-10 p-5 bg-[#EAFFBD] rounded-2xl shadow-lg">
      <div className="mb-5">
        {/* Training Type Selector */}
        <div className="mb-4 relative">
          <button
            onClick={() => setShowTrainingDropdown(!showTrainingDropdown)}
            className="flex items-center justify-between w-full px-4 py-2 bg-[#E8FAD6] rounded-lg text-gray-800 font-semibold"
          >
            {selectedTraining ? (
              <div className="flex items-center gap-2">
                <img
                  src={selectedTraining.src}
                  alt={selectedTraining.label}
                  className="w-8 h-8 rounded-full"
                />
                {selectedTraining.label}
              </div>
            ) : (
              "Training Type"
            )}
              <span className="ml-2">
                {showTrainingDropdown ? (
                  <ChevronUpIcon className="w-5 h-5 text-gray-800" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 text-gray-800" />
                )}
              </span>
          </button>
          {showTrainingDropdown && (
            <div className="absolute top-12 left-0 w-full bg-white rounded-lg shadow-md z-10">
              {trainingOptions.map((training, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedTraining(training);
                    setShowTrainingDropdown(false);
                  }}
                  className="flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-lime-200"
                >
                  <img
                    src={training.src}
                    alt={training.label}
                    className="w-10 h-10 object-contain rounded-full"
                  />
                  {training.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Times (Free) Selector */}
        <div className="mb-4 relative">
          <button
            onClick={() => setShowTimeDropdown(!showTimeDropdown)}
            className="flex items-center justify-between w-full px-4 py-2 bg-[#E8FAD6] rounded-lg text-gray-800 font-semibold"
          >
            {selectedTime ? selectedTime : "Times (Free)"}{" "}
            <span className="ml-2">
                {showTrainingDropdown ? (
                  <ChevronUpIcon className="w-5 h-5 text-gray-800" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 text-gray-800" />
                )}
              </span>
          </button>
          {showTimeDropdown && (
            <div className="absolute top-12 left-0 w-full bg-white rounded-lg shadow-md z-10">
              {availableTimes.map((time, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedTime(time);
                    setShowTimeDropdown(false);
                  }}
                  className="block w-full px-4 py-2 text-left hover:bg-lime-200"
                >
                  {time}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            onClick={() => alert(`Training: ${selectedTraining.label}, Time: ${selectedTime}`)}
            className="bg-[#F4C5FF] px-6 py-2 rounded-2xl hover:bg-[#FAE4FF]"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};





// Kalendercomponent
const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Functie om naar de vorige maand te gaan
  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  // Functie om naar de volgende maand te gaan
  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  // Maand en Jaar
  const monthName = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  // Eerste dag van de maand
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const startingDay = firstDayOfMonth.getDay() === 0 ? 7 : firstDayOfMonth.getDay(); // Zondag als 7 tellen

  // Aantal dagen in de huidige maand
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

  // Dagen genereren voor de kalenderweergave
  const generateCalendarDays = () => {
    let days = [];
    for (let i = 1; i < startingDay; i++) {
      days.push(<div className="empty" key={`empty-${i}`}></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <div
          key={`day-${day}`}
          className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ${
            day === currentDate.getDate() ? "bg-gray-800 text-white" : "hover:bg-lime-300"
          }`}
          onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))}
        >
          {day}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="w-[400px] mx-auto mt-10 p-5 bg-[#EAFFBD] rounded-2xl shadow-lg">
      <div className="flex items-center justify-between mb-5">
        <button
          onClick={prevMonth}
          className="bg-[#A8FF1A] font-bold text-gray-800 p-1 w-8 rounded-r-none rounded-l-full rounded-full focus:outline-none"
        >
          &lt;
        </button>
        <div className="bg-[#A8FF1A] px-6 py-2 rounded-xl">
          <div className="text-xl font-bold text-lime-900">
            {monthName} {year}
          </div>
        </div>
        <button
          onClick={nextMonth}
          className="bg-[#A8FF1A] font-bold text-gray-800 p-1 w-8 rounded-l-none rounded-r-full focus:outline-none"
        >
          &gt;
        </button>
      </div>
      {/* Vaste hoogte en consistent grid voor de dagen */}
      <div className="grid grid-cols-7 gap-2 text-center h-[300px]">
        {daysOfWeek.map((day) => (
          <div key={day} className="font-bold">
            {day}
          </div>
        ))}
        {generateCalendarDays()}
      </div>
    </div>
  );
};

// TrainingPlanner-component waarin de kalender en de TrainingSelector zijn geïntegreerd
const TrainingPlanner = ({ blok }) => (
  <div className="bg-[#002626] flex justify-center mb-20" {...storyblokEditable(blok)}>
    <div className="container flex justify-center">
      <div className="flex flex-col bg-[#003A47] h-[675px] w-[80%] p-5 rounded-3xl">
        <h1 className="mb-8 text-6xl font-bold text-white flex justify-center">Timetable</h1>
        <div className="flex justify-around items-center">
          <Calendar />
          <TrainingSelector />
        </div>
      </div>
    </div>
  </div>
);

export default TrainingPlanner;
