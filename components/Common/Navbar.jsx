import CartIcon from '@/Icons List/CartIcon'
import Favourite from '@/Icons List/Favourite'
import SearchIcon from '@/Icons List/SearchIcon'
import React from 'react'

export default function Navbar() {
  return (
    <header className='flex items-center justify-between py-2 '>
        <h1 className='text-3xl font-bold'>Logo</h1>
        <nav className='flex justify-between gap-gap'>
            <a href="#">Home</a>
            <a href="#">Contact</a>
            <a href="#">About</a>
            <a href="#">Sign Up</a>
        </nav>
        <div className='flex gap-gap items-center'>
          <div className='relative'>
          <input type="search" className='pl-button-inline pr-7 py-button-block outline-hidden rounded-md bg-secondary-smoke' placeholder='What are you looking for?' />

          <SearchIcon className="absolute transform top-[50%] -translate-y-[50%] right-0.75" />
          </div>
          <Favourite />
          <CartIcon />
        </div>
    </header>
  )
}
