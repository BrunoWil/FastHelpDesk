import React, { useState } from 'react';
import { Link, Redirect} from 'react-router-dom';
import './login.css'
import imagemLogo from '../../components/imagens/logo.png'
import {Component} from 'react';
import FirebaseService from '../../view/services/FirebaseService';

import firebase from '../../config/firebase';
import 'firebase/auth';



import { useSelector, useDispatch} from 'react-redux'; 

var i;

function TelaLogin(){
	const [email, setEmail] = useState();
	const [senha, setSenha] = useState();
	const [tipo, setTipo] = useState();
	const [msgTipo, setMsgTipo] = useState();

	const dispatch = useDispatch();


	
	function Logar(){
		firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado =>{
				setMsgTipo('aceito')
				dispatch({type: 'LOG_IN', userEmail: email})
		}).catch(erro =>{
				setMsgTipo('erro')
		});
	 
	}

	document.addEventListener('keydown', function(e) {
		if(e.key == "Enter"){
		  document.getElementById("loginButton").click();
		}
	});

	return(
		<div className="login-content d-flex align-itens-center">
			
			{
				useSelector(state => state.userLogado) > 0  && tipo==="Técnico" ? <Redirect to='/inicio_tecnico' />:null}
				{useSelector(state => state.userLogado) > 0 && tipo==="Solicitante" ? <Redirect to='/inicio' /> : null
			}
			
			<form className="form-signin mx-auto">
			  <div className="text-center mb-4">
			  	<div className="logoimg"><img src={imagemLogo} /></div>
			    <h1 className="h3 mb-3 text-white font-weight-bold"><i className="fas fa-user-lock"></i>Login</h1>
			  </div>
  			
			    <input onChange={(e) => setEmail(e.target.value)} type="email" id="inputEmail" className="form-control my-2 rounded-pill" placeholder="Email" />	 
			    <input onChange={(e) => setSenha(e.target.value)}type="password" id="inputPassword" className="form-control my-2 rounded-pill " placeholder="Senha" />
				<div className="form-group">
		    		<select onChange={(e) => setTipo(e.target.value)}className="form-control" id="exampleFormControlSelect1">
		      		<option disabled selected value>-- Tipo de usuário --</option>
		      		<option>Técnico</option>
		      		<option>Solicitante</option>
		    		</select>
		  		</div>
			  <button onClick={Logar} id="loginButton" className="btn btn-lg btn-primary btn-block font-weight-bold rounded-pill" type="button">Entrar</button>
			  
			  <div className="msg-login text-white text-center my-1">
			  
			  	{msgTipo === 'aceito' && <span>Acesso permitido</span>}
			  	{msgTipo === 'erro' && <span>Acesso negado!!!</span>}
			  </div>

			  </form>
		</div>
		);
}


export default TelaLogin;
