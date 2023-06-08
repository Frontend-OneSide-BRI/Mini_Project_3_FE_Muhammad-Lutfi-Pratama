import React from "react";
import { MovieCategoryDropdown } from "src/components/Atom/Dropdown";
import { MovieShowMenuIcon } from "src/components/Atom/MenuIcon";

export default function MovieCategoryTopbar() {
  return (
    <div className="flex items-center justify-between">
      <MovieCategoryDropdown />
      <MovieShowMenuIcon width={10} />
    </div>
  );
}
