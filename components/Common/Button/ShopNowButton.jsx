import RightArrow from '@/Icons List/RightArrow'
import Link from 'next/link'
import React from 'react'

export default function ShopNowButton() {
  return (
    <Link href="#" className='border-b pb-0.5 border-secondary-white text-secondary-white cursor-pointer text-lg '>
        <span className='hover:font-semibold active:font-semibold'>Shop Now</span>
        <RightArrow className='fill-secondary-white inline-block size-4 ml-0.75' />
    </Link>
  )
}
