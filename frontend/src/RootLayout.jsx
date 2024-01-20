/* eslint-disable */

import React from "react";
// import "../reset.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/navbar";

function RootLayout() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
