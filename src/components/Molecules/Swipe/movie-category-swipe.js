import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function MovieCategorySwipe() {
  return (
    <div className="mt-6">
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={swiper => console.log(swiper)}
      >
        {[...Array(10)].map((_, index) => (
          <SwiperSlide>
            <div className="w-full h-[250px] xl:h-[200px] 2xl:h-[25vh] sm:h-[280px] md:ml-4 lg:ml-2 xl:ml-0 cursor-pointer bg-gray-400 rounded-3xl xl:rounded-[40px]">
              {/* Images */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
