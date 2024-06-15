import { useSession, signIn, signOut } from "next-auth/react";

export default function Test() {
   const { data: session } = useSession();

   if (session) {
      return (
         <div>
            <p>Signed in as {session.user.email}</p>
            <p>Welcome, {session.user.name}!</p>
            <button onClick={() => signOut()}>Sign out</button>
         </div>
      );
   } else {
      return (
         <div>
            <p>Not signed in</p>
            <button onClick={() => signIn()}>Sign in</button>
         </div>
      );
   }
}
