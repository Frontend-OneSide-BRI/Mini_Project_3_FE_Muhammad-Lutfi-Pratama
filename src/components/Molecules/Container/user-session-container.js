export default function UserSessionContainer() {
  return (
    <div className="w-10/12 my-8 lg:w-full">
      <h3 className="text-3xl font-bold text-center lg:text-left lg:text-2xl xl:text-3xl">
        User Session
      </h3>
      <div className="flex flex-wrap justify-center w-full gap-8 py-8 mt-4 bg-white rounded-2xl">
        <div className="flex items-center justify-between w-4/6 text-center xl:w-5/6 lg:gap-2 lg:flex-col xl:flex-row">
          <p className="text-lg md:text-xl xl:text-lg">Status</p>
          <p className="text-2xl font-extrabold text-pink-800 xl:text-xl">
            Guest
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center w-full gap-8 py-8 mt-4 bg-white rounded-2xl">
        <div className="flex items-center justify-between w-4/6 text-center xl:w-5/6 lg:gap-2 lg:flex-col xl:text-left xl:flex-row">
          <p className="text-lg md:text-xl xl:text-lg">Session expired at</p>
          <p className="font-extrabold text-pink-800 md:text-lg xl:text-sm">
            24-06-2023
          </p>
        </div>
      </div>
    </div>
  );
}
