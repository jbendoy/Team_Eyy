import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./login/signin.jsx";
import SignUp from "./login/signup.jsx";
import Checkout from './userpages/checkout';
import Home from './userpages/home';
import Order from './userpages/order';
import Profile from './userpages/profile';
import OrderProcessing from './userpages/OrderProcessing';
import CompletedOrders from './staffpages/CompletedOrders';
import StaffMenu from './staffpages/StaffMenu';
import OrderHistory from './staffpages/OrderHistory';
import Orders from './staffpages/Orders';
import StaffDashboard from './staffpages/StaffDashboard';
export default function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="" exact element={<SignIn />}></Route>
        <Route path="/signin" exact element={<SignIn />}></Route>
        <Route path="/profile" exact element={<Profile />}></Route>
        <Route path="/checkout" exact element={<Checkout />}></Route>
        <Route path="/order" exact element={<Order />}></Route>
        <Route path="/home" exact element={<Home />}></Route>
        <Route path="/signup" exact element={<SignUp />}></Route>
        <Route path="/OrderProcessing" element={<OrderProcessing />}></Route> 
        <Route path="/CompletedOrders" element={<CompletedOrders />}></Route>
        <Route path="/StaffMenu" element={<StaffMenu />}></Route>
        <Route path="/OrderHistory" element={<OrderHistory />}></Route>
        <Route path="/Orders" element={<Orders />}></Route>
        <Route path="/StaffDasboard" element={<StaffDashboard />}></Route>


      </Routes>
    </BrowserRouter>
   </>
  )
}