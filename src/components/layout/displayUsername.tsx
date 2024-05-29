import React from 'react'
import { auth } from "@/auth";
import { Label } from '../ui/label';


async function DisplayUsername() {
   const session = await auth();

   return (
      <Label>{session?.user?.name}</Label>
   )
}

export default DisplayUsername