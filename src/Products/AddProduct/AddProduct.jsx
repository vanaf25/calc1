import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {Box, Button, Paper, TextField, Typography} from "@mui/material";
import {redirect, useNavigate, useParams} from "react-router-dom";
import {BASE_URL} from "../../consts/consts";
const Form = () => {
    const {id}=useParams()
    console.log('id:',id);

    const { register,
        handleSubmit
        , watch,
        setValue,
        formState: { errors },
    reset } = useForm({
    });
    const [isLoading,setIsLoading]=useState(!!id );
    useEffect(() => {
        if (id){
            setIsLoading(true)
            const func= async ()=>{
                const req=await fetch(`${BASE_URL}products/${id}`)
                const res= await req.json();
                setValue("price",res.price);
                setValue("name",res.name);
                setIsLoading(false)
            }
            func()
        }

    }, [id]);
    let navigate = useNavigate();
    const onSubmit = data =>{
        console.log(data);
        fetch(`${BASE_URL}products/${id ? id :""}`,
            {method:id ? "PATCH":"POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(data)})
            .then(res=>res.json()).then(res=>{
                reset()
            navigate("/products")
            console.log('res:',res);
        });
    }
    const filterFields=(e)=>{
        if (!["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Backspace", "ArrowLeft", "ArrowRight", "Delete", "Tab","Enter","."].includes(e.key)) e.preventDefault()
    }
    return (
        <>
            {isLoading ? <Typography sx={{color:"#fff"}} >Loading...</Typography>:
            <Paper
                onSubmit={handleSubmit(onSubmit)}
                component="form"
                sx={{
                    maxWidth:600,
                    margin:"10px auto",
                    padding:"10px",
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                 min={"0"} sx={{mb:1}}
                    fullWidth {...register("name",{required:true})} id="outlined-basic" label="Provide name" variant="outlined" />
                <TextField onKeyDown={filterFields} type={"number"} min={"0"} sx={{mb:1}} fullWidth {...register("price",
                    {valueAsNumber:true,required:true})} id="outlined-basic" label="Provide price" variant="outlined" />
                <Box>
                    <Button fullWidth  type={"submit"} variant={"contained"}>Submit</Button>
                </Box>
            </Paper>}
        </>
    );
};

export default Form;