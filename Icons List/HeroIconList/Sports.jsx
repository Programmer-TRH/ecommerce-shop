import React from 'react'

export default function Sports({className="", ...props}) {
  return (
    <svg
    width={80}
    height={80}
    viewBox="0 0 2.4 2.4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M.5.1a.2.2 0 0 0-.2.2v1.8a.2.2 0 0 0 .2.2h1.4a.2.2 0 0 0 .2-.2V.3a.2.2 0 0 0-.2-.2zm.3.2a.2.2 0 0 0-.2.2v.4a.2.2 0 0 0 .2.2h.8a.2.2 0 0 0 .2-.2V.5a.2.2 0 0 0-.2-.2zm.05 1.55a.1.1 0 0 0 .2 0v-.1h.1a.1.1 0 0 0 0-.2h-.1v-.1a.1.1 0 0 0-.2 0v.1h-.1a.1.1 0 0 0 0 .2h.1zm.95-.35a.1.1 0 1 1-.2 0 .1.1 0 0 1 .2 0m-.2.3a.1.1 0 1 1-.2 0 .1.1 0 0 1 .2 0"
      fill="#000"
      fillRule="evenodd"
    />
  </svg>
  )
}
