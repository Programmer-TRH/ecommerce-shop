import CartBag from '@/Icons List/CartBag'
import { cn } from '@/lib/utils'
import React from 'react'

export default function AddToCartButton({className=""}) {
  return (
    <button className={cn("hover:bg-primary-black/35 active:bg-primary-black/35 bg-line text-primary-white p-2 rounded-full shadow shadow-primary-black/35" ,className)}>
        <CartBag className='size-5 md:size-6' />
    </button>
  )
}
