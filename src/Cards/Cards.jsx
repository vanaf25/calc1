import React, {useEffect, useState} from 'react';
import Card from "./Card/Card"
const  BASE_URL="https://backend-two-xi-40.vercel.app/"
const Cards = () => {
    const [cards,setCards]=useState([]);
    useEffect(() => {
        console.log(process.env);
        fetch(BASE_URL).then(res=>res.json()).then(res=>{
            console.log('res:',res);
            setCards(res);
        });
    }, []);
    return (
        <div>
            {cards.map(card=><Card {...card}/>)}
        </div>
    );
};
export default Cards;