import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from ".";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(route =>
          route.layout ? (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ) : (
            <Route key={route.path} path={route.path} element={route.element} />
          )
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
