import { MoviePanel } from "src/components/Organism";
import NavbarBrowse from "./navbar-browse";

export default function Browse() {
  return (
    <div className="flex flex-col py-4 pr-4 md:flex-row">
      <NavbarBrowse />
      <main className="md:h-screen md:w-9/12 bg-slate-300 rounded-2xl">
        <section className="h-screen md:px-12 md:h-[93%] m-10 rounded-[50px] bg-slate-500 lg:w-4/6">
          <MoviePanel />
        </section>

        <section className="lg:w-2/6"></section>
      </main>
    </div>
  );
}
