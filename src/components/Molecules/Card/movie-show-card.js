import React from "react";
import { MovieStatusBadge } from "src/components/Atom/Badge";
import { ChartBarIcon } from "@heroicons/react/20/solid";

export default function MovieShowCard() {
  return (
    <React.Fragment>
      <div className="w-full mt-6 bg-gray-900/80 rounded-[40px]">
        <div className="w-full h-[30vh] rounded-t-[50px] bg-orange-600"></div>
        <div className="flex flex-wrap justify-center gap-6 py-6 md:py-8 md:gap-10 lg:justify-start lg:py-2 lg:px-8">
          {/* Icons Content Item */}
          <MovieStatusBadge margin={8} text="Rating" icon={ChartBarIcon} />
          <MovieStatusBadge margin={8} text="230 h" />
          <MovieStatusBadge margin={8} text="230 h" />
        </div>
      </div>
    </React.Fragment>
  );
}
