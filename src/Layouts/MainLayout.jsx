import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <main className="flex-1 bg-gray-100 w-full">
        <Outlet></Outlet>
      </main>

      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
