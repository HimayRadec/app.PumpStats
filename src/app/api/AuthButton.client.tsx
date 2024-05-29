"use client";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { signIn, signOut } from "@/auth/helpers";

export default function AuthButtonClient() {
   const { data: session } = useSession();

   const handleSignOut = async () => {
      await signOut();
   };

   return session && session.user ? (
      <Button onClick={handleSignOut}>
         {session.user.name} : Sign Out
      </Button>
   ) : (
      <Button onClick={async () => await signIn()}>Sign In</Button>
   );
}
