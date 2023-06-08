import { Fragment, useState } from "react";
import { MovieShowTabs } from "../Atom/Tabs";
import { MovieShowCard } from "../Molecules/Card";
import MovieShowTopBar from "../Molecules/TopBar/movie-show-topbar";

import { MovieCategorySwipe } from "../Molecules/Swipe";
import { MovieCategoryTopbar } from "../Molecules/TopBar";

export default function MoviePanel({ movies }) {
  let [activeTab, setActiveTab] = useState("trailer");

  return (
    <Fragment>
      {/* Movie Panel */}
      <section className="pb-12 md:px-12 md:h-[93%] m-5 rounded-[50px] bg-indigo-950 lg:w-4/6 md:pt-6 md:pb-24 xl:pt-2 lg:h-[100%]">
        <MovieShowTopBar
          title={movies[0].title}
          description={movies[0].original_title}
        />
        <MovieShowTabs activeTabListener={tab => setActiveTab(tab)} />
        {activeTab === "trailer" ? (
          <MovieShowCard movie={movies[0]} />
        ) : (
          <p>Detail</p>
        )}
        {/* Movie Swipe Category */}
        <div className="w-full px-10 mt-10 md:px-0 overflow-hidden xl:h-[35vh] ">
          <MovieCategoryTopbar />
          <MovieCategorySwipe movies={movies} />
        </div>
      </section>
    </Fragment>
  );
}
