import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            {/* ***** Logo Start ***** */}
                            <a href="index.html" className="logo">
                                <img src="assets/images/logo.png" alt style={{ width: 158 }} />
                            </a>
                            {/* ***** Logo End ***** */}
                            {/* ***** Menu Start ***** */}
                            <ul className="nav">
                                <li><Link to="/" className="active">Home</Link></li>
                                <li><Link to="/shop">Our Shop</Link></li>
                                <li><Link to="/product">Product Details</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                                <li><Link to="#">Sign In</Link></li>
                            </ul>
                            <a className="menu-trigger">
                                <span>Menu</span>
                            </a>
                            {/* ***** Menu End ***** */}
                        </nav>
                    </div>
                </div>
            </div>
        </header>

    );
}

export default Header;