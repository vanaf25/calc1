import React from 'react';
import {Paper, Typography} from "@mui/material";

const Card = ({DSQ,DBQ,DFQ,GBQ,DEQ,ZSQ}) => {
    return (
        <Paper sx={{maxWidth:600,margin:"10px auto",padding:"10px"}}>
            <Typography>Downspout section quantity:{DSQ}</Typography>
            <Typography>Downspout bracket quantity:{DBQ}</Typography>
            <Typography>Downspout fastener quantity:{DFQ}</Typography>
            <Typography>Gutter Bracket Quantity:{GBQ}</Typography>
            <Typography>Downspout Extension Quantity:{DEQ}</Typography>
            <Typography>Zip Screw Quantity:{ZSQ}</Typography>
        </Paper>
    )
};

export default Card;