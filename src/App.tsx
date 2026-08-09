import { RouterProvider } from "react-router-dom";
import useRoutes from "@ra/routing/routing";

function App() {
  return <RouterProvider router={useRoutes()} />;
}

export default App;