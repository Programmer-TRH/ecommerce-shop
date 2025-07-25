import React from 'react'

export default function Favourite({className=""}) {
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
      d="M8 5C5.791 5 4 6.74 4 8.886c0 1.733.7 5.845 7.59 10.001a.8.8 0 0 0 .82 0C19.3 14.73 20 10.618 20 8.886 20 6.74 18.209 5 16 5s-4 2.355-4 2.355S10.209 5 8 5"
      stroke="#000"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  )
}
