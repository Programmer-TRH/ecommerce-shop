import React from "react";

export default function MobileIcon({className="", IconClassName=""}) {
  return (
    <svg
    width={40}
    height={40}
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g clipPath="url(#a)" stroke="#000">
      <path
        d="M38.938 6.125H17.062a2.734 2.734 0 0 0-2.734 2.734v38.282a2.734 2.734 0 0 0 2.735 2.734h21.875a2.734 2.734 0 0 0 2.734-2.734V8.859a2.734 2.734 0 0 0-2.734-2.734"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.667 7h5.468"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 44.005v.026"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path strokeWidth={2} d="M15.167 39.833h25.666" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h56v56H0z" />
      </clipPath>
    </defs>
  </svg>
  );
}
