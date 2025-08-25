"use client";

import React, { useEffect, useState } from "react";
import Calendar, { CalendarProps } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaVideo } from "react-icons/fa";
import { useRouter } from "next/navigation";

const isSameDay = (d1: Date, d2: Date) =>
  d1.getDate() === d2.getDate() &&
  d1.getMonth() === d2.getMonth() &&
  d1.getFullYear() === d2.getFullYear();

export default function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [now, setNow] = useState<Date | null>(null);
  const router = useRouter();

  // ✅ Correctly typed for react-calendar Value type
  const handleDateChange: CalendarProps["onChange"] = (value) => {
    if (value === null) return; // Ignore null values
    const selected = Array.isArray(value) ? value[0] : value;
    setSelectedDate(selected);
  };

  const handleRedirect = () => {
    if (selectedDate) {
      router.push('/booking?date=' + encodeURIComponent(selectedDate.toLocaleDateString()));
    }
  };

  // ✅ Ensure now is set only on the client
  useEffect(() => {
    setNow(new Date());
  }, []);

  if (now === null) return null; // prevent hydration errors

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-black p-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-white">
        Book Your Spot <span className="text-gray-400">with Priyonix</span>
      </h1>

      <div className="bg-black rounded-xl shadow-md p-6 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 border border-pink-100">
        {/* Left Panel */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-white">
            
          </h1>
          {/* <div className="flex items-center text-white">
            <FaClock className="mr-2 text-gray-500" /> 45 min
          </div> */}
          <div className="flex items-center text-white">
            <FaVideo className="mr-2 text-gray-500" /> Web conferencing details provided upon confirmation.
          </div>

          <div className="mt-5">
            <button
              disabled={!selectedDate}
              onClick={handleRedirect}
              className={`px-5 py-2 rounded-lg font-semibold transition ${selectedDate ? "bg-gray-600 text-white hover:bg-blue-700" : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
            >
              {selectedDate ? "Book Now" : "Select a Date to Continue"}
            </button>
          </div>
        </div>

        {/* Calendar */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">Select a Date &amp; Time</h2>
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            minDate={now}
            prev2Label={null}
            next2Label={null}
            tileClassName={({ date }) =>
              selectedDate && isSameDay(date, selectedDate) ? "calendly-selected" : ""
            }
            className="bg-black rounded-md text-white"
          />
          <p className="mt-4 text-sm text-gray-500">
            Time zone: <strong>India Standard Time (IST)</strong>
          </p>
        </div>
      </div>

      {/* Styling */}
      <style jsx global>{`
        .react-calendar { background-color: #000000; color: white; border: none; font-family: inherit; }
        .react-calendar__navigation { background: none; margin-bottom: 1rem; }
        .react-calendar__navigation button { background: transparent !important; color: white; font-size: 1.2rem; margin: 0 0.5rem; border: none; transition: none !important; cursor: default !important; }
        .react-calendar__navigation button:hover { background: transparent !important; color: white !important; }
        .react-calendar__navigation__prev2-button, .react-calendar__navigation__next2-button { display: none; }
        .react-calendar__tile { background: none !important; border-radius: 0 !important; color: white !important; transition: background 0.2s ease; text-align: center; height: 3rem; padding: 0.5rem 0; }
        .react-calendar__tile:enabled:hover { background-color: gray !important; border-radius: 0.5rem; cursor: pointer; }
        .react-calendar__tile--active { background-color: gray !important; color: white !important; border-radius: 0.5rem !important; }
        .react-calendar__tile--now { background: none !important; color: white !important; }
      `}</style>
    </div>
  );
}
