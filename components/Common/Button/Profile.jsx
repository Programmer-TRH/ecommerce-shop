import React from 'react'
import ProfileModal from '../ProfileModal'
import ProfileIcon from '@/Icons List/ProfileIcon'

export default function Profile() {
  return (
    <>
    <button popoverTarget='pc-profile-modal' className='bg-primary-black/5 active:bg-line p-2 rounded-full'>
      <ProfileIcon className='size-7' />
    </button>
    <ProfileModal id="pc-profile-modal" className='right-17 top-15.5' />
    </>
  )
}
  