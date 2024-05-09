import React from 'react'

import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"


export default function Exercise() {
   return (
      <div className="relative h-screen flex justify-center">
         <div className='w-11/12'>
            <Card className='my-5 w-full'>
               <CardHeader>
                  <CardTitle>Workout Name</CardTitle>
                  <CardDescription>Exercise 1, Exercise 2, Exercise 3, Exercise 4,</CardDescription>
               </CardHeader>
               <CardContent className='flex gap-x-2'>
                  <p>Total Load</p>
                  <p>Total Sets</p>
                  <p>Total Reps</p>
               </CardContent>
               <CardFooter>
                  <p>Last Logged 4/25/2024</p>
               </CardFooter>
            </Card>

            <Card className='my-5 w-full'>
               <CardHeader>
                  <CardTitle>Workout Name</CardTitle>
                  <CardDescription>Exercise 1, Exercise 2, Exercise 3, Exercise 4,</CardDescription>
               </CardHeader>
               <CardContent className='flex gap-x-2'>
                  <p>Total Load</p>
                  <p>Total Sets</p>
                  <p>Total Reps</p>
               </CardContent>
               <CardFooter>
                  <p>Last Logged 4/25/2024</p>
               </CardFooter>
            </Card>

            <Card className='my-5 w-full'>
               <CardHeader>
                  <CardTitle>Workout Name</CardTitle>
                  <CardDescription>Exercise 1, Exercise 2, Exercise 3, Exercise 4,</CardDescription>
               </CardHeader>
               <CardContent className='flex gap-x-2'>
                  <p>Total Load</p>
                  <p>Total Sets</p>
                  <p>Total Reps</p>
               </CardContent>
               <CardFooter>
                  <p>Last Logged 4/25/2024</p>
               </CardFooter>
            </Card>

            <Card className='my-5 w-full'>
               <CardHeader>
                  <CardTitle>Workout Name</CardTitle>
                  <CardDescription>Exercise 1, Exercise 2, Exercise 3, Exercise 4,</CardDescription>
               </CardHeader>
               <CardContent className='flex gap-x-2'>
                  <p>Total Load</p>
                  <p>Total Sets</p>
                  <p>Total Reps</p>
               </CardContent>
               <CardFooter>
                  <p>Last Logged 4/25/2024</p>
               </CardFooter>
            </Card>

            <Card className='my-5 w-full'>
               <CardHeader>
                  <CardTitle>Workout Name</CardTitle>
                  <CardDescription>Exercise 1, Exercise 2, Exercise 3, Exercise 4,</CardDescription>
               </CardHeader>
               <CardContent className='flex gap-x-2'>
                  <p>Total Load</p>
                  <p>Total Sets</p>
                  <p>Total Reps</p>
               </CardContent>
               <CardFooter>
                  <p>Last Logged 4/25/2024</p>
               </CardFooter>
            </Card>

            <Card className='my-5 w-full'>
               <CardHeader>
                  <CardTitle>Workout Name</CardTitle>
                  <CardDescription>Exercise 1, Exercise 2, Exercise 3, Exercise 4,</CardDescription>
               </CardHeader>
               <CardContent className='flex gap-x-2'>
                  <p>Total Load</p>
                  <p>Total Sets</p>
                  <p>Total Reps</p>
               </CardContent>
               <CardFooter>
                  <p>Last Logged 4/25/2024</p>
               </CardFooter>
            </Card>
         </div>
         <Button className='absolute fixed bottom-5 w-11/12	'>New Workout</Button>
      </div>
   )
}
