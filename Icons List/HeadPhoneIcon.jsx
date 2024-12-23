import React from "react";

export default function HeadPhoneIcon(...props) {
  return (
    <svg
      width={56}
      height={56}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#a)"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16.333 30.333H14A4.667 4.667 0 0 0 9.333 35v7A4.667 4.667 0 0 0 14 46.667h2.333A4.667 4.667 0 0 0 21 42v-7a4.667 4.667 0 0 0-4.667-4.667m25.667 0h-2.333A4.667 4.667 0 0 0 35 35v7a4.667 4.667 0 0 0 4.667 4.667H42A4.667 4.667 0 0 0 46.667 42v-7A4.667 4.667 0 0 0 42 30.333" />
        <path d="M9.333 35v-7a18.666 18.666 0 1 1 37.334 0v7" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h56v56H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
