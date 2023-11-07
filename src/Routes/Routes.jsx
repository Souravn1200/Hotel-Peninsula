import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Rooms from "../pages/Rooms";
import Register from "../pages/Register";
import RoomDetails from "../components/RoomDetails";
import Mybooking from "../pages/Mybooking";


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
          element: <RoomDetails></RoomDetails>
        },
        {
          path: 'mybooking',
          element: <Mybooking></Mybooking>
        }
      ]
    },
  ]);

  export default router