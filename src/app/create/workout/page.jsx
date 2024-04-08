'use client';
import React from 'react'
import '@/styles/workout.css'

function handleInputChange(event) {
   const inputValue = event.target.value;
   if (inputValue.length > 3) {
      event.target.value = inputValue.slice(0, 3);
   }
}

function page() {
   return (
      <div className='border flex flex-col align-items mx-10'>
         <h1>Shoulders and Triceps</h1>
         <h2>Rear Delt Fly</h2>
         <div className="flex mt-4">
            <h3 className='setNumber'>1</h3>
            <input type="number" max="999" onInput={handleInputChange} />
            <div className="relative border-red-900">
               <input type="number" max="999" onInput={handleInputChange} />
               <div className="absolute right-1 text-xs text-gray-500 border">sets</div>
            </div>
         </div>
      </div>
   );
}

export default page