import React from 'react';
import './barra_de_status_gerais.css';
import {Link, Redirect} from 'react-router-dom';

function Barra_de_status_gerais(){
    return(
        <nav className="navbar navbar-expand-lg ">
            <span className="navbar-brand text-white font-weight-bold">Tecnico</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="btn-menu" >&#7363;&#7363;&#7363;</span>
                </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item "><Link className="nav-link" to="/tecnico_disponiveis">Disponiveis </Link></li>
            <li className="nav-item "><Link className="nav-link" to="/tecnico_suspensos">Suspensos </Link></li>
            <li className="nav-item "><Link className="nav-link" to="/tecnico_aceitos">Aceitos </Link></li>
            <li className="nav-item "><Link className="nav-link" to="/tecnico_arquivados">Arquivados </Link></li>
        </ul>
        </div>
        </nav>
    )
}

export default Barra_de_status_gerais;