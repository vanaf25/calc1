import './App.css';
import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Cards from "./Cards/Cards";
import Form from './Form/Form';
import Products from "./Products/Products";
import {createBrowserRouter, Route, RouterProvider} from "react-router-dom";
import AddProduct from "./Products/AddProduct/AddProduct";
import Header from "./Header/Header";
import Layout from "./Layout/Layout";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children:[{
            path: "/",
            element: <Form/>
        }, {
            path: "/cards",
            element: <Cards/>
        },
            {
                path: "/products",
                element: <Products/>
            },
            {
                path: "/products/create",
                element: <AddProduct/>
            },
            {
                path: "/products/edit/:id",
                element: <AddProduct/>
            },]
    },

]);

function App() {
    return (
        <>
            <RouterProvider router={router} >
            </RouterProvider>
        </>
  );
}
export default App;