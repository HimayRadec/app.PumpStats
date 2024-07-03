'use client'
import Workout from '@/components/Workout'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'

function WorkoutPage() {

   let [workoutData, setWorkoutData] = useState({
      name: 'Chest Day',
      exercises: []
   })

   return (
      <div className='relative min-h-screen border'>
         <div className="w-full lg:min-w-[1000px] lg:w-1/2 mx-auto border">
            <Workout />
         </div>
         <Button className='w-[60rem] absolute bottom-10 left-1/2 transform -translate-x-1/2'>Save</Button>

         <div className='mx-auto w-fit'>
            <pre>{JSON.stringify(workoutData, null, 2)}</pre>
         </div>

      </div>
   )
}


export default WorkoutPage