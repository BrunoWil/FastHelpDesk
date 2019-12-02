import React from 'react';
import '../RegistroDePatrimonio/RegistroDePatrimonio.css';
import Navbar from '../../navbar/index';
import firebase from 'firebase';
import '../../config/firebase';

//Função que adicionar usuario no database
function writeUserData(pat) {
    firebase.database().ref('patrimonios/'+ pat.id +'/').set({
      id: pat.id,
      tipo: pat.tipo,
      marca: pat.marca,
      setor: pat.setor
    });
  }

//criando função para poder retornar eles e mostrar na tela



function show2(patID){
    var starCountRef = firebase.database().ref('patrimonio/'+ patID +'/');
    starCountRef.on('value', function(snapshot) {
        var patData = snapshot.val();
    });
}

function showScreen(pat) {
    return(
        <div className="row">
            <div className="col-md-3 themed-grid-col2">nome</div>
            <div className="col-md-3 themed-grid-col2">Email</div>
            <div className="col-md-3 themed-grid-col2">Tipo de Usuário</div>
            <div className="col-md-3 themed-grid-col2">Cargo</div>
        </div>
    )
}

//criando patrimonio para teste
class Patrimonio{
     constructor(id, tipo, marca, setor){
        this.id = id;
        this.tipo = tipo;
        this.marca = marca;
        this.setor = setor;
    }
}
  
var pat1= new Patrimonio("0001", "computador", "DELL", "informatica");
var pat2= new Patrimonio("0002", "computador", "DELL", "administrativo");


function RegistroDePatrimonio(){
    writeUserData(pat1);
    writeUserData(pat2);
    return(
        <div className="setor">
            <Navbar></Navbar>
            <h5 className="font-weight-bold text-white">Patrimônios</h5>

            <div class="row">
                
                <div className="col-md-3 themed-grid-col font-weight-bold text-white">Identificador</div>
                <div className="col-md-3 themed-grid-col font-weight-bold text-white">Tipo</div>
                <div className="col-md-3 themed-grid-col font-weight-bold text-white">Marca</div>
                <div className="col-md-3 themed-grid-col font-weight-bold text-white">Setor</div>
            </div>

            <button type="button" class="bt">Cadastrar Patrimônio</button>
            
        </div>



    );
}

export default RegistroDePatrimonio;
