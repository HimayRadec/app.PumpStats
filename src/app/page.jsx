import NewsletterSignUp from "./components/Forms/NewsletterSignUp";


export default async function Home() {


  return (
    <main className="">
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-center">
        <h1 className="text-4xl mb-1 lg:text-6xl">
          PUMP STATS
        </h1>
        <h1>Coming Soon</h1>
        <div className="mt-10">
          <NewsletterSignUp />
        </div>
      </div>
    </main>


  );
}
