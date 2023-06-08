import React from "react";
import { MovieStatusBadge } from "src/components/Atom/Badge";
import { ChartBarIcon } from "@heroicons/react/20/solid";
import { BASE_URL_IMG } from "src/config";

export default function MovieShowCard({ movie }) {
  return (
    <React.Fragment>
      <div className="w-full mt-6 bg-gray-900/80 rounded-[40px]">
        <div className="w-full h-[30vh] rounded-t-[50px] ">
          {movie !== undefined ? (
            <img
              src={`${BASE_URL_IMG}/${movie.poster_path}`}
              className="object-cover object-top w-full h-full rounded-t-[50px]"
              alt="a"
            />
          ) : (
            <> </>
          )}
        </div>
        <div className="flex flex-wrap justify-center gap-6 py-6 md:py-8 md:gap-10 lg:justify-start lg:py-2 lg:px-8">
          {/* Icons Content Item */}
          <MovieStatusBadge
            margin={8}
            text={`Rating: ${movie.vote_average}`}
            icon={ChartBarIcon}
          />
          <MovieStatusBadge
            text={`Popularity: ${movie.popularity}`}
            margin={8}
          />
          <MovieStatusBadge text={`Vote: ${movie.vote_count}`} margin={8} />
        </div>
      </div>
    </React.Fragment>
  );
}
