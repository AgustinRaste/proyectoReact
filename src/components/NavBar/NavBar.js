import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import {Link} from 'react-router-dom'

const NavBar = ({items}) => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-dark text-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to={'/'}>LOGO</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active text-light" aria-current="page" to={'/'}>Home</Link>
                        <Link className="nav-link text-light" to={'/tienda'}>Tienda</Link>
                        <Link className="nav-link text-light" to={'/nosotros'}>Nosotros</Link>
                        <Link className="nav-link text-light" to={'/contacto'}>Contacto</Link>
                    </div>
                <CartWidget items={items}/>
                </div>
                
            
            </div>

        </nav>
    )
}

export default NavBar
