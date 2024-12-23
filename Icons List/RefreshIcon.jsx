import React from 'react'

export default function RefreshIcon(...props) {
  return (
    <svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
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
      <path d="M33.333 18.333A13.5 13.5 0 0 0 7.5 15m-.833-6.667V15h6.666m-6.666 6.667A13.5 13.5 0 0 0 32.5 25m.833 6.667V25h-6.666" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
  )
}
