import React from 'react'
import ProfileModal from '../ProfileModal'
import ProfileIcon from '@/Icons List/ProfileIcon'

export default function Profile() {
  return (
    <>
    <button popoverTarget='pc-profile-modal' className='focus:bg-secondary-red focus:p-1 rounded-full'>
      <ProfileIcon className='size-7' />
    </button>
    <ProfileModal id="pc-profile-modal" className='right-17 top-15.5' />
    </>
  )
}
 