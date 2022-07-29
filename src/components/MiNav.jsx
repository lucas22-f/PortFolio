import { useEffect, useState } from "react";
import "../styles/MiNav.css"
function MiNav() {
    const [sideBar, setSideBar] = useState(false);

 const handletoggle = () =>{
    setSideBar(!sideBar)
 }


    return (
        <nav className={sideBar ? "nav1":"nav1 active"}>
            <div className='navt'><h1><a href="#">Lucas</a> </h1></div>
            <ul className={sideBar ? "nav-menu" : "nav-menu active"}>
                <li><a href="#about">Sobre mi</a></li>
                <li><a href="#proyectos">Proyectos</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
            <div className="hmb" ><i onClick={handletoggle} className="fa-solid fa-bars"></i></div>
            <div className={sideBar ? "socials" : "socials active"}>
                <a href="https://github.com/lucas22-f"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/lucas-figueroa-3b5743226/"><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://www.instagram.com/lucas.figueroa22/?theme=dark"><i className="fa-brands fa-instagram"></i></a>
            </div>

        </nav>
    )
}

export default MiNav