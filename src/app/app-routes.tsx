import { RouteObject, createBrowserRouter, RouterProvider } from "react-router-dom";

import { Error } from "app";
import { AlertModal, Loader } from "shared-components";
import { appInternalLinks as links } from "../providers";

import DemoPage from "features/DemoPage";
import ScrollPage from "features/scroll-pages";
import ScrollTester from "features/tester-pages";
import { utilitiesRoute } from "features/Utilities";
import DragContainer from "features/drag-api/DragContainer";
import { photosRoute } from "features/AnimatedPhotos";
import Home from "features/Home";

const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <DemoPage />,
      },
      utilitiesRoute,
      photosRoute(links.PHOTOS),
      {
        path: links.FEATURES,
        element: <ScrollPage />,
      },
      {
        path: links.TESTER,
        element: <ScrollTester />,
      },
      {
        path: links.DRAG,
        element: <DragContainer />,
      },
      {
        path: "*",
        element: <AlertModal openModal variant="text" message={Error.MESSAGE} />,
      },
    ],
  },
];

const AppRoutes = () => {
  const router = createBrowserRouter(appRoutes);
  return <RouterProvider router={router} fallbackElement={<Loader message="boom" />} />;
};

export default AppRoutes;
