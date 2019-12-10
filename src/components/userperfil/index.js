import React, { useState , useEffect } from 'react';
import {Link} from 'react-router-dom';
import firebase from '../../config/firebase';
import './userperfil.css';

function DadosUser(){
	return(
		<>
        <form className="formulario">
        	<div className="form-group"><label>Nome:</label></div>

		  	<div className="form-group"><label>Email:</label></div>

		  	<div className="form-group"><label>Setor:</label></div>	
		   
		    <div className="form-group"><label>Função:</label></div>
	
		</form>
		
		
		</>
		);
}

export default DadosUser;
