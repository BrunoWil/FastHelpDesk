import React, {Component} from 'react';
import Navbar from '../../navbar/index';
import '../UsuariosCadastradosTecnico/UsuariosCadastradosTecnico.css';
import firebase from 'firebase';
import '../../config/firebase';

var database = firebase.database();
 //Função que adicionar usuario no database
function writeUserData(user, userID) {
    firebase.database().ref('users/'+ userID +'/').set({
      username: user.name,
      email: user.email,
      tipo: user.tipo,
      cargo: user.cargo
    });
  }

//criando função para poder retornar eles e mostrar na tela



function show2(userID){
    var starCountRef = firebase.database().ref('users/'+ userID +'/');
    starCountRef.on('value', function(snapshot) {
        var userData = snapshot.val();
        return userData
    });
}

function showScreen(user) {
    return(
        <div className="row">
            <div className="col-md-3 themed-grid-col2">{user.username}</div>
            <div className="col-md-3 themed-grid-col2">Email</div>
            <div className="col-md-3 themed-grid-col2">Tipo de Usuário</div>
            <div className="col-md-3 themed-grid-col2">Cargo</div>
        </div>
    )
}

//criando usuarios para teste
class User{
     constructor(name, email, tipo, cargo){
        this.name = name;
        this.email = email;
        this.tipo = tipo;
        this.cargo = cargo;
    }
}
  
var user1= new User("Beatriz", "beatriz@gmail.com", "adm", "poo");
var user2= new User("Alisson", "alisson@gmail.com", "adm", "poo");


function UsuariosCadastrados(){

    //Adicionei Usuarios no FastHelpPOO@gmail.com/bblw1234
    writeUserData(user1, "001");
    writeUserData(user2, "002");

    var user =show2("001");

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
           
            <button type="button" className="bt">Cadastrar Usuário</button>
            
            {showScreen(user)}

        </div>
        
        

    )

}

export default UsuariosCadastrados;