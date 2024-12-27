import React from 'react'

export default function Electronics({className="", ...props}) {
  return (
    <svg
    width={80}
    height={80}
    viewBox="0 0 0.847 0.847"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M1 .4a.1.1 0 0 0-.09.055L.788.7h1.623L2.289.455A.1.1 0 0 0 2.2.4zM.2.8a.1.1 0 0 0-.1.1v1.8a.1.1 0 0 0 .1.1H3a.1.1 0 0 0 .1-.1V.9A.1.1 0 0 0 3 .8zm.4.4a.1.1 0 0 1 .1.1.1.1 0 0 1-.1.1.1.1 0 0 1-.1-.1.1.1 0 0 1 .1-.1m1 0c.33 0 .6.269.6.599s-.27.6-.6.6-.599-.27-.599-.6A.6.6 0 0 1 1.6 1.2m0 .2a.397.397 0 0 0-.399.399.4.4 0 0 0 .399.4.4.4 0 0 0 .4-.4.4.4 0 0 0-.4-.399"
      transform="scale(.26458)"
    />
  </svg>
  )
}
