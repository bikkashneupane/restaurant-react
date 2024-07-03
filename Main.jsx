import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { AboutUs } from "./src/Pages/AboutUs";
import { ContactUs } from "./src/Pages/ContactUs";
import { Error } from "./src/Pages/Error";
import { Home } from "./src/Pages/Home";
import { Cart } from "./src/Pages/Cart";
import { RestaurantMenu } from "./src/components/RestaurantMenu";
// import { Grocery } from "./src/components/Grocery";

// Lazy loading
// Chuncking
// Dynamic Bundling
// Code Splitting

const Grocery = lazy(() => import("./src/components/Grocery"));
const AboutUs = lazy(() => import("./src/Pages/AboutUs"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
