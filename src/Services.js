import React, { useState } from 'react';

import serviceapi from './API/serviceApi';

export default function Services() {

    const [serviceData, setServiceData] = useState(serviceapi);

    return (
        <>
            <section className='service-main-container'>
                <div className='container service-container'>
                    <h1 className='main-heading text-center'>How to send money</h1>
                    <div className='row g-5'>

                        {serviceData.map((curElem) => {
                            const { id, logo, info, title } = curElem;
                            return (
                                <>
                                    <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 text-center work-container-sub-div' key={id}>
                                        <div class="card shadow">
                                        <ion-icon name={logo} class={`fontawesome-style logo`}></ion-icon>
                                        <h2 className='sub-heading'>{title}</h2>
                                        <p>
                                            {info}

                                        </p>
                                        </div>
                                    </div>
                                </>
                            )
                        })}

                    </div>
                </div>

            </section>
        </>
    )
}
