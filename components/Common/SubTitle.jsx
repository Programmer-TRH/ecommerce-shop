import { cn } from '@/lib/utils'
import React from 'react'

export default function SubTitle({ subtitle, className }) {
  return (
    <h3 className={cn('text-lg md:text-xl font-semibold mb-2 text-primary-white', className)}>{subtitle}</h3>
  )
}
 