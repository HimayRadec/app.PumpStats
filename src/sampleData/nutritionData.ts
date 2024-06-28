import { Meal, Food } from "@/types/workoutTypes";

export const firstSampleMeal: Meal = {
   mealName: 'Breakfast',
   mealId: '1',
   foods: [
      {
         foodName: 'Oatmeal',
         foodId: '1',
         grams: 100,
         calories: 150,
         protein: 5,
         carbs: 27,
         fats: 2
      },
      {
         foodName: 'Banana',
         foodId: '2',
         grams: 100,
         calories: 105,
         protein: 1,
         carbs: 27,
         fats: 0
      }
   ]
}