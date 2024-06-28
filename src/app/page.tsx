import NewsletterSignUp from "../components/authentication/NewsletterSignUp";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Pump Stats',
  description: 'Pump Stats Workout Tracker',
  metadataBase: new URL('https://pumpstats.app'),
};

export default async function Home() {


  return (
    <main className="">
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-center">
        <h1 className="text-3xl mb-1 font-extrabold tracking-tight lg:text-6xl">
          PUMP STATS
        </h1>
        <p className="text-sm text-muted-foreground">Coming Soon</p>
        <div className="mt-10">
          <NewsletterSignUp />
        </div>
      </div>
    </main>


  );
}
