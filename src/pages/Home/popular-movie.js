import { useNavigate } from "react-router-dom";
import LoadingIcon from "src/components/Atom/AnimatedIcon/loading-icon";
import { BASE_URL_IMG } from "src/config";

export default function PopularMovie({ isLoadingImg = true, movies }) {
  const navigate = useNavigate();
  movies = movies.slice(0, 5);

  return (
    <div className="w-5/6 px-8 mx-auto mt-16 md:mt-[80px] md:w-7/12 md:float-right md:mr-6 lg:w-6/12 xl:mr-12 lg:px-12 xl:px-20">
      <section className="flex justify-between mb-4">
        <p className="text-xl font-semibold md:text-2xl xl:text-3xl">Popular</p>
        <p
          onClick={() => navigate("/browse")}
          className="font-bold text-pink-700 cursor-pointer text-md md:text-xl hover:scale-110"
        >
          Explore All
        </p>
      </section>
      {!isLoadingImg ? (
        <section
          id="controls-carousel"
          className="relative flex flex-wrap justify-center gap-8 overflow-hidden md:gap-6"
          data-carousel="static"
        >
          {/* Cards */}
          {movies.map((movie, i) => {
            return (
              <div
                key={i}
                className="w-full h-[500px] sm:w-[400px] sm:h-[600px] md:w-[300px] md:h-[400px] lg:w-[250px] lg:h-[350px] xl:w-[300px] xl:h-[400px] hover:scale-105 transition-all cursor-pointer bg-gray-200 rounded-xl shadow-lg"
              >
                <img
                  className="object-cover w-full h-full rounded-xl"
                  src={`${BASE_URL_IMG}/${movie.poster_path}`}
                  alt={`${i}`}
                />
              </div>
            );
          })}
        </section>
      ) : (
        <section className="flex justify-center w-full mt-16">
          <LoadingIcon width={20} />
        </section>
      )}
    </div>
  );
}
