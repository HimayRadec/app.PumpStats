'use client'

import { doCredentialLogin } from "@/app/actions";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from 'react';

import { Button } from "@/components/ui/button";
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginUser() {
   const router = useRouter();
   const [error, setError] = useState("");

   async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      setError(""); // Reset error state

      const formData = new FormData(event.currentTarget);

      try {
         const response = await doCredentialLogin(formData);

         if (response.error) {
            console.error(response.error);
            setError(response.error.message);
         } else {
            router.push("/dashboard");
         }
      } catch (e) {
         console.error(e);
         setError("Invalid Credentials");
      }
   }

   return (
      <Card className="mx-auto max-w-sm mt-16">
         <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
               Enter your email below to login to your account
            </CardDescription>
         </CardHeader>
         <CardContent>
            <form onSubmit={onSubmit} className="grid gap-4">
               <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                     id="email"
                     name="email"
                     type="email"
                     placeholder="m@example.com"
                     required
                  />
               </div>
               <div className="grid gap-2">
                  <div className="flex items-center">
                     <Label htmlFor="password">Password</Label>
                     <Link href="#" className="ml-auto inline-block text-sm underline">
                        Forgot your password?
                     </Link>
                  </div>
                  <Input id="password" name="password" type="password" required />
               </div>
               {error && <p className="text-red-500 text-sm">{error}</p>}
               <Button type="submit" className="w-full">
                  Login
               </Button>
               <Button variant="outline" className="w-full">
                  Login with Google
               </Button>
            </form>
            <div className="mt-4 text-center text-sm">
               Don&apos;t have an account?{" "}
               <Link href="/register" className="underline">
                  Sign up
               </Link>
            </div>
         </CardContent>
      </Card>
   );
}
