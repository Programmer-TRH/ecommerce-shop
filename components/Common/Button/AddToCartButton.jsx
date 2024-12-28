import CartBag from '@/Icons List/CartBag'
import { cn } from '@/lib/utils'
import React from 'react'

export default function AddToCartButton({className=""}) {
  return (
    <button className={cn("bg-button-red hover:bg-button-hover-red active:bg-button-hover-red text-primary-white p-1.5 md:p-2 rounded-full shadow shadow-primary-black/35" ,className)}>
        <CartBag className='size-5 md:size-6' />
    </button>
  )
}
