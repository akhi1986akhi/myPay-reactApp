import React from 'react'
import { useState } from "react";

import { NavLink } from 'react-router-dom';
export default function Navbar() {

    const [show, setShow] = useState(false);

    return (
        <>

            <section className="navbar-bg">

                <nav class="navbar navbar-expand-lg">
                    <div class="container">
                        <a class="navbar-brand">
                            <span style={{background:'slateblue', paddingLeft:'10px', color:'white',border:'solid 1px slateblue' }}>
                                my
                            </span>
                          

                            <span style={{background:'transparent', paddingRight:'10px', color:'slateblue', border:'solid 1px slateblue'}}>
                                Pay
                            </span>
                      
                        </a>
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            onClick={() => setShow(!show)}

                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/service">Services</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                </li>
                                <form className="d-flex" role="search">
                                    <button className="btn-style  me-2" type="submit">signUp</button>

                                    <button className="btn-style" type="submit">signIn</button>

                                </form>



                            </ul>
                        </div>
                    </div>
                </nav>
            </section>

        </>
    )
}
