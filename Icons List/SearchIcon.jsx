import React from 'react'

export default function SearchIcon({className, ...props}) {
  return (
    <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="m20 20-3.778-3.784m2.094-5.058a7.158 7.158 0 1 1-14.316 0 7.158 7.158 0 0 1 14.316 0z"
      stroke="#000"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
  )
}
