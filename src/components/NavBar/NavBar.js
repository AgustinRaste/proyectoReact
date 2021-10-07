import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = ({items}) => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-dark text-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">LOGO</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                        <a className="nav-link text-light" href="#">Tienda</a>
                        <a className="nav-link text-light" href="#">Nosotros</a>
                        <a className="nav-link text-light" href="#">Contacto</a>
                    </div>
                <CartWidget items={items}/>
                </div>
                
            
            </div>

        </nav>
    )
}

export default NavBar
