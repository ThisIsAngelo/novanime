"use client";

import { Star } from "@phosphor-icons/react";

export default function Score({ score, user }) {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-xl flex gap-1 2xl:text-2xl">
        <Star weight="fill" className="text-color-stars"/><span className="text-color-light mt-[2px]">{score}</span>
      </h1>
      <p className="text-sm mt-2 text-color-subHeading 2xl:text-base">({user} users)</p>
    </div>
  );
}
