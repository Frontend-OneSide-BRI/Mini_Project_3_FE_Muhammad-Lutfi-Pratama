import { useEffect, useState } from "react";
import Header from "./header";
import Banner from "./banner";
import PopularMovie from "./popular-movie";
import SwipeMovie from "./swipe-movie";
import { useGetPopularMovieQuery } from "src/services/Movie/movies-api";
import { useGenerateTokenQuery } from "src/services/Auth/auth-api";

export default function Home() {
  const [activePage, setActivePage] = useState("home");
  const { isLoading, data } = useGenerateTokenQuery();

  // fetch popular movie from API rtk query
  return (
    <div>
      <Header activePageListener={page => setActivePage(page)} />
      {activePage === "home" ? (
        <>
          <Banner
            title="Movie stories you'd expect"
            description="Global streaming home of Disney, Pixar, Marvel, Star Wars and National Geographic"
          />
          <PopularMovie />
        </>
      ) : (
        <>
          <Banner
            title="Home of your favorites and more"
            description="Watch thousands of shows and movies, with plans starting at $5.99/month."
          />
          <SwipeMovie title="Trending" />
          <SwipeMovie title="Genre Favorite" />
        </>
      )}
    </div>
  );
}
