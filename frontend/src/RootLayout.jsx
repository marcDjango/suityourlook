import React from "react";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <header>
        <nav />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
