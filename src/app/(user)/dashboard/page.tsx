import React from 'react'
import { auth } from "@/auth";
import Logout from '@/components/authentication/UserLogout';

async function Dashboard() {
   const session = await auth();

   return (
      <div>
         <div>Hello  {session?.user?.name} </div>
         <Logout />
      </div>
   )
}

export default Dashboard