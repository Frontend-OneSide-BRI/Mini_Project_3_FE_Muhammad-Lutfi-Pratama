import { MoviePanel } from "src/components/Organism";
import NavbarBrowse from "./navbar-browse";

export default function Browse() {
  return (
    <div className="flex flex-col py-4 pr-4 md:flex-row">
      <NavbarBrowse />
      <main className="pt-24 overflow-scroll md:pt-0 xl:h-screen md:w-9/12 bg-slate-100 rounded-2xl">
        <MoviePanel />
      </main>
    </div>
  );
}
