import React, { useState, useEffect } from 'react';
import {useSelector} from 'react-redux'; 
import './mensagem_usuario.css';
import {Link} from 'react-router-dom';
import Navbar from '../../components/navbar';

import firebase from '../../config/firebase';


function Mensagem_usuario(){

const [titulo, setTitulo]=useState();
const [nivel, setNivel]=useState();
const [setor, setSetor]=useState();
const [data, setData]=useState();
const [texto, setTexto]=useState();

const email= useSelector(state => state.usuarioEmail)
const protocolo="000000"+1 
const status = "disponivel"


function create(){
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



    return(
        <>
        <Navbar/> 
            
        <div className="col-12 mt-5">
            <div className="row">
                <h3 className="mx-auto font-weight-bold"></h3>
            </div>
            <form>
                <div className="form-group">

                    <label>Título</label>
                    <input onChange={(e) => setTitulo(e.target.value) } type="text" className="form-control" />
                </div>


                <div className="form-group row">

                <div className="col-2">
                    <label>Nivel</label>
                    <select onChange={(e) => setNivel(e.target.value) } className="form-control" >
                        <option disabled selected value>-- Selecione um tipo --</option>
                        <option>Urgente</option>
                        <option>Alto</option>
                        <option>Medio</option>
                        <option>Baixo</option>
                    </select>                    
                </div>
                    <div className="col-2">
                        <label>Data</label>
                        <input onChange={(e) => setData(e.target.value) } type="date"  className="form-control" />
                    </div>

                    <div className="col-2">
                        <label>Setor</label>
                        <select onChange={(e) => setSetor(e.target.value) } className="form-control" >
                            <option disabled selected value>-- Selecione um nivel --</option>
                            <option>Administrativo</option>
                            <option>Financeiro</option>
                            <option>Recursos Humanos</option>
                            <option>Comercial</option>
                            <option>Operacional</option>
                        </select>                    
                    </div>
                </div>

                <div className="form-group">
                    <label>Texto</label>
                    <textarea onChange={(e) => setTexto(e.target.value) } className="form-control" rows="3" />
                

                <button onClick={create} type='button' className='col-2 btn btn-lg btn-block mt-5 mb-5 btn-cadastro'>Enviar</button>


                </div>
            </form>
        </div>
        </>
    )
}

export default Mensagem_usuario;



