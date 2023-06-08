import { logoHorizontalLight } from "src/assets/Logo";
import { useState, Fragment } from "react";
import { ProfileMenuIcon } from "src/components/Atom/MenuIcon";

export default function NavbarBrowse({ activePageListener }) {
  let [activePage, setActivePage] = useState("browse");

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
