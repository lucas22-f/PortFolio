

import React from 'react'
import "../styles/Proyects.css"
import p1 from "../assets/p1.png"
import p2 from "../assets/p2.png"
import p3 from "../assets/p3.png"

function Proyects() {
  return (
    <section className='proy' id='proyectos'>
    <div className='fx2'>
        <div className='tl'>
        
        <h1>
        <i class="fa-solid fa-laptop-code"></i>
        Proyectos  
        <i class="fa-solid fa-diagram-project"></i>
        </h1>
        </div>

        <div className="hcards">
            <div className="hcard">
                <img src={p1} alt="img1" />
                <p>Grill House</p>
            </div>
            <div className="hcard">
                <img src={p2} alt="img1" />
                <p>Buen Viaje</p>
            </div>
            <div className="hcard">
                <img src={p3} alt="img1" />
                <p>PortFolio</p>
            </div>
        </div>
    
    
    </div>

    </section>
  )
}

export default Proyects