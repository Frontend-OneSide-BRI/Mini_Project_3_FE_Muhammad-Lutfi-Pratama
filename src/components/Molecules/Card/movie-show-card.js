import React from "react";
import { MovieStatusBadge } from "src/components/Atom/Badge";

export default function MovieShowCard() {
  return (
    <React.Fragment>
      <div className="w-full mt-6 bg-gray-900/60 rounded-[40px]">
        <div className="w-full h-[500px] rounded-t-[50px] bg-orange-600"></div>
        <div className="flex flex-wrap justify-center gap-6 py-6 md:py-8 md:gap-10 lg:justify-start lg:py-8 lg:px-8">
          {/* Icons Content Item */}
          <MovieStatusBadge margin="mr-8" text="230 h" />
          <MovieStatusBadge margin="mr-8" text="230 h" />
          <MovieStatusBadge margin="mr-8" text="230 h" />
        </div>
      </div>
    </React.Fragment>
  );
}
