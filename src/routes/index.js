import Browse from "src/pages/Browse";
import { Home } from "../pages";
import Login from "../pages/Login";

const routes = [
  {
    element: <Browse />,
    path: "/",
    layout: true,
    access: "admin",
  },
  {
    element: <h1>Not Found</h1>,
    path: "*",
    layout: true,
    access: "member",
  },
  {
    element: <h1>Detail</h1>,
    path: "/detail",
    layout: false,
    access: "member",
  },
];

export default routes;
