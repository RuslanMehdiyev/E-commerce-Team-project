import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Sale from "../components/sale/Sale";
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
