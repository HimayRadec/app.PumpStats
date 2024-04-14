export { default } from "next-auth/middleware"

// https://nextjs.org/docs/app/building-your-application/routing/middleware

// Only these routes will require authentication
export const config = {
   matcher: [
      "/dashboard",
      "/user/dashboard",
      "/overview",
      "/user"
   ]
}