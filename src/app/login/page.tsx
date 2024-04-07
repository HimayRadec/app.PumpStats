import Link from "next/link";
import Image from 'next/image';

export default function LoginPage() {
   return (
      <div className="flex flex-col items-center justify-center h-screen">
         <Link href="/" className="mb-8">
            <Image
               src="/logo.png"
               alt="Logo"
               width={64}
               height={64}
            />
         </Link>
         <h1 className="text-3xl font-bold mb-4">Login</h1>
         {/* Login form */}
         <form className="flex flex-col items-center">
            <input type="email" placeholder="Email" className="w-full mb-4 p-1 rounded border border-gray-300 focus:outline-none" />
            <input type="password" placeholder="Password" className="w-full mb-4 p-1 rounded border border-gray-300 focus:outline-none" />
            <button type="submit" className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 transition duration-300">Login</button>
         </form>
         <p className="mt-4">Don&apos;t have an account? <Link href="/register" className="text-blue-500 hover:underline">Register here</Link></p>
      </div>
   );
}
