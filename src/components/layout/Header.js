import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return (
        <header style={headerStyle}>
            <h1>StreamFlow</h1>
            <Link to="/login" style={linkStyle}>Login</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
};

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
};


export default Header;