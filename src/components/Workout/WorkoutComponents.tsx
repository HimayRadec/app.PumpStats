import React from 'react'
// import '@/styles/workout.css'

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

interface WorkoutProps {
   workoutData: WorkoutData
}


// Only Allow Numeric Input and Limit to 3 Characters
function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
   const inputValue = event.target.value;
   const numericValue = inputValue.replace(/\D/g, ''); // Replace non-numeric characters with empty string
   event.target.value = numericValue.slice(0, 3); // Take first three characters of the numeric value
}

export function WorkoutComponents() {
   return (
      <div>WorkoutComponents</div>
   )
}


interface Set {
   setNumber: number;
   reps: number;
   weight: number;
   restTime?: number;
   startTime?: number;
   endTime?: number;
}

export function Set({ setNumber, reps, weight }: Set) {
   return (
      <div className='flex'>
         <h3 className="setNumber">{setNumber}</h3>
         <div className='relative flex items-center'>
            <h4 className='absolute text-gray-500 right-1 select-none'>lbs</h4>
            <input type="number" max="999" onInput={handleInputChange} />
         </div>
         <div className='relative flex items-center'>
            <h4 className='absolute text-gray-500 right-1 select-none'>reps</h4>
            <input type="number" max="999" onInput={handleInputChange} />
         </div>
      </div>
   )
}

interface Exercise {
   exerciseName: string;
   sets: Set[];
}

export function Exercise(exerciseData: Exercise) {
   return (
      <div>
         <h2>Exercise</h2>
      </div>
   )
}

export function WorkoutView(workoutData: WorkoutProps) {
   return (
      <div>
         <h2>{workoutData.workoutData.workoutName}</h2>
      </div>
   )
}
