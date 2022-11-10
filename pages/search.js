import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { format } from "date-fns";
import searchResults from "../server/searchResults.json";
import InfoCard from "../components/InfoCard";

function Search() {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuest } = router.query;
  const formattedStartDate = format(new Date(startDate || null), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate || null), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuest} guests`} />

      <main className="flex">
        <section className="pt-14 px-6 flex-grow">
          <p className="text-xs">
            300+ Stays - {range} - for {noOfGuest} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex text-gray-800 whitespace-nowrap space-x-3 mb-5">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>

          <div className="flex flex-col">
          {searchResults?.map((item) => (
            <InfoCard
              key={item.id}
              img={item.img}
              location={item.location}
              title={item.title}
              description={item.description}
              star={item.star}
              price={item.price}
              total={item.total}
            />
          ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;
