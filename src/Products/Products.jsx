import React, {useEffect, useState} from 'react';
import {BASE_URL} from "../consts/consts";
import {Button} from "@mui/material";
import ProductCard from "./ProductCard/ProductCard";
import AddProduct from "./AddProduct/AddProduct";
import {Link} from "react-router-dom";
import Box from "@mui/material/Box";

const Products = () => {
    const [products,setProducts]=useState([])
    console.log('pr')
    useEffect(()=>{
        fetch(`${BASE_URL}products`).then(res=>res.json()).then(res=>{
            setProducts(res)
        })
    },[]);
    const deleteProductHandle=(id)=>{
        fetch(`${BASE_URL}products/${id}`,{method:"DELETE"}).then(()=>{
            setProducts(products=>products.filter(product=>product._id!==id))
        })
    }
    return (
        <Box sx={{p:2}}>
            <Link to={`/products/create`}>
                <Button sx={{mb:2}} variant="contained">Add new Product</Button>
            </Link>
            {products.map(product=><ProductCard
                deleteProduct={deleteProductHandle} {...product}/>)}
        </Box>
    );
};

export default Products;