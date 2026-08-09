import {createBrowserRouter} from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Waypoints from "../pages/waypoints";
import Routes from "../pages/routes";

export default function useRoutes(){
    return createBrowserRouter([
        {
            path: "/",
            element: <Dashboard />,
        },
        {
            path: "/waypoints",
            element: <Waypoints />,
        },
        {
            path: "/routes",
            element: <Routes />,
        },
    ]);
}