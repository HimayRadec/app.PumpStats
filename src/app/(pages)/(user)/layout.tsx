'use client'
import * as React from "react"
import { usePathname } from 'next/navigation'

import Link from "next/link"
import { cn } from "@/lib/utils"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"

import {
  Badge,
  BarChart4,
  Bell,
  Calendar as CalendarIcon,
  Cog,
  Dumbbell,
  Home,
  LineChart,
  Menu,
  Utensils
} from 'lucide-react'
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
} from "@/components/ui/sheet";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dateSelected = new Date();

  const [date, setDate] = React.useState<Date>(dateSelected)
  const pathname = usePathname()

  var pumpStatsLogo = "BarChart4"
  var navLinks = [
    {
      icon: Home,
      title: "Dashboard",
      href: "/dashboard",
    },
    {
      icon: Dumbbell,
      title: "Workout",
      href: "/workout",
    },
    {
      icon: Utensils,
      title: "Nutrition",
      href: "/nutrition",
    },
    {
      icon: LineChart,
      title: "Analytics",
      href: "/analytics",
    },
    {
      icon: Cog,
      title: "Settings",
      href: "/settings",
    },
  ]

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">

          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <BarChart4 className="h-6 w-6" />
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
                className={`${pathname == navLinks[0].href ? `bg-muted text-primary` : ``} flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary`}
              >
                <Home className="h-4 w-4" />
                {navLinks[0].title}
              </Link>

              <Link
                href={navLinks[1].href}
                className={`${pathname == (navLinks[1].href || "/workouts") ? `bg-muted text-primary` : ``} flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary`}
              >
                <Dumbbell className="h-4 w-4" />
                {navLinks[1].title}
                {/* <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                         6
                      </Badge> */}
              </Link>

              <Link
                href={navLinks[2].href}
                className={`${pathname == navLinks[2].href ? `bg-muted text-primary` : ``} flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary`}
              >
                <Utensils className="h-4 w-4" />
                {navLinks[2].title}
              </Link>

              <Link
                href={navLinks[3].href}
                className={`${pathname == navLinks[3].href ? `bg-muted text-primary` : ``} flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary`}
              >
                <LineChart className="h-4 w-4" />
                {navLinks[3].title}
              </Link>

              <Link
                href={navLinks[4].href}
                className={`${pathname == navLinks[4].href ? `bg-muted text-primary` : ``} flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary`}
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
                  <BarChart4 className="h-6 w-6" />
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

        <main className="h-full">
          {children}
        </main>

      </div>
    </div>
  )
}

