import { BASE_URL_IMG } from "src/config";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function MovieCategorySwipe({ movies }) {
  return (
    <div className="mt-6">
      <Swiper spaceBetween={20} slidesPerView={3}>
        {movies !== undefined && movies.map((movie, index) => (
          <SwiperSlide>
            <div className="w-full h-[250px] xl:h-[200px] 2xl:h-[25vh] sm:h-[280px] md:ml-4 lg:ml-2 xl:ml-0 cursor-pointer bg-gray-400 rounded-3xl xl:rounded-[40px]">
              <img
                src={`${BASE_URL_IMG}/${movie.poster_path}`}
                alt={`${index}`}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
