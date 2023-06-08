import React from "react";

export default function UserStatusContainer() {
  return (
    <div className="w-10/12 lg:w-full">
      <h3 className="text-3xl font-bold text-center lg:text-left lg:text-2xl xl:text-3xl">
        Stats
      </h3>
      <div className="flex flex-wrap justify-center w-full gap-8 py-8 mt-4 bg-white rounded-2xl">
        {[...Array(4)].map((_, index) => (
          <div className="w-2/6 text-center">
            <p className="text-3xl font-bold text-pink-800 lg:font-extrabold lg:text-2xl">
              30
            </p>
            <p className="text-sm lg:text-[12px]">Lorem ipsum</p>
          </div>
        ))}
      </div>
    </div>
  );
}
