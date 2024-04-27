import React, { useState } from 'react';

import { Input } from '@/components/ui/input';

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


interface Set {
   setNumber: number;
   reps: number;
   weight: number;
   restTime?: number;
   startTime?: number;
   endTime?: number;
}

interface Exercise {
   exerciseName: string;
   sets: Set[];
}

interface ExerciseProps {
   exerciseData: Exercise
}
interface WorkoutProps {
   workoutData: WorkoutData
}

interface WorkoutNameProps {
   workoutName: string;
   onNameChange: (newName: string) => void;
}

export function WorkoutName({ workoutName, onNameChange }: WorkoutNameProps) {
   const [name, setName] = useState(workoutName ? workoutName : 'Workout Name');

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newName = event.target.value.replace(/\b\w/g, (char) => char.toUpperCase());
      setName(newName);
      onNameChange(newName);
   };

   const handleBlur = () => {
      if (name.trim() === '') {
         setName('Workout Name');
         onNameChange('Workout Name');
      }
   };

   return (
      <div>
         <Input
            type="text"
            value={name}
            onChange={handleChange}
            onBlur={handleBlur}

            className='border-none bg-transparent text-2xl font-bold'
         />
      </div>
   );
}


// Only Allow Numeric Input and Limit to 3 Characters
function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
   const inputValue = event.target.value;
   const numericValue = inputValue.replace(/\D/g, ''); // Replace non-numeric characters with empty string
   event.target.value = numericValue.slice(0, 3); // Take first three characters of the numeric value
}

export function Set({ setNumber, weight, reps }: Set) {
   return (
      <div className={`flex gap-x-2 items-center my-2`}>
         <h1 className='min-w-3'>{setNumber}</h1>

         <div className='relative flex items-center'>
            <Input
               type="number"
               value={weight}
               onChange={handleInputChange}
            />
            <p className='absolute right-2'>lbs</p>
         </div>

         <div className='relative flex items-center'>
            <Input
               type="number"
               value={reps}
               onChange={handleInputChange}
               className='appearance-none'
            />
            <p className='absolute right-2'>reps</p>
         </div>
      </div>
   );


}


export function Exercise(exerciseData: ExerciseProps) {
   return (
      <div>
         <h3 className='font-semibold'>
            {exerciseData.exerciseData.exerciseName}
         </h3>
         {exerciseData.exerciseData.sets.map((set, index) => (
            <div key={index}>
               <Set setNumber={set.setNumber} weight={set.weight} reps={set.reps} />
            </div>
         ))}
         <h1 className='text-primary py-2 border-t	border-input'>ADD SET</h1>
      </div>
   )
}

export function WorkoutView(workoutData: WorkoutProps) {

   return (
      <div className='w-fit m-auto'>
         <div className='flex flex-col m-3 gap-y-5'>
            {workoutData.workoutData.exercises.map((exercise, index) => (
               <div key={index}>
                  <Exercise exerciseData={exercise} />
               </div>
            ))}
         </div>
      </div>
   )
}
