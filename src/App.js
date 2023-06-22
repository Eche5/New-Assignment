import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Components/Root";
import Home from "./Components/HomePage/Home";
import History from "./Components/HistoryPage/History";
import Team from "./Components/TeamPage/Team";
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
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
