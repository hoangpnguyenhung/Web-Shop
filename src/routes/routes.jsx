import React from "react";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import MainLayout from "../layouts/MainLayout";
import Blog from "../pages/Blog";
import Cart from "../pages/cart/Cart";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import Products from "../pages/products/Products";

export const routes = [
  {
    path: "/",
    element: <Home />,
    layout: MainLayout,
  },
  {
    path: "/products",
    element: <Products />,
    layout: MainLayout,
  },
  {
    path: "/contact",
    element: <Contact />,
    layout: MainLayout,
  },
  {
    path: "/blog",
    element: <Blog />,
    layout: MainLayout,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/products/:slug",
    element: <ProductDetail />,
    layout: MainLayout,
  },
  {
    path: "/cart",
    element: <Cart />,
    layout: MainLayout,
  },
];
