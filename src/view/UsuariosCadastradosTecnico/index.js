import React, {Component} from 'react';
import '../../components/navbar/index';
import Navbar from '../../components/navbar/index';
import '../UsuariosCadastradosTecnico/UsuariosCadastradosTecnico.css';
import configFB from '../../config/firebase';




function UsuariosCadastrados(){
    return(
        <div className="uc">
            <Navbar></Navbar>
            <h5 className="font-weight-bold text-white">Lista de Usuários</h5>
            <div className="row">
                <div className="col-md-3 themed-grid-col font-weight-bold text-white">Nome</div>
                <div className="col-md-3 themed-grid-col font-weight-bold text-white">Email</div>
                <div className="col-md-3 themed-grid-col font-weight-bold text-white">Tipo de Usuário</div>
                <div className="col-md-3 themed-grid-col font-weight-bold text-white">Cargo</div>
            </div>
            <button type="button" class="bt">Cadastrar Usuário</button>
            
        </div>
        


    )
}

export default UsuariosCadastrados;