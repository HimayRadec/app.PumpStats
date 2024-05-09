'use client';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
   { name: 'Carbohydrates', value: 165, unit: 'g' },
   { name: 'Proteins', value: 135, unit: 'g' },
   { name: 'Fats', value: 45, unit: 'g' },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.25;
   const x = cx + radius * Math.cos(-midAngle * RADIAN);
   const y = cy + radius * Math.sin(-midAngle * RADIAN);

   return (
      <g>
         <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${data[index].value}${data[index].unit}`}
         </text>
      </g>
   );
};




export default class MacrosPieChart extends PureComponent {

   render() {
      return (
         <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
               <Pie
                  activeIndex={[0, 1, 2]}
                  activeShape={renderActiveShape}

                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  innerRadius={35}
                  outerRadius={150}
                  fill="#8884d8"
                  dataKey="value"

               >
                  {data.map((entry, index) => (
                     <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                     />
                  ))}
               </Pie>
            </PieChart>
         </ResponsiveContainer>
      );
   }
}

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
         <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
            Macros
         </text>
         <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={0} textAnchor={textAnchor} fill="#999">
            {`grams`}
         </text>
         <Sector
            cx={cx}
            cy={cy}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            startAngle={startAngle}
            endAngle={endAngle}
            fill={fill}
         />
         <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
         <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
         <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
            {`${(percent * 100).toFixed(2)}%`}
         </text>
      </g>
   );
};

export class DetailedMacrosPieChart extends PureComponent {

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
                  activeIndex={[0, 1, 2]}
                  activeShape={renderActiveShape}
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#ffffff"
                  dataKey="value"
               />
            </PieChart>
         </ResponsiveContainer>
      );
   }
}
