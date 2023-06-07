export default function Banner({ title, description }) {
  return (
    <div className="mt-[450px] md:w-4/6 md:pr-8 lg:pr-4 xl:pr-16 lg:w-7/12 md:float-right lg:px-[6rem] md:mt-10 text-center px-12 xl:px-[10rem]">
      <h1 className="text-5xl font-bold text-pink-800 xl:text-6xl">{title}</h1>
      <p className="mt-6 text-gray-700 xl:text-lg">{description}</p>
    </div>
  );
}
