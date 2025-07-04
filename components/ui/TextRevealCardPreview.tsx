"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardTitle,
} from "../ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center bg-black h-[20rem] w-full">
      <TextRevealCard
        text="You know the goal"
        revealText="we know the strategy"
      >
        <TextRevealCardTitle>
          Sometimes, you just need to see it.
        </TextRevealCardTitle>
      </TextRevealCard>
    </div>
  );
}
