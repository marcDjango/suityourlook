import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import RootLayout from "./RootLayout";
import App from "./App";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<App />} />
      {/* <Route path="list-cards" element={<ListCards />} /> */}
      {/* <Route path="show-product" element={<ShowProduct />} /> */}
      {/* <Route path="Contact" element={<Contact />} /> */}
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
