import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./components/home";
import Detail from "./components/detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: ":id",
        element: <Detail />,
      },
    ],
  },
]);

export default router;
