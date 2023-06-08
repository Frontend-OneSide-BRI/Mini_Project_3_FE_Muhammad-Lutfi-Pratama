import { MoviePanel } from "src/components/Organism";
import NavbarBrowse from "./navbar-browse";
import {
  UserSessionContainer,
  UserStatusContainer,
} from "src/components/Molecules/Container";
import { PrimaryButton } from "src/components/Atom/Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Browse() {
  let [activePage, setActivePage] = useState("browse");
  let navigate = useNavigate();
  const expiredToken = useSelector(state => state.expiresAt);
  console.log("🚀 ~ expiredToken:", expiredToken);

  useEffect(() => {
    const resToken = localStorage.getItem("token");
    if (resToken) {
      navigate("/browse");
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="flex flex-col py-4 pr-4 md:flex-row">
      <NavbarBrowse activePageListener={page => setActivePage(page)} />
      <main className="flex flex-col pt-24 md:overflow-scroll md:pt-0 xl:h-screen md:w-9/12 bg-slate-100 rounded-2xl lg:flex-row">
        {activePage === "browse" ? (
          <>
            <MoviePanel />
            {/* Right Panel */}
            <div className="flex flex-col items-center p-12 lg:p-0 lg:pt-16 lg:pr-6 lg:pl-2">
              <UserStatusContainer />
              <UserSessionContainer />
              <PrimaryButton text={"Logout"} />
            </div>
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
