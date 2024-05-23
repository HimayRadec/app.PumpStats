'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { WorkoutName, WorkoutView } from '@/app/components/Workout/WorkoutComponents'
import WorkoutDetails from '@/components/WorkoutDetails';
import { Button } from '@/components/ui/button';

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
   console.log('Workout Saved');
   console.log(sampleWorkoutData);
}

function LogWorkout() {
   const [workoutName, setWorkoutName] = useState('Chest Day');

   const [time, setTime] = useState(0);

   useEffect(() => {
      const intervalId = setInterval(() => {
         setTime(prevTime => prevTime + 1);
      }, 1000); // Update every second

      // Cleanup function to clear the interval when the component unmounts
      return () => clearInterval(intervalId);
   }, []); // Run effect only once when component mounts

   // Convert time to minutes and seconds
   const minutes = Math.floor(time / 60);
   const seconds = time % 60;

   // Format minutes and seconds with leading zeros if needed
   const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

   function timeClicked() {
      console.log('Time Clicked');
   }

   const handleNameChange = (newName: string) => {
      setWorkoutName(newName);
   };

   const saveWorkout = () => {
      // Implement your save workout logic here
   };

   return (
      <div className="w-full">
         <div className="flex justify-between bg-background	">
            <Button className='bg-transparent text-primary hover:bg-transparent hover:text-orange-700 font-light text-base'>
               <Link href="/workout/workouts">CANCEL</Link>
            </Button>
            <Button className='bg-transparent text-primary hover:bg-transparent hover:text-orange-700 font-light text-base'>
               {formattedTime}
            </Button>
            <Button className='bg-transparent text-primary hover:bg-transparent hover:text-orange-700 font-light text-base'>SAVE</Button>
         </div>
         <div className='flex flex-col w-fit m-auto align-items p-3'>
            <WorkoutDetails workoutData={sampleWorkoutData} />
            <Button onClick={saveWorkout} className='m-3'>
               Add Exercise
            </Button>
         </div>
      </div>
   );
}

export default LogWorkout