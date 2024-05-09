import React from 'react'
import { firstSampleUserProfile } from '@/sampleData/userProfileData'
import { Label } from '@/components/ui/label'

export default function Dashboard() {
   return (
      <div className='container w-screen border flex flex-col items-center'>
         <div className='w-4/5 border'>
            <div className='workout-header flex items-center gap-x-2'>
               <Label className='text-2xl font-bold border'>Todays Workout</Label>
               <Label className='text-lg font-bold m-auto border'>Workout Name</Label>
               <div className='flex gap-x-2 items-center mr-0 border'>
                  <Label>0 Sets</Label>
                  <Label>0 Reps</Label>
                  <Label>0 Load</Label>
                  <Label>0 Minutes</Label>
               </div>
            </div>
         </div>
         <div className='border w-full grid grid-cols-2	'>
            <Label className='col-span-2 text-center text-xl'>Chest Day</Label>
            <Label className='text-center'>Bench</Label>
            <Label className='text-center'>Bench</Label>
         </div>
      </div>
   )
}
