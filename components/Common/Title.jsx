import React from 'react'

export default function Title({text}) {
  return (
    <h2 className={`text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-black`}>
        {text}
    </h2>
  )
}
