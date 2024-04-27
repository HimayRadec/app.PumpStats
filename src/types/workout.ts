export interface Set {
   setNumber: number;
   reps: number;
   weight: number;
}

export interface Exercise {
   exerciseName: string;
   sets: Set[];
}

export interface WorkoutData {
   workoutName: string;
   notes?: string;
   duration?: number;
   loggedDate?: Date;
   exercises: Exercise[];
}