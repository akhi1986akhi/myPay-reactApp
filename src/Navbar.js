import React from 'react'
import { useState } from "react";
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
                        <div class={`collapse navbar-collapse ${show ? "show" : ""}`}>
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link">Services</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link">Contact</a>
                                </li>
                                <form class="d-flex" role="search">
                                    <button class="btn-style  me-2" type="submit">signUp</button>

                                    <button class="btn-style" type="submit">signIn</button>

                                </form>



                            </ul>
                        </div>
                    </div>
                </nav>
            </section>

        </>
    )
}
