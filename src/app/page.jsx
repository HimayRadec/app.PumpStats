import NewsletterSignUp from "./components/Forms/NewsletterSignUp";


export default async function Home() {


  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-5xl mb-1 lg:text-6xl">
          PUMP STATS
        </h1>
        <h1>Coming Soon</h1>
      </div>
      <div className="mt-10">
        <NewsletterSignUp />
      </div>
    </main>


  );
}
