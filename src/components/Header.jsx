import React from "react";
import hed1 from "../assets/hed1.jpeg";
import "../styles/Header.css";
function Header() {
  return (
    <div className="header">
      <div className="hd1">
        <div className="img1">
          <img src={hed1} alt="img" />
        </div>

        <div className="hed-txt">
          <h1>
            ¡Hola soy Lucas! <br></br>Soy Desarrollador Web
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
