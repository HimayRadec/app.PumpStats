'use client';
import React, { useState } from 'react';
import { WorkoutName, WorkoutView } from '@/app/components/Workout/WorkoutComponents'

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

function saveWorkout() {
   // Save workout data to database
   console.log('Workout Saved');
   console.log(sampleWorkoutData);
}



function Page() {
   const [workoutName, setWorkoutName] = useState('First Day');

   function printWorkoutName() {
      console.log(workoutName);
   }

   const handleNameChange = (newName: string) => {
      setWorkoutName(newName);
   };

   const saveWorkout = () => {
      // Implement your save workout logic here
   };

   return (
      <div className='flex flex-col w-fit m-auto align-items'>
         <WorkoutName workoutName={workoutName} onNameChange={handleNameChange} />
         <WorkoutView workoutData={sampleWorkoutData} />
         <button className='border' onClick={printWorkoutName}>Save Workout</button>
      </div>
   );
}

export default Page