import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { Dashboard, Products, NotFound } from "./components/ReactLazyRoutes/ReactLazy";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "/products",
          element: <Products />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
