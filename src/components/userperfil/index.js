import React from 'react';
import {Component} from 'react';
import './userperfil.css';
import FirebaseService from '../../view/services/FirebaseService';
import { useSelector } from 'react-redux'; 
import  '../../config/firebase';
import '../../view/login/index';
import '../../store/userReducer';
import userReducer from '../../store/userReducer';

var i;
var userEmail="lara@gmail.com";

class UsuariosCadastrados extends Component {

	constructor(props){
	  super(props);
	  this.state = {
		  data : [],
		  
	  };
	}
	
  componentDidMount(){
	FirebaseService.getDataListNoFilter('users/',(dataReceived) => this.setState({data: dataReceived}))
	
  }
  
  
  igual(lista){
	//userEmail = "lara@gmail.com";
	
	for (i = 0; i < lista.length; i++) {
		if(lista[i].email===userEmail){
			return(
				
				<form className="formulario">
					<div className="form-group"><label><b>Nome:</b> {lista[i].username}</label></div>

					<div className="form-group"><label><b>Email:</b> {lista[i].email}</label></div>

					<div className="form-group"><label><b>Setor:</b> {lista[i].setor}</label></div>	
				
					<div className="form-group"><label><b>Tipo de usuário:</b> {lista[i].tipo}</label></div>
				</form>
		
			)
		}
	}
}
  
  render(){
  
  return(
	  <>
	  	
		{console.log(this.state.data.length)}
		{this.igual(this.state.data)}
		
		
   
  </>
  );
  }
  }
  export default UsuariosCadastrados;
  