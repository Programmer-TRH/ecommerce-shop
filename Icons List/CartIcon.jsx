import React from 'react'

export default function CartIcon({className="", ...props}) {
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
      d="M8.25 20.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m10.5 0a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M2.25 3.75h3L7.5 16.5h12"
      stroke="#000"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.5 12.5h11.692a.375.375 0 0 0 .369-.301l1.35-6.75A.376.376 0 0 0 20.542 5H6"
      stroke="#000"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  )
}
