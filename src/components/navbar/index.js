import React from 'react';
import './navbar.css';
import {Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import firebase from '../../config/firebase';
import 'firebase/auth';


function NavBar() {

	const dispatch = useDispatch();

	return(
		<>
			<nav className="navbar navbar-expand-lg">
			  <span className="navbar-brand font-weght-bold" >FastHelp</span>
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				    <i class="fas fa-ellipsis-v" id="logo"></i>
				  </button>
				  <div className="collapse navbar-collapse" id="navbarNav">
				    <ul className="navbar-nav">
				      <li className="nav-item">
				        <Link className="nav-link" to="/inicio"><i class="fas fa-home"></i>Início</Link>
				        </li>
				      <li className="nav-item">
				        <Link className="nav-link" to="/novochamado"><i class="fas fa-plus"></i>Chamado</Link>
				      </li>
				      <li className="nav-item">
				        <Link className="nav-link" to="#">Dúvidas</Link>
				      </li>
				      <li className="nav-item">
				        <Link className="nav-link" to="/perfil"><i class="fas fa-user"></i>Perfil</Link>
				      </li>
				      <li className="nav-item">
				        <Link to='/' className="nav-link sair" onClick={() => dispatch( { type: 'LOG_OUT' } )}>Sair</Link>

				      </li>
				    </ul>
				  </div>
				  
				

			</nav>
			

		</>
		);
}

export default NavBar;