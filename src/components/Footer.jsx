import React from 'react'
import "../styles/Footer.css"
import f1 from "../assets/f1.png"
function Footer() {
    return (
        <div className='miFooter'>
            <footer className='footer1'>
                <h2>Gracias por visitar mi PortFolio personal</h2>
                <div className='t-footer'>
                    <p>Espero tu mensaje de contacto!</p>
                    <p>Me ayudarias muchisimo compartiendo el link con diferentes empresas/personas para conseguir un trabajo!</p>
                    <div className='f1'>
                        <img src={f1} alt="footer-image" />
                    </div>

                    <p>© Lucas Figueroa 2022 </p>
                </div>
            </footer>
        </div>
    )
}

export default Footer