import { useState } from "react";
import { logoHorizontalDark } from "src/assets/Logo";

export default function Header({ activePageListener }) {
  let [activePage, setActivePage] = useState("home");

  const handleActivePage = page => {
    activePageListener(page);
    setActivePage(page);
  };

  const handleStyleActivePage = selectedPage => {
    if (selectedPage === "home") {
      return "w-16 text-lg font-semibold cursor-pointer hover:text-lg";
    } else {
      return "w-16 opacity-50 cursor-pointer hover:opacity-100 text-md hover:text-lg";
    }
  };

  return (
    <div className="relative flex flex-col justify-between w-full md:flex-row md:inline-block md:p-4">
      <section className="absolute z-0 w-full md:ml-6 md:w-2/6 lg:w-5/12 md:inline-block">
        <img
          src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80"
          alt="banner"
          className="object-cover h-[500px] md:h-[95vh] md:rounded-3xl w-full shadow-2xl rounded-b-[60px]"
        />
      </section>
      <section className="z-10 w-full md:w-4/6 lg:w-7/12 md:float-right order-first md:order-none px-6 rounded-b-[60px] bg-gray-800/20 backdrop-filter backdrop-blur-lg md:backdrop-filter-none md:bg-transparent md:py-6 lg:pl-16">
        <nav className="flex items-center justify-between w-full mx-auto md:pl-8">
          <img
            src={`${logoHorizontalDark}`}
            className="w-[130px] md:hidden"
            alt="logo"
          />
          <ul className="flex flex-wrap items-center justify-center w-[200px] gap-8 text-white lg:4/6 md:text-black">
            <li
              onClick={() => handleActivePage("home")}
              className={handleStyleActivePage("home")}
            >
              Home
            </li>
            <li
              onClick={() => handleActivePage("curated")}
              className={handleStyleActivePage("curated")}
            >
              Curated
            </li>
          </ul>
          <button className="lg:w-[140px] shadow-2xl relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-md text-white font-medium hover:scale-105 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 md:rounded-full md:px-0.5 md:py-0.5">
            <span className="relative px-6 py-2 text-xs transition-all duration-75 ease-in rounded-md group-hover:bg-opacity-0 sm:text-md md:text-black hover:text-white md:bg-white md:rounded-full md:px-12 md:py-2 md:text-sm">
              Login
            </span>
          </button>
        </nav>
      </section>
    </div>
  );
}
