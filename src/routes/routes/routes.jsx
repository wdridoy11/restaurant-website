import React from 'react'
import {createBrowserRouter} from "react-router-dom";
// page import
import Main from '../../layout/Main';
import Login from '../../pages/login/Login';
import Menu from '../../pages/menu/menu/Menu';
import Home from '../../pages/home/home/Home';
import Dashboard from '../../layout/Dashboard';
import Order from '../../pages/order/order/Order';
import PrivetRoute from '../privetRoute/PrivetRoute';
import Secret from '../../components/shared/secret/Secret';
import MyCard from '../../pages/dashboard/user/myCard/MyCard';
import Registration from '../../pages/registration/Registration';
import AllUsers from '../../pages/dashboard/admin/allUsers/AllUsers';
import AddItems from '../../pages/dashboard/admin/addItems/AddItems';

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main> ,
      children:[
        {
            path:"",
            element:<Home></Home>
        },
        {
          path:"menu",
          element:<Menu></Menu>
        },
        {
          path:"order",
          element:<Order></Order>
        },
        {
          path:"order/:category",
          element:<Order></Order>
        },
        {
          path:"secret",
          element:<PrivetRoute><Secret></Secret></PrivetRoute>
        }
      ],
    },
    {
      path:"dashboard",
      element:<PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
      children:[
        {
          path:"allusers",
          element:<AllUsers></AllUsers>
        },
        {
          path:"additems",
          element:<AddItems></AddItems>
        },
        {
          path:"mycart",
          element:<MyCard></MyCard>
        }
      ]
    },
    {
      path:"login",
      element:<Login></Login>
    },
    {
      path:"registration",
      element:<Registration></Registration>
    }
  ]);


export default router