import { cn } from '@/lib/utils'
import React from 'react'
import Profile from './Profile'
import Login from './Login'

export default function LoginProfileButton({className=""}) {
  const validUser = true
  return (
    <div className={cn("grid place-items-center" ,className)}>
       {validUser ? <Profile /> : <Login />}
    </div>
  )
}
