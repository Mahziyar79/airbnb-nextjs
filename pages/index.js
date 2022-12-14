import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import exploreData from "../server/exploreData.json";
import cardsData from "../server/cardsData.json";
import SmallCard from "../components/SmallCard";
import MadiumCard from "../components/MadiumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Airbnb</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <Banner />

      <main className="max-w-7xl mx-auto px-6 sm:px-16">
        <section className="pt-6">
          <h2 className="text-3xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) => (
              <SmallCard
                key={Math.random() * 100}
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="py-8 text-3xl font-semibold pb-5">Live Anywhere</h2>
          <div className="flex space-x-4 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map((item) => (
              <MadiumCard
                key={Math.random() * 100}
                img={item.img}
                title={item.title}
              />
            ))}
          </div>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>

      <Footer />
    </div>
  );
}

// export async function getStaticProps(){
//   // const exploreData = await fetch("https://links.papareact.com/pyp").then(res => res.json());
//   return{
//     props : {
//       exploreData
//     }
//   }
// }
