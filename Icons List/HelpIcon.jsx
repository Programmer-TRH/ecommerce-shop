import React from 'react'

export default function HelpIcon({className=""}) {
  return (
    <svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g
      clipPath="url(#a)"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13.333 25a3.333 3.333 0 0 0-6.666 0v3.333a3.333 3.333 0 0 0 6.666 0zm20 0a3.333 3.333 0 0 0-6.666 0v3.333a3.333 3.333 0 1 0 6.666 0z" />
      <path d="M6.667 25v-5a13.333 13.333 0 0 1 26.666 0v5M30 31.667c0 1.326-1.054 2.597-2.929 3.535S22.652 36.667 20 36.667" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
  )
}
