import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Rooms from "../pages/Rooms";
import Register from "../pages/Register";
import RoomDetails from "../components/RoomDetails";
import Mybooking from "../pages/Mybooking";
import Update from "../pages/Update";
import PageNotFound from "../components/Pagenotfound";
import PrivateRoute from "../components/Privateroute";


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
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
          path: 'rooms',
          element: <Rooms></Rooms>
        },
        {
          path: 'rooms/:id',
          loader: ({params}) => fetch(`http://localhost:5000/rooms/${params.id}`),
          element: <PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>
        },
        {
          path: 'mybooking',
          element: <PrivateRoute><Mybooking></Mybooking></PrivateRoute>
        },
        {
          path: 'update/:id',
          loader: ({params}) => fetch(`http://localhost:5000/update/${params.id}`),
          element: <Update></Update>
        },
        {
          path: '*',
          element: <PageNotFound></PageNotFound>
        }
      ]
    },
  ]);

  export default router