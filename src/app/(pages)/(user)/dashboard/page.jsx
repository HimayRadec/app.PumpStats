import SideNavbar from "@/app/components/Navbars/SideNavbar";
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"


// [  card                 cols x rows]
// weekly workout tracker     2 x 1
// body image                 2 x 3
// todays workout             1 x 1
// calories                   1 x 1
// macros                     1 x 1
// weight                     2 x 1

function getCurrentWeek() {
   const today = new Date();
   const startOfYear = new Date(today.getFullYear(), 0, 1);
   const weekNumber = Math.ceil((((today - startOfYear) / 86400000) + startOfYear.getDay() + 1) / 7);
   return weekNumber;
}

export default function Dashboard() {

   const currentWeek = getCurrentWeek();


   return (
      <div className="flex">
         <div>
            <Button>Button</Button>
            <Card>
               <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card Description</CardDescription>
               </CardHeader>
               <CardContent>
                  <p>Card Content</p>
               </CardContent>
               <CardFooter>
                  <p>Card Footer</p>
               </CardFooter>
            </Card>

         </div>
      </div>

   )
}
