import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL_IMG } from "src/config";
import { useGetMovieByIdQuery } from "src/services/Movie/movies-api";

export default function DetailPage() {
  let navigate = useNavigate();
  const { id } = useParams();

  const { data: dataMovies } = useGetMovieByIdQuery(id);
  console.log(dataMovies);

  return (
    <div className="flex flex-col items-center justify-center p-16 text-center">
      <h1 className="text-3xl font-extrabold">Detail Page</h1>
      <h1 className="mt-4 text-2xl">{dataMovies?.title}</h1>

      <img
        src={`${BASE_URL_IMG}/${dataMovies?.poster_path}`}
        alt={`${dataMovies?.title}`}
        className="object-cover w-2/4 mt-10 shadow-2xl rounded-3xl"
      />

      <p className="w-3/4 mt-8 text-lg">{dataMovies?.overview}</p>

      <button onClick={() => navigate('/browse')} class="fixed left-8 top-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 ">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Back
        </span>
      </button>
    </div>
  );
}
