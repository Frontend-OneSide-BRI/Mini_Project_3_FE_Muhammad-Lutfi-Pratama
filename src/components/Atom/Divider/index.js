import React from "react";

export default function Divider({ color = "bg-pink-700" }) {
  return (
    <React.Fragment>
      <div
        className={`mx-auto mt-4 md:mt-2 w-[100px] rounded-full h-[4px] ${color}`}
      ></div>
    </React.Fragment>
  );
}
