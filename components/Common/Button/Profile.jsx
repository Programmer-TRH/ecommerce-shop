import React from 'react'
import ProfileModal from '../ProfileModal'
import ProfileIcon from '@/Icons List/ProfileIcon'

export default function Profile() {
  return (
    <>
    <button popoverTarget='pc-profile-modal'>
      <ProfileIcon className='size-7' />
    </button>
    <ProfileModal id="pc-profile-modal" className='right-17 top-15.5' />
    </>
  )
}
 