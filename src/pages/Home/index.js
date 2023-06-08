import { useEffect, useState } from "react";
import Header from "./header";
import Banner from "./banner";
import PopularMovie from "./popular-movie";
import SwipeMovie from "./swipe-movie";
import {
  useGetPopularMovieQuery,
  useTrendingMoviesWeeklyQuery,
} from "src/services/Movie/movies-api";
import { useDispatch } from "react-redux";
import {
  popularMovies,
  trendingWeeklyMovies,
} from "src/services/Movie/movies-slice";

export default function Home() {
  const [activePage, setActivePage] = useState("home");
  let [popularMovie, setPopularMovie] = useState([]);
  let [trendingMoviesWeekly, setTrendingMoviesWeekly] = useState([]);

  const { isLoading, data: popularMovieData } = useGetPopularMovieQuery();
  const { data: trendingMovieData } = useTrendingMoviesWeeklyQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (popularMovieData) {
      setPopularMovie(popularMovieData.results);
      dispatch(popularMovies(popularMovieData.results));
    }
    if (trendingMovieData) {
      setTrendingMoviesWeekly(trendingMovieData.results);
      dispatch(trendingWeeklyMovies(trendingMovieData.results));
    }
  }, [popularMovieData, popularMovie, trendingMovieData, dispatch]);

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
          <SwipeMovie movies={trendingMoviesWeekly} title="Weekly Trending" />
          {/* TODO: next */}
          {/* <SwipeMovie title="Genre Favorite" /> */}
        </>
      )}
    </div>
  );
}
