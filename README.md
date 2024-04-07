This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
This is a template with user email/password login to a MongoDB Database setup.
Your .env.local file must contain the following tokens
MONGODB_URI = Database URI String
MONGO_PASSWORD = User Database Password
NEXTAUTH_URL = The URL the project will be accessed through when running (in development it is usually `http://localhost:3000`)
NEXTAUTH_SECRET = Used to encrypt the NextAuth.js JWT, and to hash email verification tokens. This is the default value for the secret option in NextAuth and Middleware.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Every route inside of the middleware.js const.matcher variable is protected by authentication. Edit these as needed.
Note the middleware.js file must be inside the src file. 

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
