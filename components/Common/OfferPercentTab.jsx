import { cn } from '@/lib/utils'
import React from 'react'

export default function OfferPercentTab({percent, className=""}) {
  return (
    <div className={cn( "px-2 py-1 rounded-sm text-sm font-semibold bg-secondary-red text-primary-white",className)}>
        {percent}
    </div>
  )
}
 