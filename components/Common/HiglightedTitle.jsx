import { cn } from '@/lib/utils'
import React from 'react'

export default function HiglightedTitle({title, className=""}) {
  return (
     <h1 className={cn('text-2xl md:text-4xl lg:text-5xl font-semibold mb-2 text-primary-white', className)}>{title}</h1>
   )
}
