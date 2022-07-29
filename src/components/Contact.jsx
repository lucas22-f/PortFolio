

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
                  <a href="https://www.linkedin.com/in/lucas-figueroa-3b5743226/"><div className='idiv'><i className="fa-brands fa-linkedin"></i></div></a>
                  <a href="https://github.com/lucas22-f"><div className='idiv'><i className="fa-brands fa-github"></i></div></a>
                  <a href="mailto:lucas.200061@gmail.com"><div className='idiv'><i className="fa-solid fa-envelope"></i></div></a>
                  <a href="https://wa.me/5491165427871"><div className='idiv'><i className="fa-brands fa-whatsapp"></i></div></a>
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