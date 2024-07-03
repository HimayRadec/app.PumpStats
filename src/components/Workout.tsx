import React from 'react'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { WorkoutData } from '@/types/workoutTypes'

function Workout(workoutData: WorkoutData) {
   return (
      <div>
         <Input placeholder='Workout Name' className='my-3' variant={'workoutName'} />
         <Exercise />
      </div>
   )
}

function Exercise() {
   return (
      <div>
         <Input placeholder='Exercise Name' className='my-2' variant={'exerciseName'} />
         <Set setNumber={2} weight={0} reps={0} />
      </div>
   )
}

interface SetProps {
   setNumber: number,
   weight: number,
   reps: number
}

function Set({ setNumber, weight, reps }: SetProps) {
   return (
      <div className='flex gap-x-2'>
         <Label className='flex items-center text-xl'>{setNumber}</Label>

         <div className='flex gap-x-2'>
            <RepValue />
            <WeightValue />
            <TimeValue />
         </div>
      </div>
   )
}

function RepValue() {
   return (
      <div className=' flex w-full relative'>
         <Input variant='setInput' type='number' />
         <Label className='h-full flex items-center absolute right-2 select-none'>reps</Label>
      </div>
   )
}

function WeightValue() {
   return (
      <div className=' flex w-full relative'>
         <Input variant='setInput' type='number' />
         <Label className='h-full flex items-center absolute right-2 select-none'>lbs</Label>
      </div>
   )
}

function TimeValue() {
   return (
      <div className=' flex w-full relative'>
         <Input variant='setInput' type='number' />
         <Label className='h-full flex items-center absolute right-2 select-none'>seconds</Label>
      </div>
   )
}

export default Workout