import { cn } from '@/lib/utils'
import React from 'react'

export default function OfferPercentTab({percent, className=""}) {
  return (
    <div className={cn( "px-1 py-0.25 md:py-1 md:px-2 rounded-sm shadow shadow-primary-black/50 text-sm font-semibold bg-button-hover-red text-primary-white",className)}>
        {percent}
    </div>
  )
}
 