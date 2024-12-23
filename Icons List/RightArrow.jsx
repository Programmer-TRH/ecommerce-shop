import React from 'react'

export default function RightArrow(...props) {
  return (
    <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    transform="scale(-1 1)"
    {...props}
  >
    <path
      d="m11 5-7 7 7 7m-7-7h16"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  )
}
