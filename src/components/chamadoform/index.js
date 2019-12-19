import React, { useState } from 'react';
import './chamadoform.css';
import {Link} from 'react-router-dom';
import { useSelector} from 'react-redux'
import firebase from '../../config/firebase';

function CriarChamado(){
	
}

function NewChamado(){
	const [carregando, setCarregando] = useState()
	const [msgTipo, setMsgTipo] = useState();
	const [titulo, setTitulo] = useState();
	const [problema, setProblema] = useState();
	const [setor, setSetor] = useState();
	const [descricao, setDesc] = useState();
	const usuarioEmail = useSelector(state => state.userEmail);

	const db = firebase.firestore();

	function abrirchamado(){
		setMsgTipo(null);
		setCarregando(1);
			db.collection('chamados').add({
				titulo: titulo,
				problema: problema,
				setor: setor,
				descricao: descricao,
				user: usuarioEmail,
				criacao: new Date()
			}).then(() => {
				setMsgTipo("aceito");
				setCarregando(0);
			
			}).catch(erro => {
			setMsgTipo("erro");
			setCarregando(0);
		});:
	}

	return(
		<>
        <form className="formulario">
		  <div className="form-group">
		    <label for="formGroupExampleInput">Título:</label>
		    <input onChange={(e) => setTitulo(e.target.value)} type="text" className="form-control"/>
		  </div>
		  <div className="form-group">
		    <label for="exampleFormControlSelect1">Problema:</label>
		    <select onChange={(e) => setProblema(e.target.value)}className="form-control" id="exampleFormControlSelect1">
		      <option disabled selected value>-- Selecionar --</option>
		      <option>Incidente</option>
		      <option>Solicitação</option>
		    </select>
		  </div>
		  <div className="form-group">
		    <label for="exampleFormControlSelect1">Setor:</label>
		    <select onChange={(e) => setSetor(e.target.value)} className="form-control" id="exampleFormControlSelect1">
		      <option disabled selected value>-- Selecionar --</option>
		      <option>1</option>
		      <option>2</option>
		      <option>3</option>
		      <option>4</option>
		    </select>
		  </div>
		  <div className="form-group">
		    <label for="exampleFormControlTextarea1">Descrição:</label>
		    <textarea onChange={(e) => setDesc(e.target.value)} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
		  </div>
	
			<button type="button" className="btn btn-primary my-3" id="bt2">Enviar</button>
	
	  	


		</form>
		<div className="msg-login text-center my-1">		  
			  	{msgTipo === 'aceito' && <span>Chamado realizado</span>}
			  	{msgTipo === 'erro' && <span>Não foi possível abrir chamado</span>}
		</div>
		
		</>
		);
}

export default NewChamado;
