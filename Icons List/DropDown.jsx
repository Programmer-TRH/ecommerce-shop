import React from 'react'

export default function DropDown(...props) {
  return (
    <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.364 12.95 17.314 8l1.414 1.414-6.364 6.364L6 9.414 7.414 8z"
      fill="#000"
    />
  </svg>
  )
}
