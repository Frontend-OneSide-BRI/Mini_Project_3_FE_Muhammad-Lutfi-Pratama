import Browse from "src/pages/Browse";
import { Home } from "../pages";
import Login from "../pages/Login";
import DetailPage from "src/pages/Detail";

const routes = [
  {
    element: <Home />,
    path: "/",
    access: "admin",
  },
  {
    element: <Login />,
    path: "/login",
    access: "member",
  },
  {
    element: <Browse />,
    path: "/browse",
    access: "admin",
  },
  {
    element: <DetailPage />,
    path: "/movie/:id",
    access: "admin",
  },
  {
    element: <h1>Not Found</h1>,
    path: "*",
    access: "member",
  },
  {
    element: <h1>Detail</h1>,
    path: "/detail",
    access: "member",
  },
];

export default routes;
