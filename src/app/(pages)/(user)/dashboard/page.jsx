import SideNavbar from "@/app/components/Navbars/SideNavbar";
import Card from "@/app/components/Data/Card";

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
         <SideNavbar className="px-5" />
         <div className="flex-1 grid grid-cols-6 grid-rows-5 gap-x-5 gap-y-10 p-10">
            <Card text={`Weekly Workout Tracker Current Week: ${currentWeek}`} columnSpan="3"></Card>
            <Card text="Body Image" columnSpan="2" rowSpan="3"></Card>
            <Card text="Todays Workout"></Card>
            <Card text="Calories"></Card>
            <Card text="Macros"></Card>
            <Card text="Average Weight"></Card>
         </div>
      </div>

   )
}
