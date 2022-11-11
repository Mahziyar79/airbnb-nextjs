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
        <section>
          <div className="hidden lg:inline-flex h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.182370726!2d-0.10159865000000001!3d51.52864165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2snl!4v1668104260305!5m2!1sen!2snl"
              width="600"
              height="100%"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;
