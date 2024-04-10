import React from 'react';

// StackProps Interface
interface StackProps {
   children: React.ReactNode[];
   className?: string; // Optional prop for additional classNames
}

// Displays Elements Horizontally Centered with additional classNames
export function HStack({ children, className }: StackProps) {
   // Check if children is an array, if not, wrap it in an array
   const childrenArray = Array.isArray(children) ? children : [children];

   // Construct the classNames
   const classNames = `flex justify-center items-center gap-x-1 ${className || ''}`;

   return (
      <div className={classNames}>
         {childrenArray.map((child, index) => (
            <div key={index}>
               {child}
            </div>
         ))}
      </div>
   );
}

// Displays Elements Vertically Centered
export function VStack({ children, className }: StackProps) {

   // Check if children is an array, if not, wrap it in an array
   const childrenArray = Array.isArray(children) ? children : [children];

   // Construct the classNames
   const classNames = `flex justify-center items-center gap-x-1 ${className || ''}`;

   return (
      <div className={`flex flex-col items-center`}>

         {childrenArray.map((child, index) => (
            <div key={index}>
               {child}
            </div>
         ))}

      </div>
   );
}
