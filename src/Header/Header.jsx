import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import {Link, useLocation} from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    console.log('location:',location);
    const linkStyle = (path) => ({
        color: location.pathname === path ? '#0000ff' : '#000000',
        textDecoration: 'none',
        marginRight: '16px',
        fontWeight: location.pathname === path ? 'bold' : 'normal',
    });

    return (
        <AppBar position="static" sx={{ backgroundColor: '#ffffff', boxShadow: 'none' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6" sx={{ color: '#000000' }}>My Website</Typography>
                <Box>
                    <Link to="/" style={linkStyle('/')}>
                        Form
                    </Link>
                    <Link to="/cards" style={linkStyle('/cards')}>
                        Calculations
                    </Link>
                    <Link to="/products" style={linkStyle('/products')} >
                        Products
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
