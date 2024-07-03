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
   workoutId: string;
   // notes?: string;
   // duration?: number;
   // loggedDate?: Date;
   exercises: Exercise[];
}

export interface UserProfile {
   name: string;
   age: number;
   weightInPounds: number;
   heightInInches: number;

   weightInKilograms: number;
   heightInCentimeters: number;

   calorieGoal: number;
   proteinGoal: number;
   carbsGoal: number;
   fatsGoal: number;

   workouts: String[];
}

export interface Food {
   foodName: string;
   grams?: number;
   ounces?: number;
   foodId: string;
   calories: number;
   protein: number;
   carbs: number;
   fats: number;
}

export interface Meal {
   mealName: string;
   mealId: string;
   notes?: string;
   loggedDate?: Date;
   foods: Food[];
}