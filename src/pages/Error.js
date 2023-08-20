import React from 'react'
import { NavLink } from 'react-router-dom';
import img01 from '../images/404.webp'
export default function Error() {
  return (
    <>
    <div className="container-error">

        <img src={img01} alt="" />
        <h2>Page Not Found</h2>
        <button >

          <NavLink to="/" className="back-btn">

            Back To Home
          </NavLink>
          
          </button>
    </div>
    </>
  )
}
