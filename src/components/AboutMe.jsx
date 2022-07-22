import React from "react";
import "../styles/AboutMe.css"
function AboutMe() {
  return (
    <section className="About" id="ab">
      <div>
        <i className="fa-solid fa-mug-hot xd"></i>
      </div>


      <div className="tray">
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
            <p> UTN BA Fullstack</p>
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

    </section>
  );
}

export default AboutMe;
