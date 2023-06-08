import { useEffect, useState } from "react";
import Header from "./header";
import Banner from "./banner";
import PopularMovie from "./popular-movie";
import SwipeMovie from "./swipe-movie";
import { useGetPopularMovieQuery } from "src/services/Movie/movies-api";

export default function Home() {
  const [activePage, setActivePage] = useState("home");
  let [popularMovie, setPopularMovie] = useState([]);
  const { isLoading, data } = useGetPopularMovieQuery();
  
  useEffect(() => {
    if (data) {
      setPopularMovie(data.results);
    }
  }, [data, popularMovie]);
  
  return (
    <div>
      <Header activePageListener={page => setActivePage(page)} />
      {activePage === "home" ? (
        <>
          <Banner
            title="Movie stories you'd expect"
            description="Global streaming home of Disney, Pixar, Marvel, Star Wars and National Geographic"
          />
          <PopularMovie isLoadingImg={isLoading} movies={popularMovie} />
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
