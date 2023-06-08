import React from "react";
import { MovieShowTabs } from "../Atom/Tabs";
import { MovieShowCard } from "../Molecules/Card";
import MovieShowTopBar from "../Molecules/TopBar/movie-show-topbar";

export default function MoviePanel() {
  return (
    <React.Fragment>
      <MovieShowTopBar
        title={"Lorem Ipsum"}
        description={"lorem ipsum dolor sum ae fjkkk"}
      />
      <MovieShowTabs />
      <MovieShowCard />
    </React.Fragment>
  );
}
