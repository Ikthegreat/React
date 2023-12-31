import { createBrowserRouter } from "react-router-dom";

import NotFound from "./screens/NotFound";
import ErrorComponent from "./components/ErrorComponent";

import App from "./App";
import Home from "./screens/Home";
import About from "./screens/About";
import User from "./screens/users/User";
import Followers from "./screens/users/Followers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "users",
        children: [
          {
            path: ":userId",
            element: <User />,
            children: [
              {
                path: "followers",
                element: <Followers />,
              },
            ],
          },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
