import { cn } from '@/lib/utils'
import React from 'react'

export default function HighLightedSubtitle({className="", text}) {
  return (
   <div className='flex items-center gap-2 md:gap-4 text-secondary-red mb-2 md:mb-3'>
    <span className='w-4 h-8 md:w-5 md:h-10 bg-secondary-red rounded-sm'></span>
    <h3 className={cn("text-base font-semibold md:text-lg",className)}>
        {text}
    </h3>
   </div>
  )
}
