const routes = [
  {
    element: <h1> Home </h1>,
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
