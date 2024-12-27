import LeftArrow from "@/Icons List/LeftArrow";
import RightArrow from "@/Icons List/RightArrow";
import React from "react";

export default function LeftRightScroll() {
  return (
    <div className="flex gap-2">
      <button className="bg-secondary-smoke hover:bg-line active:bg-line transition-all duration-200 ease-in-out rounded-full p-1.5">
        <LeftArrow className="size-5 md:size-6" />
      </button>
      <button className="bg-secondary-smoke hover:bg-line active:bg-line transition-all duration-200 ease-in-out rounded-full p-1.5">
        <RightArrow className="size-5 md:size-6" />
      </button>
    </div>
  );
}
