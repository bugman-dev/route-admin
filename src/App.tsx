import { RouterProvider } from "react-router-dom";
import useRoutes from "./routing/routing";

function App() {
  return <RouterProvider router={useRoutes()} />;
}

export default App
