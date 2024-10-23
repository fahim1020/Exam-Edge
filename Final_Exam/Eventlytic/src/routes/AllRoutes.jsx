import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../layout/AppLayout";
import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact";
import { Gallery } from "../pages/Gallery";
import { About } from "../pages/About";
import { Blog } from "../pages/Blog";
import { GetTicket } from "../pages/GetTicket";
import { BlogPage } from "../Components/BlogPage";
import { NotFound } from "../pages/NotFound";
export const AllRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blog/:id",
        element: <BlogPage />,
      },
      {
        path: "get-ticket",
        element: <GetTicket />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
