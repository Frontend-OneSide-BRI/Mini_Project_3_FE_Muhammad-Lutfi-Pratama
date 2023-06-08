import { logoHorizontalLight } from "src/assets/Logo";
import React from "react";
import { ProfileMenuIcon } from "src/components/Atom/MenuIcon";

export default function NavbarBrowse() {
  return (
    <React.Fragment>
      <nav
        className={
          "md:h-screen w-[90%] top-4 left-1/2 transform -translate-x-1/2 rounded-[25px] h-[100px] fixed md:static md:w-3/12 md:transform-none md:rounded-r-xl md:rounded-l-none bg-gray-100/40 md:bg-white md:backdrop-filter-none md:backdrop-blur-none shadow-lg backdrop-filter backdrop-blur-lg items-center flex justify-between px-8 md:flex-col md:justify-between md:pb-16"
        }
      >
        <div className="flex items-center md:flex-col xl:mt-[-30px] lg:mt-[-20px]">
          <img
            src={logoHorizontalLight}
            alt="logo"
            className="w-[120px] md:w-[200px] mr-8 md:mr-0"
          />
          <div>
            <ul className="flex items-center justify-center gap-6 md:flex-col md:my-6">
              <li className="w-16 text-lg font-semibold text-pink-800 transition-all cursor-pointer md:text-xl md:hover:text-xl lg:text-2xl 2xl:text-3xl 2xl:hover:text-3xl lg:hover:text-2xl hover:text-lg">
                Browse
              </li>
              <li className="w-16 transition-all opacity-50 cursor-pointer hover:opacity-100 text-md lg:text-lg 2xl:text-xl hover:text-lg lg:hover:text-xl 2xl:hover:text-2xl">
                Favorite
              </li>
            </ul>
          </div>
        </div>
        <ProfileMenuIcon />
      </nav>
    </React.Fragment>
  );
}
