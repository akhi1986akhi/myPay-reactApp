import React from 'react'

import img from './images/contactus-img-01.webp'
export default function Contact() {
    return (
        <>
            <section className='contact-us-section pt-5'>
                <div className='container'>
                    {/* <h1 className='main-heading text-center'>Contact Us</h1> */}
                    <div class="row pt-5">
                        <div className="col-sm-12 col-lg-10 col-xl-10 mx-auto pt-5">

                            <div className='row'>
                                <div className='col-sm-12 col-lg-5 col-xl-5 contact-left-side'>
                                    <h1 className='main-heading'>
                                        Contact With Our<br /> Sales Team
                                    </h1>
                                    <p className='main-hero-para'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                    </p>
                                    <figures>
                                        <img src={img} alt="contactus" className='img-fluid' />
                                    </figures>
                                </div>

                                <div className='col-sm-12 col-lg-7 col-xl-7 contact-right-side'>

                                    <form className='p-5 bg-body-secondary rounded-3 shadow'>
                                        <div className='row g-5'>
                                            <div className='col-xl-6 col-lg-6 col-sm-12'>
                                                <input type='text' class="form-control p-3 rounded-pill" placeholder='First Name'></input>
                                            </div>
                                            <div className='col-xl-6 col-lg-6 col-sm-12'>
                                                <input type='text' class="form-control p-3 rounded-pill" placeholder='Last Name'></input>
                                            </div>


                                            <div className='col-xl-6 col-lg-6 col-sm-12'>
                                                <input type='text' class="form-control p-3 rounded-pill" placeholder='Contact No.'></input>
                                            </div>
                                            <div className='col-xl-6 col-lg-6 col-sm-12'>
                                                <input type='email' class="form-control p-3 rounded-pill" placeholder='E-mail'></input>
                                            </div>


                                            <div className='col-xl-12 col-lg-12 col-sm-12'>
                                                <input type='text' class="form-control p-3 rounded-pill" placeholder='Add Address'></input>
                                            </div>
                                            <div className='col-xl-12 col-lg-12 col-sm-12'>
                                                <textarea type='text' class="form-control p-3 rounded-pill" rows="3" placeholder='Write here your message'></textarea>


                                            </div>

                                            <div className='col-xl-12 col-lg-12 col-sm-12'>
                                                    <button className='btn btn-success btn-style'>Submit</button>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
