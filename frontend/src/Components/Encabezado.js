import React from "react";
import {Link} from "react-router-dom";

function Encabezado(){
    return(
     <header>
      <h1>Patito SA de CV</h1>
       <nav>
        <link to="/">Inicio</link>
        <link to="/Contacto">Contacto</link>
        <link to="/Nosotros">Nosotrosa</link>
       </nav>
      </header>
    )
}

export default Encabezado;