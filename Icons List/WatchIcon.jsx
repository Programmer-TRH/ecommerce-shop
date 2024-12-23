import React from "react";

export default function WatchIcon(...props) {
  return (
    <svg
      width={56}
      height={56}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#a)" stroke="#000" strokeWidth={2} strokeLinecap="round">
        <path
          d="M35 14H21a7 7 0 0 0-7 7v14a7 7 0 0 0 7 7h14a7 7 0 0 0 7-7V21a7 7 0 0 0-7-7M21 42v7h14v-7M21 14V7h14v7"
          strokeLinejoin="round"
        />
        <path d="M24 23v11m4-6v6m4-8v8" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h56v56H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
