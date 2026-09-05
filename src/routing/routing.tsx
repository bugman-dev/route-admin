import { createBrowserRouter, Navigate } from "react-router-dom";
import appUrls from "@ra/constants/appUrls";
import AppLayout from "@ra/pages/AppLayout";
import Dashboard from "@ra/pages/Dashboard/dashboard";
import Waypoints from "@ra/pages/Waypoints/waypoint";
import Routes from "@ra/pages/routes";
import Vehicles from "@ra/pages/Vehicles";
import Settings from "@ra/pages/Settings";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: appUrls.default,
        element: <Navigate to={appUrls.dashboard} replace />,
      },
      {
        path: appUrls.dashboard,
        element: <Dashboard />,
      },
      {
        path: appUrls.waypoints,
        element: <Waypoints />,
      },
      {
        path: appUrls.routes,
        element: <Routes />,
      },
      {
        path: appUrls.vehicles,
        element: <Vehicles />,
      },
      {
        path: appUrls.settings,
        element: <Settings />,
      },
    ],
  },
]);

export default function useRoutes() {
  return router;
}
