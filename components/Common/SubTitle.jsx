import { cn } from '@/lib/utils'
import React from 'react'

export default function SubTitle({ subtitle, className }) {
  return (
    <h2 className={cn('text-xl font-semibold mb-2 text-primary-white', className)}>{subtitle}</h2>
  )
}
