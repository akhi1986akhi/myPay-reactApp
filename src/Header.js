import React from 'react';
import img01 from './images/hero-img01.webp';
import img02 from './images/hero-img02.webp';


export default function Header() {
    return (
        <>
            <header>
                <section className='container main-hero-container'>
                    <div className='row'>
                        <div className='col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column'>
                            <h1 className='display-2'>Online <span style={{color:'slateblue'}}>Payment</span>  Made<br />Easy For You.</h1>
                            <p className='main-hero-para'>
                                React Lorem Ipsum is a (TypeScript-supported) React library including components and functions to generate placeholder text. DEMO & USAGE · USAGE IN A

                            </p>

                            <h3>Get early access for you</h3>
                            <div className='input-group mt-3 w-75'>
                                <input type='text' className='rounded-pill me-3 p-2 w-100 form-control-text ' placeholder='Enter Your E-mail' />
                                <div className='input-group-button rounded-pill'>Get it Now</div>
                            </div>

                        </div>
                        <div className='col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-hero-section-images'>
                            <img src={img01} alt="heroimage" className='img-fluid'/>
                            <img src={img02} alt="heroimage" className='img-fluid heroImg2' id="heroImg2"/>
                        </div>
                    </div>

                </section>
            </header>
        </>
    )
}
