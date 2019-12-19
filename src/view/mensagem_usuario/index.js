import React, { useState, useEffect } from 'react';
import {useSelector} from 'react-redux'; 
import './mensagem_usuario.css';
import {Link} from 'react-router-dom';
import Navbar from '../../components/navbar/index';

import firebase from '../../config/firebase';


function Mensagem_usuario(){

const [carregando, setCarregando] = useState();
const [titulo, setTitulo]=useState();
const [nivel, setNivel]=useState();
const [setor, setSetor]=useState();
const [data, setData]=useState();
const [texto, setTexto]=useState();
const [msg, setMsg] = useState();
const [msgTipo, setMsgTipo] = useState();
const [email]=useState(useSelector(state => state.userEmail));

const protocolo="000000"+1 
const status = "disponivel"


function create(){
    setCarregando(1);
    setMsgTipo(null);
    if (!titulo || !nivel|| !setor || !data || !texto) {
        setCarregando(0)
        setMsgTipo('erro')
        setMsg('Você precisa preencher todas as lacunas para realizar o cadastro!')
        return;
    }else{
        setMsgTipo('sucesso')
        setCarregando(0)
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
    return firebase.database().ref().child('mensagem').push(Sata);}
}



    return(
        <>
        <Navbar/> 
            
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
		    <select onChange={(e) => setNivel(e.target.value)} className="form-control" id="exampleFormControlSelect1">
		      <option disabled selected value>-- Selecionar --</option>
		      <option>urgente</option>
		      <option>alto</option>
		      <option>médio</option>
              <option>baixo</option>
		    </select>
		  </div>

		  <div className="form-group">
		    <label for="formGroupExampleInput">Data de finalização:</label>
		    <input onChange={(e) => setData(e.target.value)} type="date" className="form-control"/>
		  </div>

		  <div className="form-group">
		    <label for="exampleFormControlTextarea1">Descrição:</label>
		    <textarea onChange={(e) => setTexto(e.target.value)} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
		  </div>

                <div className="form-group">
                    
                
                {
                carregando ? <div class="spinner-border text-primary" role="status"><span class="sr-only">Loading...</span></div>
                :<button onClick={create} type='button' className='col-2 btn btn-lg btn-block mt-5 mb-5 btn-cadastro'>Enviar</button>
                }
                


                </div>

                <div className="msg-login text-black text-center my-1">
				{msgTipo === 'sucesso' && <span><strong>WoW:</strong>Pedido de chamada relizado com sucesso!</span>}
				{msgTipo === 'erro' && <span><strong>Ops:</strong> {msg} </span>}
		  	    </div>
            </form>
        
        </>
    )
}

export default Mensagem_usuario;



