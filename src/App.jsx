import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./pages/Error";
import { MemoryPage } from "./pages/Memory";
import { RootLayout } from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [{ path: "/", element: <MemoryPage /> }],
  },
]);

export const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
