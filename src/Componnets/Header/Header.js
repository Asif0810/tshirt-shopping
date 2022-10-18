import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (

        <div className='nav-item'>
            <NavLink>About</NavLink>
            <NavLink>Orders</NavLink>
            <NavLink to={'/'}>Home</NavLink>
         
        </div>

    );
};

export default Header;