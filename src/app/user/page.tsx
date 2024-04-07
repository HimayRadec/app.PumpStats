import { UserNavbar } from '@/components/Navbars'
import CreateWorkout from '@/components/Buttons/CreateWorkout'
import UserHome from '@/components/User/UserHome'
import React from 'react'

export default function page() {
   return (
      <div className='flex flex-col justify-center'>
         <UserNavbar />
         <main>
            <h1>User Page</h1>
            <UserHome />
         </main>
         <CreateWorkout />
      </div>
   )
}
