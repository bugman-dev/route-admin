import { createBrowserRouter } from "react-router-dom";
import appUrls from "@ra/constants/appUrls";
import Dashboard from "@ra/pages/dashboard";
import Waypoints from "@ra/pages/waypoints";
import Routes from "@ra/pages/routes";

export default function useRoutes(){
    return createBrowserRouter([
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
    ]);
}