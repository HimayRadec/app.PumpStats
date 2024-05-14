import Link from "next/link"
import {
   Bell,
   CircleUser,
   CreditCard,
   ChevronLeft,
   ChevronRight,
   Copy,
   File,
   Home,
   LineChart,
   ListFilter,
   Menu,
   MoreVertical,
   Package,
   Package2,
   Search,
   ShoppingCart,
   SquareMenu,
   Truck,
   Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardFooter,
   CardTitle,
} from "@/components/ui/card"
import {
   DropdownMenu,
   DropdownMenuCheckboxItem,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



export default function Dashboard() {
   let orders = 0

   return (
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
         <div className="hidden border-r bg-muted/40 md:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
               <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                  <Link href="/" className="flex items-center gap-2 font-semibold">
                     <span className="">Restaurant Name</span>
                  </Link>
                  <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                     <Bell className="h-4 w-4" />
                     <span className="sr-only">Toggle notifications</span>
                  </Button>
               </div>
               <div className="flex-1">

                  <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                     <Link
                        href="/dashboard"
                        className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
                     >
                        <Home className="h-4 w-4" />
                        Dashboard
                     </Link>
                     <Link
                        href="#"
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                     >
                        <ShoppingCart className="h-4 w-4" />
                        Orders
                        {orders > 0 && (
                           <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                              {orders}
                           </Badge>
                        )}
                     </Link>
                     <Link
                        href="#"
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                     >
                        <SquareMenu className="h-4 w-4" />
                        Restaurant Menu
                     </Link>
                     <Link
                        href="#"
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                     >
                        <CreditCard className="h-4 w-4" />
                        Billing
                     </Link>
                  </nav>

               </div>
            </div>
         </div>
         <div className="flex flex-col">
            <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">

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
                     <nav className="grid gap-2 text-lg font-medium mt-2">
                        <Link
                           href="#"
                           className="flex items-center gap-2 text-lg font-semibold"
                        >
                           <span className="sr-only">Restaurant Name</span>
                        </Link>
                        <Link
                           href="/dashboard"
                           className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                        >
                           <Home className="h-5 w-5" />
                           Dashboard
                        </Link>
                        <Link
                           href="#"
                           className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                        >
                           <ShoppingCart className="h-5 w-5" />
                           Orders
                           {orders > 0 && (
                              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                                 {orders}
                              </Badge>
                           )}
                        </Link>
                        <Link
                           href="#"
                           className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                        >
                           <SquareMenu className="h-5 w-5" />
                           Restaurant Menu
                        </Link>
                        <Link
                           href="#"
                           className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                        >
                           <CreditCard className="h-5 w-5" />
                           Billing
                        </Link>
                     </nav>
                  </SheetContent>
               </Sheet>

               <div className="w-full flex-1">
                  {/* <form>
                     <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                           type="search"
                           placeholder="Search topic..."
                           className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                        />
                     </div>
                  </form> */}
               </div>
               Username
               <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                     <Button variant="secondary" size="icon" className="rounded-full">
                        <CircleUser className="h-5 w-5" />
                        <span className="sr-only">Toggle user menu</span>
                     </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                     <DropdownMenuLabel>My Account</DropdownMenuLabel>
                     <DropdownMenuSeparator />
                     <DropdownMenuItem>Settings</DropdownMenuItem>
                     <DropdownMenuItem>Support</DropdownMenuItem>
                     <DropdownMenuSeparator />
                     <DropdownMenuItem>Logout</DropdownMenuItem>
                  </DropdownMenuContent>
               </DropdownMenu>
            </header>
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
               <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2 mt-4 md:mt-8">
                  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                     <Card
                        className="sm:col-span-2" x-chunk="dashboard-05-chunk-0"
                     >
                        <CardHeader className="pb-3">
                           <CardTitle>Weekly Site Sessions</CardTitle>
                        </CardHeader>
                     </Card>

                     <Card x-chunk="dashboard-05-chunk-1">
                        <CardHeader className="pb-2">
                           <CardDescription>Order This Week</CardDescription>
                           <CardTitle className="text-4xl">$1,329</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <div className="text-xs text-muted-foreground">
                              +25% from last week
                           </div>
                        </CardContent>
                        <CardFooter>
                           {/* <Progress value={25} aria-label="25% increase" /> */}
                        </CardFooter>
                     </Card>
                     <Card x-chunk="dashboard-05-chunk-2">
                        <CardHeader className="pb-2">
                           <CardDescription>This Month</CardDescription>
                           <CardTitle className="text-4xl">$5,329</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <div className="text-xs text-muted-foreground">
                              +10% from last month
                           </div>
                        </CardContent>
                        <CardFooter>
                        </CardFooter>
                     </Card>
                  </div>
               </div>
            </main>
         </div>
      </div>
   )
}
