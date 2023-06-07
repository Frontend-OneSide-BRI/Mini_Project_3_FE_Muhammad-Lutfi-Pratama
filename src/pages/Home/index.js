import React, { useState } from "react";
import Header from "./header";
import Banner from "./banner";
import PopularMovie from "./popular-movie";

export default function Home() {
  const [activePage, setActivePage] = useState("home");

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
        <Banner />
      )}
    </div>
  );
}
