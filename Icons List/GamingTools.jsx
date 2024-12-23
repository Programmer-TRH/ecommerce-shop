import React from "react";

export default function GamingTools(...props) {
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
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M46.667 14H9.333a4.667 4.667 0 0 0-4.666 4.667v18.666A4.667 4.667 0 0 0 9.333 42h37.334a4.667 4.667 0 0 0 4.666-4.667V18.667A4.667 4.667 0 0 0 46.667 14M14 28h9.333m-4.666-4.667v9.334"
          strokeWidth={2}
        />
        <path d="M35 25.667v.024m7 4.642v.024" strokeWidth={3} />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h56v56H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
