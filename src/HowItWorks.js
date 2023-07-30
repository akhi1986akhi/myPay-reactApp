import React from 'react'
import workdata from './API/worksApi';
export default function HowItWorks() {
  return (
    <>
      <section>
        <div className="work-container container">
          <h1 class="main-heading text-center">
            How does It Works
          </h1>
          <div class="row">

            {workdata.map((currentElm) => {

              const { id, logo, title, info } = currentElm;
              return (
                <>
                  <div className='col-12 col-lg-4 text-center work-container-subdiv'>


                    <ion-icon name="cloud-download-outline" class={`fontawesome-style ${logo}`}></ion-icon>
                    <h2 className='sub-heading'>{title}</h2>

                    <p className="main-hero-para w-100 p-3" style={{textAlign:'justify'}}>{info}</p>
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
