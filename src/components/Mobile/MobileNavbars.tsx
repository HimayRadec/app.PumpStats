import React from 'react';

// Navbar Props Interface
interface NavbarsProps {
   children: React.ReactNode[];
   className?: string; // Optional prop for additional classNames
}

// Displays Elements Horizontally Centered with additional classNames
export function HorizontalNavbar({ children, className }: NavbarsProps) {
   // Check if children is an array, if not, wrap it in an array
   const childrenArray = Array.isArray(children) ? children : [children];

   // Construct the classNames
   const classNames = `flex justify-center items-center justify-around border sticky w-screen ${className || ''}`;

   return (
      <div className={classNames}>
         {childrenArray.map((child, index) => (
            <div key={index} className="flex-grow border text-center">
               {child}
            </div>
         ))}
      </div>
   );
}