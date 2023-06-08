import { MoviePanel } from "src/components/Organism";
import NavbarBrowse from "./navbar-browse";

export default function Browse() {
  return (
    <div className="flex flex-col py-4 pr-4 md:flex-row">
      <NavbarBrowse />
      <main className="flex flex-col pt-24 md:overflow-scroll md:pt-0 xl:h-screen md:w-9/12 bg-slate-100 rounded-2xl lg:flex-row">
        <MoviePanel />
        {/* Right Panel */}
        <div>
          {/* Status */}
          <div className="p-12 lg:p-0 lg:pt-16 lg:pr-4">
            <div className="w-full">
              <h3 className="text-3xl font-bold text-center lg:text-xl xl:text-3xl">Stats</h3>
              <div className="flex flex-wrap justify-center w-full gap-8 py-8 mt-4 bg-white rounded-2xl">
                {[...Array(4)].map((_, index) => (
                  <div className="w-2/6 text-center">
                    <p className="text-3xl font-bold lg:text-2xl text-indigo-950">30</p>
                    <p className="text-sm lg:text-[12px]">Lorem ipsum</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
