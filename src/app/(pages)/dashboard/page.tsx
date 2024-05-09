'use client'
import * as React from "react"
import Link from "next/link"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

import {
   Bell,
   Calendar as CalendarIcon,
   CircleUser,
   Cog,
   Dumbbell,
   Home,
   LineChart,
   Menu,
   Package,
   Package2,
   Search,
   ShoppingCart,
   Users,
   Utensils,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from "@/components/ui/card"
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from "@/components/ui/popover"
import {
   Sheet,
   SheetContent,
   SheetTrigger
} from "@/components/ui/sheet"


export default function Dashboard() {

   var navLinks = [
      {
         icon: Home,
         title: "Dashboard",
         href: "/dashboard",
      },
      {
         icon: ShoppingCart,
         title: "Workout",
         href: "/workout",
      },
      {
         icon: Package,
         title: "Foods",
         href: "/fooods",
      },
      {
         icon: LineChart,
         title: "Analytics",
         href: "/analytics",
      },
      {
         icon: Users,
         title: "Settings",
         href: "/settings",
      },
   ]

   const [date, setDate] = React.useState<Date>()

   return (

      <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-3 gap-3 p-3 h-full">
         <Card className="h-full">Calories</Card>
         <Card>Micros</Card>
         <Card className="h-full">Macros</Card>

         <Card className="row-span-3"> Body recovering</Card>
         <Card className="row-span-2">Todays Workout</Card>

         <Card className="h-full">Water Intake</Card>
         <Card className="h-full">Weekly Weight</Card>
         <Card className="col-span-2"> Monthly Activity</Card>

      </div>
   )
}