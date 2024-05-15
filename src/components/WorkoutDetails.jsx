import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import React, { useState, useRef } from 'react';

function WorkoutDetails({ workoutData }) {
   const [exercises, setExercises] = useState(workoutData.exercises);
   const isAddingSet = useRef(false);

   const addSet = (exerciseIndex) => {
      if (isAddingSet.current) return;
      isAddingSet.current = true;

      setExercises(prevExercises => {
         const updatedExercises = [...prevExercises];
         updatedExercises[exerciseIndex].sets.push({
            setNumber: updatedExercises[exerciseIndex].sets.length + 1,
            reps: 0,
            weight: 0,
         });
         return updatedExercises;
      });

      setTimeout(() => {
         isAddingSet.current = false;
      });
   };

   return (
      <div>
         <h2>Workout: {workoutData.workoutName}</h2>
         <p>Notes: {workoutData.notes}</p>

         <div>
            {exercises.map((exercise, exerciseIndex) => (
               <div key={exerciseIndex}>

                  <h3>Exercise: {exercise.exerciseName}</h3>
                  <ul>
                     {exercise.sets.map((set, setIndex) => (
                        <li key={setIndex}>
                           Set {set.setNumber}: {set.reps} reps, {set.weight} lbs
                        </li>
                     ))}
                  </ul>
                  <Separator />
                  <Button variant="link" onClick={() => addSet(exerciseIndex)}>Add Set</Button>

               </div>
            ))}
         </div>

      </div>
   );
}

export default WorkoutDetails;
