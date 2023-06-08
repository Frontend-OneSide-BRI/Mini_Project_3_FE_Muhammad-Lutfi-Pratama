import { Fragment, useState } from "react";
import { MovieShowTabs } from "../Atom/Tabs";
import { MovieShowCard } from "../Molecules/Card";
import MovieShowTopBar from "../Molecules/TopBar/movie-show-topbar";

import { MovieCategorySwipe } from "../Molecules/Swipe";
import { MovieCategoryTopbar } from "../Molecules/TopBar";

export default function MoviePanel() {
  let [activeTab, setActiveTab] = useState("trailer");

  return (
    <Fragment>
      {/* Movie Panel */}
      <section className="pb-12 md:px-12 md:h-[93%] m-5 rounded-[50px] bg-indigo-950 lg:w-4/6 md:pt-6 md:pb-24 xl:pt-2 lg:h-[100%]">
        <MovieShowTopBar
          title={"Lorem Ipsum"}
          description={"lorem ipsum dolor sum ae fjkkk"}
        />
        <MovieShowTabs activeTabListener={tab => setActiveTab(tab)} />
        {activeTab === "trailer" ? <MovieShowCard /> : <p>Detail</p>}
        {/* Movie Swipe Category */}
        <div className="w-full px-10 mt-10 md:px-0 overflow-hidden xl:h-[35vh] ">
          <MovieCategoryTopbar />
          <MovieCategorySwipe />
        </div>
      </section>
    </Fragment>
  );
}
