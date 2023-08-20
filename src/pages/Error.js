import React from 'react'
import { NavLink } from 'react-router-dom';
import img01 from '../images/404.webp'
export default function Error() {
  return (
    <>
    <div className="container-error">

        <img src={img01} alt="" />
        <h2>we are Sorry!, Page Not Found</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio veniam placeat quae exercitationem quis ullam!</p>
        <button >

          <NavLink to="/" className="back-btn">

            Back To Home
          </NavLink>
          
          </button>
    </div>
    </>
  )
}
