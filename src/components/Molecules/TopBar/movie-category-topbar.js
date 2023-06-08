import { useState } from "react";
import { MovieCategoryDropdown } from "src/components/Atom/Dropdown";
import { MovieShowMenuIcon } from "src/components/Atom/MenuIcon";

export default function MovieCategoryTopbar() {
  let [activeFilter, setActiveFilter] = useState("trending");

  return (
    <div className="flex items-center justify-between">
      <MovieCategoryDropdown
        activeFilterListener={filter => setActiveFilter(filter)}
      />
      <MovieShowMenuIcon width={10} />
    </div>
  );
}
