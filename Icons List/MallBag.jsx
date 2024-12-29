import React from 'react'

export default function MallBag({className=""}) {
  return (
    <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M3 6.3v14.2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6.3z"
      stroke="#000"
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
    <path
      d="m21 6.3-2.834-3.8H5.834L3 6.3m12.778 3.3c0 2.099-1.692 3.8-3.778 3.8s-3.778-1.701-3.778-3.8"
      stroke="#000"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  )
} 
