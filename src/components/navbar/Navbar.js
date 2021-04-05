import React, { useState } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar(props) {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <div className="brand">
                    <Link exact to="/">
                        <i className="fas fa-store"></i>
                        <span className="brand-text">E-Commerce</span>
                    </Link>
                </div>
                <div className={click ? "nav-item active" : "nav-item"}>
                    <Link className="nav-products mb-2" to="/products">
                        <span>Products</span>
                    </Link>
                    <Link className="nav-login mb-2" to="/login">
                        <span>Login</span>
                    </Link>
                    <Link className="nav-fav mb-2" to="/favorites">
                        <i class="far fa-heart"></i>
                    </Link>
                    <Link className="nav-cart" to="/cart">
                        <i className="fas fa-shopping-cart"></i>
                        <span className="nav-count">{props.cartLength}</span>
                    </Link>
                </div>
                <div className="nav-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
            </div>
            
        </nav>
    )
}

export default Navbar;