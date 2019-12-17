import React, {Component} from 'react';
import Navbar from '../../components/navbarTec/index';
import '../UsuariosCadastradosTecnico/UsuariosCadastradosTecnico.css';
import firebase from 'firebase';
import '../../config/firebase';
import { Link } from 'react-router-dom';
import FirebaseService from '../services/FirebaseService';

var database = firebase.database();
 
var list= [];




var userData;

//função que pega apenas um elemento
function show2(userID){
    var starCountRef = firebase.database().ref('users/'+ userID +'/');
    starCountRef.on('value', function(snapshot) {
        userData = snapshot.val();
    });
}




//função quem mostra na tela
function showScreen(user) {
    return(
        <div className="row">
            <div className="col-md-3 themed-grid-col2">{user.username}</div>
            <div className="col-md-3 themed-grid-col2">{user.email}</div>
            <div className="col-md-3 themed-grid-col2">{user.tipo}</div>
            <div className="col-md-3 themed-grid-col2">{user.setor}</div>
        </div>
    )
}

//criando função para poder retornar eles e mostrar na tela
// function listaUsers(){
//     FirebaseService.getDataList('users/', (dataReceived) => 
//     this.ListeningStateChangedEvent({data: dataReceived})).map(showScreen())
    
// }


function listaUsers(){
    
    firebase.database().ref('users/').once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var childKey = childSnapshot.key;
          var childData= childSnapshot.val();
          console.log(childData);
        });
      });
      
}


function UsuariosCadastrados(){
    var childData;

    return(  
        <div className="uc">
            <Navbar></Navbar>
            <h5 className="font-weight-bold text-white">Lista de Usuários</h5>
            <div className="row">
                <div className="col-md-3 themed-grid-col font-weight-bold text-white">Nome</div>
                <div className="col-md-3 themed-grid-col font-weight-bold text-white">Email</div>
                <div className="col-md-3 themed-grid-col font-weight-bold text-white">Tipo de Usuário</div>
                <div className="col-md-3 themed-grid-col font-weight-bold text-white">Setor</div>
            </div>
            
           
           {listaUsers()}
           

            <Link  type="button" className="bt btn-primary" to='/novousuario'>Cadastrar Usuário</Link>
            

        </div>
        
       

    )

}

export default UsuariosCadastrados;