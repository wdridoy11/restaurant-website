import React from 'react'
import {createBrowserRouter} from "react-router-dom";
import Main from '../../layout/Main';
import Home from '../../pages/home/home/Home';
import Menu from '../../pages/menu/menu/Menu';
import Login from '../../pages/login/Login';
import Order from '../../pages/order/order/Order';
import Registration from '../../pages/registration/Registration';
import PrivetRoute from '../privetRoute/PrivetRoute';
import Secret from '../../components/shared/secret/Secret';
import Dashboard from '../../layout/Dashboard';
import MyCard from '../../pages/dashboard/myCard/MyCard';
import AllUsers from '../../pages/dashboard/allUsers/AllUsers';

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
          path:"mycart",
          element:<MyCard></MyCard>
        },
        {
          path:"allusers",
          element:<AllUsers></AllUsers>
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