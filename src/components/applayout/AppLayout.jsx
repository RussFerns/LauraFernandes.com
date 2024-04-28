/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from "react-router-dom";
import "./AppLayout.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";


const AppLayout = () => {
  return (
    <div className="container layout-container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default AppLayout;


