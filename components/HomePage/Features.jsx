import React from 'react'
import HiglightedTitle from '../Common/HiglightedTitle'
import HighLightedSubtitle from '../Common/HighLightedSubtitle'
import DeleveryIcon from '@/Icons List/DeleveryIcon'
import HelpIcon from '@/Icons List/HelpIcon'
import SecureIcon from '@/Icons List/SecureIcon'
import Title from '../Common/Title'

export default function Features() {
  return (
    <section className='py-8'>
      <HighLightedSubtitle text="Feature" />
      <Title text="We offers" />
      <div className='mt-8 flex flex-wrap items-center justify-center *:shrink gap-8 md:gap-16 *:grid *:place-items-center'>
        <div className=''>
        <div className='**:stroke-primary-white bg-primary-black/30 rounded-full p-2 '>
         <DeleveryIcon className='bg-primary-black rounded-full p-2 size-12 md:size-13' />
         </div>
          <h2 className='text-[1.25rem] font-semibold mt-1'>FREE AND FAST DELIVERY</h2>
          <p className='font-medium text-primary-black/80'>Free delivery for all orders over $140</p>
        </div>
        <div className=' '>
         <div className='**:stroke-primary-white bg-primary-black/30 rounded-full p-2 '>
         <HelpIcon className='bg-primary-black rounded-full p-2 size-12 md:size-13' />
         </div>
          <h2 className='text-[1.25rem] font-semibold mt-1'>24/7 CUSTOMER SERVICE</h2>
          <p className='font-medium text-primary-black/80'>Friendly 24/7 customer support</p>
        </div>
        <div className=''>
        <div className='**:fill-primary-white bg-primary-black/30 rounded-full p-2 '>
         <SecureIcon className='bg-primary-black rounded-full p-2 size-12 md:size-13' />
         </div>
          <h2 className='text-[1.25rem] font-semibold mt-1'>MONEY BACK GUARANTEE</h2>
          <p className='font-medium text-primary-black/80'>We return money within 30 days</p>
        </div>
      </div>
    </section>
  )
}
