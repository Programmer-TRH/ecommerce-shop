import CameraIcon from '@/Icons List/CameraIcon'
import ComputerIcon from '@/Icons List/ComputerIcon'
import GamingTools from '@/Icons List/GamingTools'
import Headphone from '@/Icons List/Headphone'
import HeadPhoneIcon from '@/Icons List/HeadPhoneIcon'
import MobileIcon from '@/Icons List/MobileIcon'
import WatchIcon from '@/Icons List/WatchIcon'
import React from 'react'
 
export default function CategorieList() {
  return (
    <div className='w-full flex flex-wrap *:shrink items-center justify-center gap-4 md:gap-6 lg:gap-8 mb-8'>
             <button className='w-24 sm:w-34 md:w-40 aspect-[13/9] border border-line rounded-sm hover:bg-secondary-red hover:text-primary-white group **:group-hover:stroke-primary-white focus:bg-secondary-red focus:text-primary-white **:group-focus:stroke-primary-white flex flex-col items-center justify-center transition-all duration-200 ease-in-out'>
            <MobileIcon className="size-8 sm:size-10 md:size-12" />
            <p className='text-sm sm:text-base'>Phones</p>
        </button>
        <button className='w-24 sm:w-34 md:w-40 aspect-[13/9] border border-line rounded-sm hover:bg-secondary-red hover:text-primary-white group **:group-hover:stroke-primary-white focus:bg-secondary-red focus:text-primary-white **:group-focus:stroke-primary-white flex flex-col items-center justify-center transition-all duration-200 ease-in-out'>
            <ComputerIcon className="size-8 md:size-10 lg:size-12" />
            <p className='text-sm sm:text-base'>Computers</p>
        </button>
        <button className='w-24 sm:w-34 md:w-40 aspect-[13/9] border border-line rounded-sm hover:bg-secondary-red hover:text-primary-white group **:group-hover:stroke-primary-white focus:bg-secondary-red focus:text-primary-white **:group-focus:stroke-primary-white flex flex-col items-center justify-center transition-all duration-200 ease-in-out'>
            <WatchIcon className="size-8 sm:size-10 md:size-12" />
            <p className='text-sm sm:text-base'>Smart Watch</p>
        </button>
        <button className='w-24 sm:w-34 md:w-40 aspect-[13/9] border border-line rounded-sm hover:bg-secondary-red hover:text-primary-white group **:group-hover:stroke-primary-white focus:bg-secondary-red focus:text-primary-white **:group-focus:stroke-primary-white flex flex-col items-center justify-center transition-all duration-200 ease-in-out'>
            <CameraIcon className="size-8 sm:size-10 md:size-12" />
            <p className='text-sm sm:text-base'>Camera </p>
        </button>
        <button className='w-24 sm:w-34 md:w-40 aspect-[13/9] border border-line rounded-sm hover:bg-secondary-red hover:text-primary-white group **:group-hover:stroke-primary-white focus:bg-secondary-red focus:text-primary-white **:group-focus:stroke-primary-white flex flex-col items-center justify-center transition-all duration-200 ease-in-out'>
            <HeadPhoneIcon className="size-8 sm:size-10 md:size-12" />
            <p className='text-sm sm:text-base'>HeadPhones</p>
        </button>
        <button className='w-24 sm:w-34 md:w-40 aspect-[13/9] border border-line rounded-sm hover:bg-secondary-red hover:text-primary-white group **:group-hover:stroke-primary-white focus:bg-secondary-red focus:text-primary-white **:group-focus:stroke-primary-white flex flex-col items-center justify-center transition-all duration-200 ease-in-out'>
            <GamingTools className="size-8 sm:size-10 md:size-12" />
            <p className='text-sm sm:text-base'>Gaming</p>
        </button>
    </div>
  )
}
