import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Divider from "src/components/Atom/Divider";
import { BASE_URL_IMG } from "src/config";

export default function SwipeMovie({ title, movies }) {
  return (
    <div className="md:w-7/12 md:float-right lg:w-[53%] ">
      <section className="mt-12 mb-4 text-center">
        <h3 className="text-3xl font-semibold text-pink-800">{title}</h3>
        <Divider color="bg-gray-500/40" />
      </section>
      <section className="mt-6">
        <Swiper spaceBetween={20} slidesPerView={3}>
          {movies.map((movie, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-[260px] xl:h-[440px] 2xl:h-[540px] sm:h-[340px] ml-6 md:ml-4 lg:ml-2 xl:ml-0 cursor-pointer bg-gray-400 rounded-lg">
                <img
                  src={`${BASE_URL_IMG}/${movie.poster_path}`}
                  alt={`${movie.title}`}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
