import React, { useState } from 'react';
import './novoUsuarioForm.css';
import {Link} from 'react-router-dom';
import { useSelector} from 'react-redux'
import firebase from 'firebase';
import '../../config/firebase';


class User{
	constructor(name, email, senha, tipo, setor){
        this.name = name;
        this.email = email;
        this.tipo = tipo;
		this.setor = setor;
		this.senha = senha;
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




function NewUsuario(){

    const [carregando, setCarregando] = useState();
	const [msgTipo, setMsgTipo] = useState();
	const [msg, setMsg] = useState();
    
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [confirm, setConfirm] = useState();
	const [tipo, setTipo] = useState();
    const [setor, setSetor] = useState();


	function CriarNovoUsuario(){
		setCarregando(1);
		setMsgTipo(null);
		var user1= new User (nome, email, senha, tipo, setor)
		
		if (!email || !senha || !nome || !confirm || !tipo || !setor) {
			setCarregando(0)
			setMsgTipo('erro')
			setMsg('Você precisa preencher todas as lacunas para realizar o cadastro!')
			return;
		}
		if (senha != confirm) {
			setCarregando(0)
			setMsgTipo('erro')
			setMsg('As senhas precisam estar iguais para realizar o cadastro!')
			return;
		}
		else {
			firebase.auth().createUserWithEmailAndPassword(email, senha).then( resultado => { 
				setCarregando(0)
				setMsgTipo('sucesso')
				writeUserData(user1, nome+senha)
			}).catch( erro => {
				setCarregando(0)
				setMsgTipo('erro')
				switch(erro.message)
				{
					case 'Password should be at least 6 characters':
						setMsg('A senha deve ter pelo menos 6 caracteres!');
						break;
					case 'The email address is already in use by another account.':
						setMsg('Este Email já está sendo utilizado!');
						break;
					case 'The email address is badly formatted.':
						setMsg('O formato do seu Email é inválido!');
						break;
					default:
						setMsg('Não possível cadastrar. Tente mais tarde!')
						break;

				}

			})
		}
	};
	

	return(
		<>
        <form className="formulario">

		  <div className="form-group">
		    <label for="formGroupExampleInput">Digite o nome completo do usuário:</label>
		    <input onChange={(e) => setNome(e.target.value)} type="text" className="form-control"/>
		  </div>

          <div className="form-group">
		    <label for="formGroupExampleInput">Digite o Email do usuário:</label>
		    <input onChange={(e) => setEmail(e.target.value)} type="text" className="form-control"/>
		  </div>

          <div className="form-group">
		    <label for="formGroupExampleInput">Digite a senha do usuário:</label>
		    <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control"/>
		  </div>

          <div className="form-group">
		    <label for="formGroupExampleInput">Confirme a senha:</label>
		    <input onChange={(e) => setConfirm(e.target.value)} type="password" className="form-control"/>
		  </div>

		  <div className="form-group">
		    <label for="exampleFormControlSelect1">Tipo de usuário:</label>
		    <select onChange={(e) => setTipo(e.target.value)}className="form-control" id="exampleFormControlSelect1">
		      <option disabled selected value>-- Selecionar --</option>
		      <option>Técnico</option>
		      <option>Solicitante</option>
		    </select>
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
			
			{
				carregando ? <div class="spinner-border text-primary" role="status"><span class="sr-only">Loading...</span></div>
				: <button type="button" className="btn btn-primary my-3" id="bt2" onClick={CriarNovoUsuario}>Cadastrar</button>
			}
			

			<div className="msg-login text-black text-center my-1">
				{msgTipo === 'sucesso' && <span><strong>WoW:</strong>Cadastro realizado com sucesso!</span>}
				{msgTipo === 'erro' && <span><strong>Ops:</strong> {msg} </span>}
		  	</div>

		</form>
		</>
		 
		);
}


export default NewUsuario;