

import React from 'react'
import hed1 from "../assets/hed1.jpeg"
function Header() {
  return (
    <div className='header'>
      <div className='img1'>
        <img src={hed1} alt="img" />
      </div>


      <div className='hed-txt'> <h1>Hola soy Lucas Web Developer con preferencia al Back !</h1> </div>


    </div>
  )
}

export default Header