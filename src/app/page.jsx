import { HomeNavbar } from "@/components/Navbars";


export default async function Home() {


  return (
    <main className="flex flex-col justify-center align-center">
      <HomeNavbar />
      <h1>Pump Stats</h1>
    </main>
  );
}
