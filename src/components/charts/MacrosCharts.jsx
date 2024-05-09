'use client';
import React, { PureComponent } from 'react';
import { BarChart, Bar, CartesianGrid, Cell, Legend, PieChart, Pie, Sector, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const data = [
   { name: 'Protein', grams: 150, color: '#0088FE', unit: 'g', calsPerGram: 4, calories: 600 },
   { name: 'Carbs', grams: 300, color: '#00C49F', unit: 'g', calsPerGram: 4, calories: 1200 },
   { name: 'Fat', grams: 80, color: '#FFBB28', unit: 'g', calsPerGram: 9, calories: 720 },
];

const renderActiveShape = (props) => {
   const RADIAN = Math.PI / 180;
   const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
   const sin = Math.sin(-RADIAN * midAngle);
   const cos = Math.cos(-RADIAN * midAngle);
   const sx = cx + (outerRadius + 10) * cos;
   const sy = cy + (outerRadius + 10) * sin;
   const mx = cx + (outerRadius + 30) * cos;
   const my = cy + (outerRadius + 30) * sin;
   const ex = mx + (cos >= 0 ? 1 : -1) * 22;
   const ey = my;
   const textAnchor = cos >= 0 ? 'start' : 'end';

   return (
      <g>
         <text x={cx} y={cy} dy={8} textAnchor="middle" fill={payload.color}>
            {`${payload.name} ${payload.grams}g`}
         </text>
         <Sector
            cx={cx}
            cy={cy}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            startAngle={startAngle}
            endAngle={endAngle}
            fill={payload.color}
         />
         <Sector
            cx={cx}
            cy={cy}
            startAngle={startAngle}
            endAngle={endAngle}
            innerRadius={outerRadius + 6}
            outerRadius={outerRadius + 10}
            fill={payload.color}
         />
         <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={payload.color} fill="none" />
         <circle cx={ex} cy={ey} r={2} fill={payload.color} stroke="none" />
         <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#999">
            {`${(percent * 100).toFixed(1)}%`}
         </text>
         <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={15} textAnchor={textAnchor} fill="#999">
            {`${payload.grams * payload.calsPerGram} cals`}
         </text>
      </g>
   );
};

export class MacrosPieChart extends PureComponent {

   state = {
      activeIndex: 0,
   };

   onPieEnter = (_, index) => {
      this.setState({
         activeIndex: index,
      });
   };

   render() {
      return (
         <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
               <Pie
                  activeIndex={this.state.activeIndex}
                  activeShape={renderActiveShape}
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#fff"
                  dataKey="calories"
                  onMouseEnter={this.onPieEnter}

               >
                  {data.map((entry, index) => (
                     <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                     />
                  ))}
               </Pie>
            </PieChart>
         </ResponsiveContainer>
      );
   }
}

export class MacrosBarChart extends PureComponent {
   render() {
      return (
         <ResponsiveContainer width="100%" height="100%">
            <BarChart
               width={600}
               height={300}
               data={data}
               layout="vertical"
               margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
               <XAxis type="number" />
               <YAxis type="category" dataKey="name" />
               <Tooltip />
               <Legend />
               <Bar dataKey="grams" fill="#8884d8" />
               <Bar dataKey="calories" fill="#82ca9d" />
            </BarChart>
         </ResponsiveContainer>
      );
   }
}
