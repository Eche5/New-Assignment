import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Components/Root";
import { Suspense, lazy } from "react";
import Loader from "./Components/Loader";

const Team = lazy(() => import("./Components/TeamPage/Team"));
const Home = lazy(() => import("./Components/HomePage/Home"));
const History = lazy(() => import("./Components/HistoryPage/History"));
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/history", element: <History /> },
      ],
    },
    { path: "/team", element: <Team /> },
  ]);
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  );
}

export default App;
