import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/Errorpage";
import Home from "../Pages/Home/Home";
import AddProducts from "../Pages/AddProducts/AddProducts";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUP/SignUp";
import PrivetRouter from "../Provider/PrivetRouter";
import CarCollections from "../Pages/CarCollections/CarCollections";
import ViewDetails from "../Pages/CarCollections/ViewDetails";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('/car-brand.json')
        },
        {
           path: "/carcollections/:name",
           element: <CarCollections></CarCollections>,
           loader: () => fetch('http://localhost:5000/car')
        },
        {
            path: "/addproducts",
            element: <PrivetRouter><AddProducts></AddProducts></PrivetRouter>
        },
        {
            path: "/mycart",
            element: <PrivetRouter><MyCart></MyCart></PrivetRouter>
        },
        {
            path: "/viewdetails/:id",
            element: <ViewDetails></ViewDetails>,
            loader: () => fetch('http://localhost:5000/car')
        },
        {
            path: "/updateproduct/:id",
            element: <PrivetRouter><UpdateProduct></UpdateProduct></PrivetRouter>,
            loader: ({params}) => fetch(`http://localhost:5000/car/${params.id}`)
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