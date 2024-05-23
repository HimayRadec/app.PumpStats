import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { NutritionBlock, AddNutritionBlock } from "@/components/nutritionBlockLog"

import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card"

export default function Nutrition() {

   return (
      <div className="border h-full">
         {/* <div className='container flex flex-col items-center '>
            <Label className='text-2xl font-bold'>No Nutrition Yet</Label>
            <Button className='m-3'>
               <Link href="/nutrition">Add Nutrition</Link>
            </Button>
         </div> */}
         <div className="grid auto-rows-auto sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 m-5">
            <NutritionBlock />
            <NutritionBlock />
            <NutritionBlock />

            <NutritionBlock />
            <NutritionBlock />
            <NutritionBlock />

            <NutritionBlock />
            <NutritionBlock />
            <NutritionBlock />

            <NutritionBlock />
            <NutritionBlock />
            <NutritionBlock />

            <AddNutritionBlock />
         </div>
      </div>
   )
}
