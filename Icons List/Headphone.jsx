import React from 'react'

export default function Headphone(...props) {
  return (
    <svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.4 33V16.75a9.83 9.83 0 0 1 2.812-6.894A9.53 9.53 0 0 1 20 7a9.53 9.53 0 0 1 6.788 2.856A9.83 9.83 0 0 1 29.6 16.75V33M4 22.543c0-3.336 3.2-4.168 6.4-4.168V33a6.35 6.35 0 0 1-4.525-1.904A6.55 6.55 0 0 1 4 26.5zm32 0c0-3.336-3.2-4.168-6.4-4.168V33a6.35 6.35 0 0 0 4.526-1.904A6.55 6.55 0 0 0 36 26.5z"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  )
}
