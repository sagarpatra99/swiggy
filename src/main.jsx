import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/home.jsx";
import Searchbar from "./components/pages/searchbar.jsx";
import Cart from "./components/pages/cart.jsx";
import NotFound from "./components/pages/not-found.jsx";
import ResMenu from "./components/pages/res-menu.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/search",
        element: <Searchbar />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/resturant/:resId",
        element: <ResMenu />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
