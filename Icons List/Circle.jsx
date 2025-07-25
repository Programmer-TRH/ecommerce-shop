import React from 'react'

export default function Circle(...props) {
  return (
    <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={10} cy={10} r={10} fill="#E07575" />
  </svg>
  )
}
