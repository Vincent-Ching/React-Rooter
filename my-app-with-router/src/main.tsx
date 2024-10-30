import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

// page components

import Home from "./pages/Home";
import About from "./pages/About";
import Article from "./pages/Article";

// ...

const getWeatherOfTheDay = () => {
  return "sunny";
};

// router creation

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => {
          return getWeatherOfTheDay();
        },
      },
      // ...
    ],
  },
]);

// ...

// rendering

const rootElement = document.getElementById("root");

if (rootElement != null) {
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
}