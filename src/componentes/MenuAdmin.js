import React, { Component } from "react";
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/dist/collapse'
import 'bootstrap/js/dist/offcanvas'
import 'bootstrap/js/dist/dropdown'


class MenuAdmin extends Component {
  render() {
    return <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to='/PageInicio'>
        <img src='https://phantom-marca.unidadeditorial.es/ce91c6b379eb9fd570986a8f016a334b/resize/720/f/webp/assets/multimedia/imagenes/2021/12/31/16409659213820.jpg' width={120} />
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" to='/PageInicio'>Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/PageUsuarios'>Usuarios</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/PageEventos'>Eventos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/PageEquipos'>Equipos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/PageDeportes'>Deportes</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  }
}

export default MenuAdmin;
