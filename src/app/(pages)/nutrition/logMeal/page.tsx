import React from 'react'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from "@/components/ui/textarea"


export default function logMeal() {
   return (
      <div className=''>
         <div className="flex justify-between bg-background	">
            <Button className='bg-transparent text-primary hover:bg-transparent hover:text-orange-700 font-light text-base'>
               <Link href="/workout/workouts">CANCEL</Link>
            </Button>
            <Button className='bg-transparent text-primary hover:bg-transparent hover:text-orange-700 font-light text-base'>SAVE</Button>
         </div>
         <div className="flex flex-col bg-background mx-auto lg:w-4/5 ">
            <Label className='ml-3 mr-auto'>Foods</Label>

            <Button variant="link" className='ml-3 mr-auto p-0'>Add Food</Button>
            <Textarea placeholder='Additional Insutrctions...' />

         </div>
      </div>
   )
}
