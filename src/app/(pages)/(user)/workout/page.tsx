'use client'
import React from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { firstSampleUserProfile } from '@/sampleData/userProfileData'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

export default function Dashboard() {
   const pathname = usePathname()

   return (
      <div className='container flex flex-col items-center'>
         <Label className='text-2xl font-bold'>No Workout Yet</Label>
         <Button className='m-3'>
            <Link href="/workout/workouts">Add A Workout</Link>
         </Button>
      </div>
   )
}
