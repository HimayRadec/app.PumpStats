import React from 'react'
import styles from '@/styles/workout.module.css'

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

export function Set({ setNumber, reps, weight }: Set) {
   return (
      <div className={`${styles.setContainer} grid grid-cols-3 gap-5 w-fit`}>
         <h3 className={`${styles.setNumber} text-left w-fit border`}>{setNumber}</h3>

         <div className={`${styles.statInputContainer}`} tabIndex={0}>
            <h4 className={`${styles.statLabel} select-none`}>lbs</h4>
            <input className={`${styles.statInput}`} type="number" max="999" onInput={handleInputChange} />
         </div>

         <div className={`${styles.statInputContainer} relative flex items-center`}>
            <h4 className={`${styles.statLabel} absolute right-1 select-none`}>reps</h4>
            <input className={`${styles.statInput}`} type="number" max="999" onInput={handleInputChange} />
         </div>
      </div>
   );
}


export function Exercise(exerciseData: ExerciseProps) {
   return (
      <div>
         <h3>{exerciseData.exerciseData.exerciseName}</h3>
         {exerciseData.exerciseData.sets.map((set, index) => (
            <div key={index}>
               <Set setNumber={set.setNumber} reps={set.reps} weight={set.weight} />
            </div>
         ))}
      </div>
   )
}

export function WorkoutView(workoutData: WorkoutProps) {

   return (
      <div>
         <h2>{workoutData.workoutData.workoutName}</h2>
         {workoutData.workoutData.exercises.map((exercise, index) => (
            <div key={index}>
               <Exercise exerciseData={exercise} />
            </div>
         ))}
      </div>
   )
}
