import React from "react";
import { MovieShowMenuIcon } from "src/components/Atom/MenuIcon";

export default function MovieShowTopBar({ title, description }) {
  return (
    <React.Fragment>
      <div className="flex flex-col items-center justify-between w-full gap-10 py-4 pt-24 md:justify-center md:flex-wrap lg:justify-between lg:flex-nowrap md:pt-8 md:flex-row">
        {/* Header Profile Movie */}
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 md:scale-90 rounded-[26px] bg-slate-400"></div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold text-white md:text-xl">
              {title}
            </h1>
            <p className="text-sm text-white md:text-xs">
              {description}
            </p>
          </div>
        </div>
        {/* Header tools */}
        <div className="flex justify-end gap-5">
          <MovieShowMenuIcon />
          <MovieShowMenuIcon />
          <MovieShowMenuIcon width={10} />
        </div>
      </div>
    </React.Fragment>
  );
}
