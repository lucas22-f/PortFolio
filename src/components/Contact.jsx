

import React from 'react'
import "../styles/Contact.css"
import cv from "../assets/Cv Lucas Figueroa.pdf"
function Contact() {
  return (
    <section className='cta' id='contacto'>
        <div className='container'>


            <div className="socialsc">
                <h1> Contacto </h1>
                <div className="iso">
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-github"></i>
                <i class="fa-solid fa-envelope"></i>
                <i class="fa-brands fa-whatsapp"></i>
                </div>
            </div>

            <div className="cv">
                
            <a href={cv} target="blank" download={true}><button className='btn'>  Descargar CV</button></a>
            </div>

        </div>


    </section>
  )
}

export default Contact