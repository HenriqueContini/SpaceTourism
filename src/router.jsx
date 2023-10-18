import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import App from "./App";
import { Destination } from "./pages/Destination";
import { Crew } from "./pages/Crew";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/destination",
        element: <Destination />,
      },
      {
        path: "/crew",
        element: <Crew />,
      },
    ],
  },
]);

export { router };
