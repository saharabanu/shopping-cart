import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    const { cart } = useSelector((state) => state.cart)
    return (
        <div className='bg-dark text-white'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h2>Organic Mart</h2>
                    </div>
                    <div className="col-md-8">
                        <div className="menu-items">
                            <div className="d-flex justify-content-end align-items-end ">
                                <div className="nav-items">
                                <Link className="header-items"
                                to="/home"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                                >
                                Home
                                </Link>
                                <Link className="header-items"
                                to="/cart"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                                >
                               <i className="fa-solid fa-cart-shopping"></i> <span>{cart.length}</span>
                                </Link>
                                </div>

                            </div>

                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;