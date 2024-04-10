import { UserNavbar } from '@/app/components/Navbars'
import CreateWorkout from '@/app/components/Buttons/CreateWorkout'
import UserHome from '@/app/components/User/UserHome'
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
