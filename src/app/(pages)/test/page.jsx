import React from 'react'

import AreaChartComponent from '@/components/charts/AreaChart';
import { MacrosPieChart, MacrosBarChart } from '../../../components/charts/MacrosCharts';


export default function Dashboard() {
   const data = [
      { name: 'Protein', grams: 150, color: '#0088FE', unit: 'g', calsPerGram: 4, calories: 600 },
      { name: 'Carbs', grams: 300, color: '#00C49F', unit: 'g', calsPerGram: 4, calories: 1200 },
      { name: 'Fat', grams: 80, color: '#FFBB28', unit: 'g', calsPerGram: 9, calories: 720 },
   ];

   return (
      <main className="flex min-h-screen flex-col items-center justify-center px-4 md:px-8 xl:px-10 py-44">
         <div className="grid grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 w-full gap-10 max-w-[1400px]">
            <GridItem title="Area Chart">
               <AreaChartComponent />
            </GridItem>

            <GridItem title="Pie Chart">
               <MacrosPieChart />
            </GridItem>

            <GridItem title="Detailed Pie Chart">
               <MacrosBarChart />
            </GridItem>
         </div>
      </main>
   );
}

function GridItem({ title, children }) {
   return (
      <div className=" h-[400px] flex flex-col items-center justify-center p-4 border border-slate-900 bg-slate-900/50 rounded-xl">
         <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
         {children}
      </div>
   );
}