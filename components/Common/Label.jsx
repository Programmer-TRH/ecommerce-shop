import { cn } from '@/lib/utils'
import React from 'react'

export default function Label({id="", label="", className=""}) {
  return (
   <label className={cn('block text-start', className)}  htmlFor={id}>{label}</label>
  )
}
