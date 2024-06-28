import { auth } from "@/auth";
import Logout from "@/components/Logout";

export default async function Dashboard() {

   const session = await auth();

   return (

      <div>
         Hello {session?.user?.name}
         <Logout />
      </div>
   )
}