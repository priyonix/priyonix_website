"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "the",
    },
    {
      text: "future",
    },
    {
      text: "with",
    },
    {
      text: "Priyonix.",
      className: "text-gray-500 dark:text-gray-400",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[20rem] bg-black ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        Your learning adventure starts now
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Sign Up
        </button>
      </div>
    </div>
  );
}
