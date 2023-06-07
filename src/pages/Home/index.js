import React from "react";
import Header from "./header";
import Banner from "./banner";
import PopularMovie from "./popular-movie";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <PopularMovie />
    </div>
  );
}
