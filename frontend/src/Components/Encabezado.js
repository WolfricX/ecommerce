import React from "react";
import {Link} from "react-router-dom";

function Encabezado(){
    return(
     <header>
      <nav className="menu">
  <ul>
    <li>
      <a href="#">INICIO</a>
    </li>
    <li>
      <a href="#">PRODUCTOS</a>
    </li>
    <li>
      <a href="#">PROMOCIONES</a>
    </li>
    <li>
      <a href="#">¿QUIENES SOMOS?</a>
    </li>
    <li>
      <a href="cuenta.html">
        <img className="carrito" src="IMG\usuario-de-perfil.png" />
      </a>
    </li>
    <li className="active">
      <a href="carrito.html">
        <img className="carrito" src="IMG\carrito-de-compras.png" />
      </a>
    </li>
  </ul>
</nav>

      </header>
    )
}

export default Encabezado;