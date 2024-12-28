import { cn } from '@/lib/utils'
import React from 'react'

export default function Title({text, className=""}) {
  return (
    <h2 className={cn("text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-black", className)}>
        {text}
    </h2>
  )
}
