import React, { useState } from 'react'
import img01 from './images/about-img01.webp';
import img02 from './images/about-img02.webp'
import howtouse from './API/howtouseApi';

export default function AboutUs() {
  const [aboutData, setAboutData] = useState(howtouse);


  return (


    <>
      <section className='common-section our-services'>
        <div class="container mb-5">
          <div class="row">
            <div class="col-12 col-lg-5">
              <img src={img01} alt="" />
            </div>
            <div class="col-12 col-lg-7 our-services-list">
              <h3 class="mini-title"> -- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY</h3>
              <h1 class="main-heading">How to Use the App?</h1>

              {aboutData.map((currentElem) => {

                const { title, info,id } = currentElem;

                return (
                  <>
                    <div class="row our-services-info" key={id}>
                      <div class="col-1 our-services-number">{id}</div>
                      <div class="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p class="main-hero-para">
                          {info}
                        </p>
                      </div>

                    </div>

                  </>
                )

              })}
              <br />

              <button class="btn-style btn-style-border">Learn More</button>
            </div>

          </div>

          <div class="row">
           
            <div class="col-12 col-lg-7 our-services-leftside-content">
              <h3 class="mini-title"> -- MAKE PAYMENT ONLINE EASY AND SECURE</h3>
              <h1 class="main-heading">How to do Online <br/> Payment to Bank Account?</h1>

              {aboutData.map((currentElem) => {

                const { title, info,id } = currentElem;

                return (
                  <>
                    <div class="row our-services-info" key={id}>
                      <div class="col-1 our-services-number">{id}</div>
                      <div class="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p class="main-hero-para">
                          {info}
                        </p>
                      </div>

                    </div>

                  </>
                )

              })}
              <br />

              <button class="btn-style btn-style-border">Learn More</button>
            </div>
            <div class="col-12 col-lg-5 our-service-rightside-img">
              <img src={img02} alt=""  />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
