'use client';
import React from 'react'
import { WorkoutView } from '@/app/components/Workout/WorkoutComponents'

interface SetData {
   setNumber: number
   reps: number
   weight: number
}

interface ExerciseData {
   exerciseName: string
   sets: SetData[]
}

interface WorkoutData {
   workoutName: string
   notes?: string
   totalReps?: number
   totalVolume?: number
   exercises: ExerciseData[]
}


let sampleWorkoutData: WorkoutData = {
   workoutName: 'Chest Day',
   notes: 'This is a sample workout for chest day',
   exercises: [
      {
         exerciseName: 'Bench Press',
         sets: [
            {
               setNumber: 1,
               reps: 10,
               weight: 135
            },
            {
               setNumber: 2,
               reps: 8,
               weight: 185
            },
            {
               setNumber: 3,
               reps: 6,
               weight: 225
            }
         ]
      },
      {
         exerciseName: 'Incline Bench Press',
         sets: [
            {
               setNumber: 1,
               reps: 10,
               weight: 95
            },
            {
               setNumber: 2,
               reps: 8,
               weight: 115
            },
            {
               setNumber: 3,
               reps: 6,
               weight: 135
            }
         ]
      },
      {
         exerciseName: 'Dumbbell Flys',
         sets: [
            {
               setNumber: 1,
               reps: 10,
               weight: 20
            },
            {
               setNumber: 2,
               reps: 8,
               weight: 25
            },
            {
               setNumber: 3,
               reps: 6,
               weight: 30
            }
         ]
      }
   ]
}



function page() {
   return (
      <div>
         <WorkoutView workoutData={sampleWorkoutData} />
      </div>
   );
}

export default page