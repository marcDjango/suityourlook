import React from "react";
import "../reset.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import Login, { authenticate } from "./pages/Login/Loginpage";
// import Register, { enrolment } from "./pages/Register/Register";
import RootLayout from "./RootLayout";
import App from "./App";
import Card from "./components/Card/Card";
import CardsList from "./components/cardsLisr/CardsList";
import Tuto from "./pages/Tuto/Tuto";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<App />} />
      <Route path="list-cards" element={<CardsList />} />
      <Route path="list-cards/card" element={<Card />} />
      {/* <Route path="show-product" element={<ShowProduct />} /> */}
      {/* <Route path="Contact" element={<Contact />} /> */}
      {/* <Route path="/register" element={<Register />} action={enrolment} /> */}
      <Route path="/login" element={<Login />} action={authenticate} />
      <Route path="/tuto" element={<Tuto />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
