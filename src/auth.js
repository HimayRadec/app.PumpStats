import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials"
import { getUserFromDb } from "./queries/mongoQueries";


export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                let user = null

                // logic to salt and hash password

                // logic to verify if user exists
                user = await getUserFromDb(credentials.email, credentials.password)

                if (!user) {
                    // No user found, so this is their first attempt to login
                    // meaning this is also the place you could do registration
                    throw new Error("[auth.js]: User not found.")
                }

                // return user object with the their profile data
                return user
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
});
