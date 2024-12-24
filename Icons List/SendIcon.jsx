import React from 'react'

export default function SendIcon({className="",...props}) {
  return (
    <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    className={className}
  >
    <path
      d="M9.912 12H4L2.023 4.135A.7.7 0 0 1 2 3.995c-.022-.721.772-1.221 1.46-.891L22 12 3.46 20.896c-.68.327-1.464-.159-1.46-.867a.7.7 0 0 1 .033-.186L3.5 15"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  )
}
