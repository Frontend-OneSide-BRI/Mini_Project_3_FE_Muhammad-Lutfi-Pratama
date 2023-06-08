import { MoviePanel } from "src/components/Organism";
import NavbarBrowse from "./navbar-browse";
import {
  UserSessionContainer,
  UserStatusContainer,
} from "src/components/Molecules/Container";
import { PrimaryButton } from "src/components/Atom/Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getPopularMovie from "src/services/Movie/movie";
import { BASE_URL_IMG } from "src/config";

export default function Browse() {
  let [activePage, setActivePage] = useState("browse");
  let [popularMovie, setPopularMovie] = useState([]);
  let [loading, setLoading] = useState(true);
  let [searchResult, setSearchResult] = useState([]);
  console.log("🚀 ~ searchResult:", searchResult);

  let navigate = useNavigate();

  const fetchDataApi = async () => {
    const res = await getPopularMovie();
    setPopularMovie(res.results);
    setLoading(false);
  };

  useEffect(() => {
    const resToken = localStorage.getItem("token");
    if (resToken) {
      navigate("/browse");
    } else {
      navigate("/login");
    }

    fetchDataApi();
  }, [navigate]);

  return (
    <div className="flex flex-col py-4 pr-4 md:flex-row">
      <NavbarBrowse
        searchResultListener={searchResult => setSearchResult(searchResult)}
        activePageListener={page => setActivePage(page)}
      />
      <main className="flex flex-col pt-24 md:overflow-scroll md:pt-0 xl:h-screen md:w-9/12 bg-slate-100 rounded-2xl lg:flex-row">
        {activePage === "browse" ? (
          <>
            {searchResult?.results?.length > 0 ? (
              <div className="flex flex-wrap justify-center gap-5 p-12 flex-cols">
                {searchResult?.results.map((item, index) => {
                  return (
                    <img
                      src={`${BASE_URL_IMG}/${item.poster_path}`}
                      alt={`${item.title}`}
                      className="object-cover w-[200px] h-[300px] rounded-lg"
                    />
                  );
                })}
              </div>
            ) : (
              <>
                {loading ? (
                  <loadingIcon />
                ) : (
                  <MoviePanel movies={popularMovie} />
                )}
                {/* Right Panel */}
                <div className="flex flex-col items-center p-12 lg:p-0 lg:pt-16 lg:pr-6 lg:pl-2">
                  <UserStatusContainer />
                  <UserSessionContainer />
                  <PrimaryButton text={"Logout"} />
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <h1 className="my-8 text-3xl font-extrabold text-center">
              My Favorite Movie
            </h1>
          </>
        )}
      </main>
    </div>
  );
}
