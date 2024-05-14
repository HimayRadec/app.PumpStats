import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card"

export function NutritionBlock() {
   return (
      <Card className='col-span-1 min-h-[330px] flex flex-col items-center'>
         <Label className='my-1 text-lg font-bold'>Meal Name</Label>

         {/* Macros Label  */}
         <div className="grid grid-cols-7 gap-1 gap-y-4 mt-2">
            <Label className='col-span-3'></Label>
            <Label className='col-span-1 text-center'>Cals</Label>
            <Label className='col-span-1 text-center'>Protein</Label>
            <Label className='col-span-1 text-center'>Carbs</Label>
            <Label className='col-span-1 text-center'>Fat</Label>

            {/* Food Items  */}
            <div className='flex flex-col col-span-3 ml-1'>
               <Label className='capitalize'>Food Name</Label>
               <Label className='lowercase font-thin	'>Amount unit, brand</Label>
            </div>
            <Label className='text-center'>100</Label>
            <Label className='text-center'>10g</Label>
            <Label className='text-center'>5g</Label>
            <Label className='text-center'>5g</Label>

            <div className='flex flex-col col-span-3 ml-1'>
               <Label className='capitalize'>Organic eggs</Label>
               <Label className='lowercase font-thin	'>2 Eggs</Label>
            </div>
            <Label className='text-center'>100</Label>
            <Label className='text-center'>10g</Label>
            <Label className='text-center'>5g</Label>
            <Label className='text-center'>5g</Label>

            <div className='flex flex-col col-span-3 ml-1'>
               <Label className='capitalize'>Organic eggs</Label>
               <Label className='lowercase font-thin	'>2 Eggs</Label>
            </div>
            <Label className='text-center'>100</Label>
            <Label className='text-center'>10g</Label>
            <Label className='text-center'>5g</Label>
            <Label className='text-center'>5g</Label>

            <div className='flex flex-col col-span-3 ml-1'>
               <Label className='capitalize'>Organic eggs</Label>
               <Label className='lowercase font-thin	'>2 Eggs</Label>
            </div>
            <Label className='text-center'>100</Label>
            <Label className='text-center'>10g</Label>
            <Label className='text-center'>5g</Label>
            <Label className='text-center'>5g</Label>

            <div className='flex flex-col col-span-3 ml-1'>
               <Label className='capitalize'>Organic eggs</Label>
               <Label className='lowercase font-thin	'>2 Eggs</Label>
            </div>
            <Label className='text-center'>100</Label>
            <Label className='text-center'>10g</Label>
            <Label className='text-center'>5g</Label>
            <Label className='text-center'>5g</Label>

            <div className='flex flex-col col-span-3 ml-1'>
               <Label className='capitalize'>Organic eggs</Label>
               <Label className='lowercase font-thin	'>2 Eggs</Label>
            </div>
            <Label className='text-center'>100</Label>
            <Label className='text-center'>10g</Label>
            <Label className='text-center'>5g</Label>
            <Label className='text-center'>5g</Label>

            {/* Overview  */}
            <div className='flex flex-col col-span-3 ml-1 mb-3'>
               <Label className='capitalize font-black'>Total</Label>
            </div>
            <Label className='text-center font-black'>100</Label>
            <Label className='text-center font-black'>10g</Label>
            <Label className='text-center font-black'>5g</Label>
            <Label className='text-center font-black'>5g</Label>
         </div>
      </Card >
   )
}

export function AddNutritionBlock() {
   return (
      <div className='col-span-1 border border-2 min-h-[330px] flex flex-col items-center'>
         <Button className='mb-5 mt-auto w-4/5 p-0'>
            <Link className='w-full h-full flex items-center justify-center' href="/nutrition/logMeal">
               Add Meal
            </Link>
         </Button>
      </div>
   )
}
