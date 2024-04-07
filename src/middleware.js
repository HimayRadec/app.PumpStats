export { default } from "next-auth/middleware"

// Only these routes will require authentication
export const config = {
   matcher: [
      "/dashboard",
      "/overview"
   ]
}