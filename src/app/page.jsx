import { HomeNavbar } from "@/app/components/Navbars";
import NewsletterSignUp from "./components/Input/NewsletterSignUp";


export default async function Home() {


  return (
    <main className="">
      {/* <HomeNavbar /> */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-6xl mb-1">
          PUMP STATS
        </h1>
        <h1>Coming Soon</h1>
        <NewsletterSignUp />
      </div>
    </main>

  );
}
