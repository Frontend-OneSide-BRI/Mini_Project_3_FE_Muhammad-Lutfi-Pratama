import React from "react";
import { MovieShowTabs } from "../Atom/Tabs";
import { MovieShowCard } from "../Molecules/Card";
import MovieShowTopBar from "../Molecules/TopBar/movie-show-topbar";
import { MovieShowMenuIcon } from "../Atom/MenuIcon";
import { MovieCategoryDropdown } from "../Atom/Dropdown";

export default function MoviePanel() {
  return (
    <React.Fragment>
      {/* Movie Panel */}
      <section className="h-screen md:px-12 md:h-[93%] m-10 rounded-[50px] bg-purple-950 lg:w-4/6 md:pt-6">
        <MovieShowTopBar
          title={"Lorem Ipsum"}
          description={"lorem ipsum dolor sum ae fjkkk"}
        />
        <MovieShowTabs />
        <MovieShowCard />

        {/* Movie Swipe Category */}
        <div className="w-full px-10 mt-10">
          <div className="flex items-center justify-between">
            <div>
              {/* Dropdown */}
              <MovieCategoryDropdown />
            </div>
            <div>
              <MovieShowMenuIcon width={10} />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
