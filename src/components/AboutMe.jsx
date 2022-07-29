import React from "react";
import "../styles/AboutMe.css"
import m1 from "../assets/m1.png"
import m2 from "../assets/m2.png"
import m3 from "../assets/m3.png"
import m4 from "../assets/m4.png"
import m5 from "../assets/m5.png"
function AboutMe() {
  return (
   
   
    <section className="About" id="about" >
      <div className="tray">
      <div>
        <i className="fa-solid fa-mug-hot xd"></i>
      </div>
        <p>
          Esta es mi trayectoria...
        </p>
        <div className="i-progress">
          <div className="card">
            <i className="fa-solid fa-code"></i>
            <p>Universidad Nacional de Lanús</p>
            <p>Lic en sistemas</p>
            <p>2019-Actualidad</p>
          </div>
          <div className="card">
            <i className="fa-solid fa-keyboard"></i>
            <p> UTN BA</p>
            <p>Fullstack</p>
            <p>2021-2022</p>
          </div>

          <div className="card">
            <i className="fa-solid fa-laptop-code"></i>
            <p>Coder-House</p>
            <p>Fullstack</p>
            <p>2022-Actualidad</p>
          </div>

        </div>

      </div>

      <div className="visto">
        <h3>Tecnologias y Herramientas Vistas</h3>
        <div className="imgs">
          <div><i class="fa-brands fa-html5"></i><p>HTML</p></div>
          <div><i class="fa-brands fa-css3"></i><p>CSS3</p></div>
          <div><i class="fa-brands fa-js"></i><p>Java Script</p></div>
          <div><i class="fa-brands fa-node-js"></i><p>Node JS</p></div>
          <div><i class="fa-brands fa-react"></i><p>React</p></div>
          <div><i class="fa-brands fa-git-alt"></i><p>Git</p></div>
        </div>
        <div className="oimgs">
        <h5>Otras..</h5>
        <div className="im">
          <img src={m1} alt="mongoDB" />
          <img src={m2} alt="mysql" />
          <img src={m3} alt="expressjs" />
          <img src={m4} alt="npm" />
          <img src={m5} alt="postman" />

        </div>
        
        </div>
        
      </div>

    </section>
   
  );
}

export default AboutMe;
