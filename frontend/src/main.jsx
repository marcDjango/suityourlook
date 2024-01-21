/*eslint-disable*/
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
import AdminFormModel from "./pages/adminFormModel/adminFormModel";
import AdminFormProduct from "./pages/adminFormProduct/adminFormProduct";
import CardsList from "./components/CardsListContainer/CardsList/CardsList";
import LandingPage from "./pages/LandingPage/LandingPage";
import Profiluser from "./pages/ProfilUser/profiluser";
import Tuto from "./pages/Tuto/Tuto";
import CounterProvider from "./components/context/CurrentBasketContext";
import Favorite from "./pages/Favorite/Favorite";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="list-cards" element={<CardsList />} />
      <Route path="profil" element={<Profiluser />} />
      {/* <Route path="/register" element={<Register />} action={enrolment} /> */}
      <Route path="/login" element={<Login />} action={authenticate} />
      <Route path="/tuto" element={<Tuto />} />
      <Route path="/admin-form-model" element={<AdminFormModel />} />
      <Route path="/admin-form-product" element={<AdminFormProduct />} />
      <Route path="/favorite" element={<Favorite />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <CounterProvider>
    <RouterProvider router={router} />
  </CounterProvider>
);
