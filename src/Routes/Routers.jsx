import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/Errorpage";
import Home from "../Pages/Home/Home";
import AddProducts from "../Pages/AddProducts/AddProducts";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUP/SignUp";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/addproducts",
            element: <AddProducts></AddProducts>
        },
        {
            path: "/mycart",
            element: <MyCart></MyCart>
        },
        {
            path: "/login",
            element: <Login></Login>

        },
        {
            path: "/signup",
            element: <SignUp></SignUp>
        }
      ]
    }
  ]);

  export default router;