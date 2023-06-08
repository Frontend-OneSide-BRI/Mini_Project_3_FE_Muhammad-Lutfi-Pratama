import { logoHorizontalLight } from "src/assets/Logo";
import { useState, Fragment } from "react";
import { ProfileMenuIcon } from "src/components/Atom/MenuIcon";
import { useSearchMovieQuery } from "src/services/Movie/movies-api";

export default function NavbarBrowse({
  activePageListener,
  searchResultListener,
}) {
  let [activePage, setActivePage] = useState("browse");
  let [searchInput, setSearchInput] = useState("");

  const dataSearchFull = useSearchMovieQuery(searchInput);
  const dataMovieSearch = dataSearchFull?.data;
  searchResultListener(dataMovieSearch);

  const handleActivePage = page => {
    setActivePage(page);
    activePageListener(page);
  };

  const toggleActivePageStyle = page => {
    if (page === activePage) {
      return "font-semibold text-pink-800 text-md md:text-xl sm:text-lg md:hover:text-xl lg:text-2xl 2xl:text-3xl 2xl:hover:text-3xl lg:hover:text-2xl hover:text-lg";
    } else {
      return "opacity-50 text-sm hover:opacity-100 sm:text-md lg:text-lg 2xl:text-xl hover:text-lg lg:hover:text-xl 2xl:hover:text-2xl";
    }
  };

  const handleOnChange = e => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <Fragment>
      <nav
        className={
          "md:h-screen w-[90%] top-4 left-1/2 transform -translate-x-1/2 rounded-[25px] h-[100px] fixed z-10 md:static md:w-3/12 md:transform-none md:rounded-r-xl md:rounded-l-none bg-gray-100/40 md:bg-white md:backdrop-filter-none md:backdrop-blur-none shadow-2xl backdrop-filter backdrop-blur-lg items-center flex justify-between px-8 md:flex-col md:justify-between md:pb-16"
        }
      >
        <div className="flex items-center md:flex-col xl:mt-[-30px] lg:mt-[-20px]">
          <img
            src={logoHorizontalLight} 
            alt="logo"
            className="w-[100px] md:w-[200px] mr-8 md:mr-0"
          />
          <div className="fixed left-0 flex items-center mb-4 top-28 md:static">
            <label for="simple-search" class="sr-only">
              Search
            </label>
            <input
              type="text"
              id="simple-search"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
              placeholder="Search"
              onChange={handleOnChange}
              required
            />
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
              <button
                type="submit"
                class="p-2.5 ml-2 text-sm font-medium text-white bg-pink-700 rounded-lg border border-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
                <span class="sr-only">Search</span>
              </button>
            </div>
          </div>

          <div>
            <ul className="flex items-center justify-center gap-6 md:flex-col md:my-6">
              <li
                className={`${toggleActivePageStyle(
                  "browse"
                )} w-16 transition-all cursor-pointer`}
                onClick={() => handleActivePage("browse")}
              >
                Browse
              </li>
              <li
                className={`${toggleActivePageStyle(
                  "favorite"
                )} w-16 transition-all cursor-pointer`}
                onClick={() => handleActivePage("favorite")}
              >
                Favorite
              </li>
            </ul>
          </div>
        </div>
        <ProfileMenuIcon />
      </nav>
    </Fragment>
  );
}
