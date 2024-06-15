import * as React from "react"
import Link from "next/link"
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from "@/components/ui/card"


export default async function Dashboard() {


   return (

      <div className="border grid grid-cols-1 grid-rows-4 md:grid-cols-3 gap-3 p-3 h-full">
         <Card className="h-full">Calories for</Card>
         <Card>
            Micros
         </Card>
         <Card className="h-full">Macros</Card>

         <Card className="row-span-3"> Body recovering</Card>
         <Card className="row-span-2">Todays Workout</Card>

         <Card className="h-full">Water Intake</Card>
         <Card className="h-full">Weekly Weight</Card>
         <Card className="col-span-2"> Monthly Activity</Card>


      </div>
   )
}