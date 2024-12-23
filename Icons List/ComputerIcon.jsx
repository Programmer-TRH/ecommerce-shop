import React from "react";

export default function ComputerIcon(...props) {
  return (
    <svg
    {...props}
      width={56}
      height={56}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#a)" stroke="#000" strokeWidth={2} strokeLinecap="round">
        <path
          d="M46.667 9.333H9.333A2.333 2.333 0 0 0 7 11.667V35a2.333 2.333 0 0 0 2.333 2.333h37.334A2.333 2.333 0 0 0 49 35V11.667a2.333 2.333 0 0 0-2.333-2.334M16.333 46.667h23.334M21 37.333v9.334m14-9.334v9.334"
          strokeLinejoin="round"
        />
        <path d="M8 32h40" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h56v56H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
