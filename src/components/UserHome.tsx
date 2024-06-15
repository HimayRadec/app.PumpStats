"use client";

import React from 'react'
import { useSession } from "next-auth/react";

function UserHome() {
   const { data: session } = useSession();

   return (
      <div>
         <h1>User Page</h1>
         <p>Welcome, {session?.user?.name ?? 'friend'}!</p>
      </div>
   )
}

export default UserHome