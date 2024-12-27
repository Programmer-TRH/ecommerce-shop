import React from 'react'

export default function LeftArrow({className=""}) {
  return (
    <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    data-name="Flat Color"
    xmlns="http://www.w3.org/2000/svg"
   className={className}
   fill='#000'
  >
    <path
      d="M21 11H5.41l5.3-5.29a1 1 0 1 0-1.42-1.42l-7 7a1 1 0 0 0 0 1.42l7 7a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L5.41 13H21a1 1 0 0 0 0-2 "
    />
  </svg>
  )
}
