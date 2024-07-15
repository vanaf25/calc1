import './App.css';
import {Box, Button, Paper, TextField, Typography} from "@mui/material";
import { useForm } from "react-hook-form";
import {useState} from "react";

function App() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [GBQ,setGBQ]=useState(0);
    const [DEQ,setDEQ]=useState(0);
    const [ZSQ,setZSQ]=useState(0);
    const [DFQ,setDFQ]=useState(0);
    const [DSQ,setDSQ]=useState(0);
    const [DBQ,setDBQ]=useState(0)
    const onSubmit = data =>{
        console.log(data);
        const L=+data.L;
        const O=+data.O;
        const D=+data.D;
        //Flasing Quanity;
        const J=L/10
        //Downspout Section Quantity
        const M1=O*D;
        const M2=Math.round(M1);
        const M=M2/10;
        setDSQ(M);
        //Downspout Bracket Quantity
        const B=Math.round(M*2,2);
        setDBQ(B);
        //Downspout Fastener Quantity
        const T=B*4;
        setDFQ(T);
        //Gutter Bracket Quantity
        setGBQ(L/1.3);
       // Downspout Extension Quantity
        setDEQ(Math.round((O*2)/10));
        //Zip Screw Quantity
        setZSQ(M*12+L+T)
    }
    const filterFields=(e)=>{
        if (!["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Backspace", "ArrowLeft", "ArrowRight", "Delete", "Tab","Enter"].includes(e.key)) e.preventDefault()
    }
    return (
        <>
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
                    onKeyDown={filterFields}
                    type={"number"} min={"0"} sx={{mb:1}}
                    fullWidth {...register("L",{valueAsNumber:true,required:true})} id="outlined-basic" label="Provide Glutter Length" variant="outlined" />
                <TextField type={"number"} min={"0"} sx={{mb:1}} fullWidth {...register("O",
                    {valueAsNumber:true,required:true})} id="outlined-basic" label="Provide Downspout Quantity" variant="outlined" />
                <TextField type={"number"} min={"0"} sx={{mb:1}}
                           fullWidth {...register("D",{valueAsNumber:true,required:true})} id="outlined-basic" label="Provide Downspout Height" variant="outlined" />
                <TextField type={"number"} min={"0"} sx={{mb:1}} fullWidth {...register("H",
                    {valueAsNumber:true,required:true})} id="outlined-basic" label="Provide Gutter Height" variant="outlined" />
                <Box>
                    <Button fullWidth  type={"submit"} variant={"contained"}>Submit</Button>
                </Box>
            </Paper>
            {ZSQ ? <Paper sx={{maxWidth:600,margin:"10px auto",padding:"10px"}}>
                <Typography>Downspout section quantity:{DSQ}</Typography>
                <Typography>Downspout bracket quantity:{DBQ}</Typography>
                <Typography>Downspout fastener quantity:{DFQ}</Typography>
                <Typography>Gutter Bracket Quantity:{GBQ}</Typography>
                <Typography>Downspout Extension Quantity:{DEQ}</Typography>
                <Typography>Zip Screw Quantity:{ZSQ}</Typography>

            </Paper>:""}
        </>
  );
}
export default App;