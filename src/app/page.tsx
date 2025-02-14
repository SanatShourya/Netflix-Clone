import Image from "next/image";
import { Movie } from "./typings";
import Header from "./components/Header";
import React from "react";
import Banner from "./components/Banner";
import requests from "./utils/requests";
import Row from "./components/Row";

async function fetchMovies() {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ]);

  return {
    netflixOriginals: netflixOriginals.results,
    trendingNow: trendingNow.results,
    topRated: topRated.results,
    actionMovies: actionMovies.results,
    comedyMovies: comedyMovies.results,
    horrorMovies: horrorMovies.results,
    romanceMovies: romanceMovies.results,
    documentaries: documentaries.results,
  };
}

export default async function Home() {
  const movies = await fetchMovies(); // Fetch movies inside the component

  return (
    <div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner netflixOriginals={movies.netflixOriginals} />
        <section className="md:space-y-24">
          <Row title="Trending Now" movies={movies.trendingNow} />
          <Row title="Top Rated" movies={movies.topRated} />
          <Row title="Action Thrillers" movies={movies.actionMovies} />
          {/* My List Component */}
          <Row title="Comedies" movies={movies.comedyMovies} />
          <Row title="Scary Movies" movies={movies.horrorMovies} />
          <Row title="Romance Movies" movies={movies.romanceMovies} />
          <Row title="Documentaries" movies={movies.documentaries} />
          as
        </section>
      </main>
    </div>
  );
}
