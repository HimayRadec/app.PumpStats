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
         title: "Exercises",
         href: "/exercises",
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
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
         <div className="hidden border-r bg-muted/40 md:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
               <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                  <Link href="/" className="flex items-center gap-2 font-semibold">
                     <Package2 className="h-6 w-6" />
                     <span className="">Pump Stats</span>
                  </Link>
                  <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                     <Bell className="h-4 w-4" />
                     <span className="sr-only">Toggle notifications</span>
                  </Button>
               </div>
               <div className="flex-1">
                  <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                     <Link
                        href={navLinks[0].href}
                        className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
                     >
                        <Home className="h-4 w-4" />
                        {navLinks[0].title}
                     </Link>
                     <Link
                        href={navLinks[1].href}
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                     >
                        <Dumbbell className="h-4 w-4" />
                        {navLinks[1].title}
                        {/* <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                           6
                        </Badge> */}
                     </Link>
                     <Link
                        href={navLinks[2].href}
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                     >
                        <Utensils className="h-4 w-4" />
                        {navLinks[2].title}
                     </Link>
                     <Link
                        href={navLinks[3].href}
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                     >
                        <LineChart className="h-4 w-4" />
                        {navLinks[3].title}
                     </Link>
                     <Link
                        href={navLinks[4].href}
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                     >
                        <Cog className="h-4 w-4" />
                        {navLinks[4].title}
                     </Link>
                  </nav>
               </div>
               <div className="mt-auto p-4">
                  <Card x-chunk="dashboard-02-chunk-0">
                     <CardHeader className="p-2 pt-0 md:p-4">
                        <CardTitle>Upgrade to Pro</CardTitle>
                        <CardDescription>
                           Unlock all features and get unlimited access to our support
                           team.
                        </CardDescription>
                     </CardHeader>
                     <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                        <Button size="sm" className="w-full">
                           Upgrade
                        </Button>
                     </CardContent>
                  </Card>
               </div>
            </div>
         </div>
         <div className="flex flex-col">
            <header className="flex h-14 items-center gap-4 px-4 lg:h-[60px] lg:px-6">
               <Sheet>
                  <SheetTrigger asChild>
                     <Button
                        variant="outline"
                        size="icon"
                        className="shrink-0 md:hidden"
                     >
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                     </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="flex flex-col">
                     <nav className="grid gap-2 text-lg font-medium">
                        <Link
                           href="/"
                           className="flex items-center gap-2 text-lg font-semibold"
                        >
                           <Package2 className="h-6 w-6" />
                           Pump Stats
                           <span className="sr-only">Pump Stats</span>
                        </Link>
                        <Link
                           href={navLinks[0].href}
                           className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                        >
                           <Home className="h-5 w-5" />
                           {navLinks[0].title}

                        </Link>
                        <Link
                           href={navLinks[1].href}
                           className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                        >
                           <Dumbbell className="h-5 w-5" />
                           {navLinks[1].title}

                           <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                              6
                           </Badge>
                        </Link>
                        <Link
                           href={navLinks[2].href}
                           className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                        >
                           <Utensils className="h-5 w-5" />
                           {navLinks[2].title}

                        </Link>
                        <Link
                           href={navLinks[3].href}
                           className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                        >
                           <LineChart className="h-5 w-5" />
                           {navLinks[3].title}

                        </Link>
                        <Link
                           href={navLinks[4].href}
                           className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                        >
                           <Cog className="h-5 w-5" />
                           {navLinks[4].title}

                        </Link>
                     </nav>
                     <div className="mt-auto">
                        <Card>
                           <CardHeader>
                              <CardTitle>Upgrade to Pro</CardTitle>
                              <CardDescription>
                                 Unlock all features and get unlimited access to our
                                 support team.
                              </CardDescription>
                           </CardHeader>
                           <CardContent>
                              <Button size="sm" className="w-full">
                                 Upgrade
                              </Button>
                           </CardContent>
                        </Card>
                     </div>
                  </SheetContent>
               </Sheet>
               <Label className="text-2xl font-bold">Hello Himay</Label>
               <div className="ml-auto mr-4">
                  <Popover>
                     <PopoverTrigger asChild>
                        <Button
                           variant={"outline"}
                           className={cn(
                              "w-[280px] justify-start text-left font-normal",
                              !date && "text-muted-foreground"
                           )}
                        >
                           <CalendarIcon className="mr-2 h-4 w-4" />
                           {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                     </PopoverTrigger>
                     <PopoverContent className="w-auto p-0">
                        <Calendar
                           mode="single"
                           selected={date}
                           onSelect={setDate}
                           initialFocus
                        />
                     </PopoverContent>
                  </Popover>
               </div>

            </header>

            <main className="grid grid-cols-1 grid-rows-4 md:grid-cols-3 gap-3 p-3 h-full">
               <Card className="h-full">Calories</Card>
               <Card>Micros</Card>
               <Card className="h-full">Macros</Card>

               <Card className="row-span-3"> Body recovering</Card>
               <Card className="row-span-2">Todays Workout</Card>

               <Card className="h-full">Water Intake</Card>
               <Card className="h-full">Weekly Weight</Card>
               <Card className="col-span-2"> Monthly Activity</Card>

            </main>

         </div>
      </div>
   )
}