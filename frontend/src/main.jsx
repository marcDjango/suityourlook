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
import Card from "./components/Card/Card";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<App />} />
      {/* <Route path="list-cards" element={<Card />} /> */}
      <Route path="list-cards/card" element={<Card />} />
      {/* <Route path="show-product" element={<ShowProduct />} /> */}
      {/* <Route path="Contact" element={<Contact />} /> */}
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
