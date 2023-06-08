import { useGenerateTokenQuery } from "src/services/Auth/auth-api";

export default function PopularMovie() {
  const { isLoading, data } = useGenerateTokenQuery();

  return (
    <div className="w-5/6 px-8 mx-auto mt-16 md:mt-[80px] md:w-7/12 md:float-right md:mr-6 lg:w-6/12 xl:mr-12 lg:px-12 xl:px-20">
      <section className="flex justify-between mb-4">
        <p className="text-xl font-semibold md:text-2xl xl:text-3xl">Popular</p>
        <p className="font-bold text-pink-700 cursor-pointer text-md md:text-xl hover:scale-110">
          Explore All
        </p>
      </section>
      <section
        id="controls-carousel"
        className="relative flex flex-wrap justify-center gap-8 overflow-hidden md:gap-6"
        data-carousel="static"
      >
        {/* Cards */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="w-full h-[500px] sm:w-[400px] sm:h-[600px] md:w-[300px] md:h-[400px] lg:w-[250px] lg:h-[350px] xl:w-[300px] xl:h-[400px] hover:scale-105 transition-all cursor-pointer bg-gray-200 rounded-xl shadow-lg"
          ></div>
        ))}
      </section>
    </div>
  );
}
