import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import AboutDetails from "../Pages/AboutDetails/AboutDetails";
import Feature from "../Pages/Feature/Feature";
import Error from "../Pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/cards.json"),
      },
      {
        path: "servicecard/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/cards.json"),
      },
      {
        path: "/aboutDetails",
        element: (
          <PrivateRoute>
            <AboutDetails></AboutDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/feature",
        element: (
          <PrivateRoute>
            <Feature></Feature>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
