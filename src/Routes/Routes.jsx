import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path: 'login',
          element: <Login></Login>
        }
      ]
    },
  ]);

  export default router