import React, {useEffect, useState} from 'react';
import Card from "./Card/Card"
import {Typography} from "@mui/material";
const  BASE_URL="https://backend-two-xi-40.vercel.app/"
const Cards = () => {
    const [cards,setCards]=useState([]);
    const [isLoading,setIsLoading]=useState(false)
    useEffect(() => {
        setIsLoading(true)
        fetch(BASE_URL).then(res=>res.json()).then(res=>{
            console.log('res:',res);
            setCards(res);
            setIsLoading(false)
        }).catch(err=>console.log('err:Error'));
    }, []);
    return (
        <div>
            {isLoading ? <Typography variant={"h4"} sx={{color:"#fff"}}>Loading...</Typography>: cards.map(card=><Card {...card}/>)}
        </div>
    );
};
export default Cards;