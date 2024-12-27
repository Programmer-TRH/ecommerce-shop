import React from 'react'

export default function RightArrow({className="" ,...props}) {
  return (
    <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    data-name="Flat Color"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
    fill='#000'
  >
    <path
      d="m21.71 11.29-7-7a1 1 0 0 0-1.42 1.42l5.3 5.29H3a1 1 0 0 0 0 2h15.59l-5.3 5.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l7-7a1 1 0 0 0 0-1.42"
    />
  </svg>
  )
}
