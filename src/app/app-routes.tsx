import { RouteObject, createBrowserRouter, RouterProvider } from "react-router-dom";

import { App, Error, NavLinkUrls } from "app";
import { AlertModal, Loader } from "shared-components";

import Home from "features/Home";
import ScrollPage from "features/scroll-pages";
import ScrollTester from "features/tester-pages";
import { utilitiesRoute } from "features/Utilities";
import DragContainer from "features/drag-api/DragContainer";
import { photosRoute } from "features/AnimatedPhotos";

const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      utilitiesRoute,
      photosRoute(NavLinkUrls.PHOTOS),
      {
        path: NavLinkUrls.FEATURES,
        element: <ScrollPage />,
      },
      {
        path: NavLinkUrls.TESTER,
        element: <ScrollTester />,
      },
      {
        path: NavLinkUrls.DRAG,
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
