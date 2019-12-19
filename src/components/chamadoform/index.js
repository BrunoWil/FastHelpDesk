import React, { useState } from 'react';
import './chamadoform.css';
import {Link} from 'react-router-dom';
import { useSelector} from 'react-redux'
import firebase from '../../config/firebase';

class Chamado{
	constructor(titulo, setor, protocolo, data, descriçao, email, nivel){
        this.titulo = titulo;
        this.protocolo = protocolo;
        this.data = data;
		this.setor = setor;
		this.descriçao = descriçao;
		this.emailEnv = email;
		this.emailReceb = "";
		this.nivel = nivel;
    }
}

function writeUserData(user, userID) {
	firebase.database().ref('users/'+ userID +'/').set({
	  username: user.name,
	  email: user.email,
	  tipo: user.tipo,
	  setor: user.setor,
	  senha: user.senha
	});
  }


  function create(titulo, nivel, protocolo, setor, data, email, status, texto){
    var Sata ={
        titulo:titulo,
        nivel:nivel,
        protocolo:protocolo,
        setor:setor,
        data:data,
        email:email,
        status:status,
        idtecnico:"",
        texto:texto,
    };
    return firebase.database().ref().child('mensagem').push(Sata);
}


function NewChamado(){
	const [carregando, setCarregando] = useState()
	const [msgTipo, setMsgTipo] = useState();
	const [titulo, setTitulo] = useState();
	const [setor, setSetor] = useState();
	const [descricao, setDesc] = useState();

	const usuarioEmail = useSelector(state => state.userEmail);

	const db = firebase.firestore();

	// function abrirchamado(){
	// 	setMsgTipo(null);
	// 	setCarregando(1);
	// 	storage.ref(`Documentos/${documento.name}`).put(documento).then(() => {
	// 		db.collection('chamados').add({
	// 			titulo: titulo,
	// 			problema: problema,
	// 			setor: setor,
	// 			descricao: descricao,
	// 			documento: documento.name,
	// 			user: usuarioEmail,
	// 			criacao: new Date()
	// 		}).then(() => {
	// 			setMsgTipo("aceito");
	// 			setCarregando(0);
			
	// 		}).catch(erro => {
	// 		setMsgTipo("erro");
	// 		setCarregando(0);
	// 	});
	// });
	// }


	return(
		<>
        <form className="formulario">
		  <div className="form-group">
		    <label for="formGroupExampleInput">Título:</label>
		    <input onChange={(e) => setTitulo(e.target.value)} type="text" className="form-control"/>
		  </div>

		  <div className="form-group">
		    <label for="exampleFormControlSelect1">Setor:</label>
		    <select onChange={(e) => setSetor(e.target.value)} className="form-control" id="exampleFormControlSelect1">
		      <option disabled selected value>-- Selecionar --</option>
		      <option>Administrativo</option>
		      <option>Financeiro</option>
		      <option>Recursos humanos</option>
		      <option>Comercial</option>
              <option>Operacional</option>
		    </select>
		  </div>

		  <div className="form-group">
		    <label for="exampleFormControlSelect1">Nível:</label>
		    <select onChange={(e) => setUrg(e.target.value)} className="form-control" id="exampleFormControlSelect1">
		      <option disabled selected value>-- Selecionar --</option>
		      <option>emergência</option>
		      <option>muita urgência</option>
		      <option>urgente</option>
		      <option>pouca urgência</option>
              <option>não urgente</option>
		    </select>
		  </div>

		  <div className="form-group">
		    <label for="exampleFormControlSelect1">Protocolo:</label>
		    <select onChange={(e) => setProto(e.target.value)} className="form-control" id="exampleFormControlSelect1">
		      <option disabled selected value>-- Selecionar --</option>
		      <option>0000001</option>
		      <option>0000002</option>
		      <option>0000003</option>
		      <option>0000004</option>
              <option>0000005</option>
		    </select>
		  </div>

		  <div className="form-group">
		    <label for="formGroupExampleInput">Data de finalização:</label>
		    <input onChange={(e) => setData(e.target.value)} type="date" className="form-control"/>
		  </div>

		  <div className="form-group">


		    <label for="exampleFormControlTextarea1">Descrição:</label>
		    <textarea onChange={(e) => setDesc(e.target.value)} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
		  </div>


	
			<button onClick={create(titulo, Urg, protocolo, setor, data, usuarioEmail, status, descriçao)}
			 type="button" className="btn btn-primary my-3" id="bt2">Enviar</button>
	
	  	


		</form>
		<div className="msg-login text-center my-1">		  
			  	{msgTipo === 'aceito' && <span>Chamado realizado</span>}
			  	{msgTipo === 'erro' && <span>Não foi possível abrir chamado</span>}
		</div>
		
		</>
		);
}

export default NewChamado;
