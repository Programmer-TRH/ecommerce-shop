import React from 'react'

export default function MensFashion({className, ...props}) {
  return (
    <svg
    width={800}
    height={800}
    viewBox="0 0 24 24"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path d="m14.43 3-.29.49a2.5 2.5 0 0 1-4.29 0L9.57 3H6.76L2 5.38V11h4v10h12V11h4V5.38L17.24 3Z" />
  </svg>
  )
}
