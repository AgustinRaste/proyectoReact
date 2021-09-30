import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    return (
        <nav>
            <h2>LOGO</h2>
            <ul>
                <li><a href="">HOME</a></li>
                <li><a href="">TIENDA</a></li>
                <li><a href="">NOSOTROS</a></li>
                <li><a href="">CONTACTO</a></li>
            </ul>
            
            <CartWidget/>
        </nav>
    )
}

export default NavBar
