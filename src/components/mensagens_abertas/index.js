import React from 'react';
import './mensagens_abertas.css';
import {Link, Redirect} from 'react-router-dom';
import firebase from '../../config/firebase';
import { useSelector, useDispatch} from 'react-redux';
import FirebaseService from '../../view/services/FirebaseService'




function Mensagens_Abertas({idkey,titulo,nivel,protocolo,data,setor,email,status,id_tecnico}){

    var setNivel;

    if(nivel!==null){
        if (nivel === 'urgente'){setNivel= <p className="row mx-3"><strong>Nivel: </strong><button className=" btn btn-nivel-u btn-center font-weight-bold mb-auto ml-2 mt-1" type="button">{nivel}</button></p>
    }
    
        if (nivel === 'alto'){setNivel=<p className="row mx-3"><strong>Nivel: </strong><button className=" btn btn-nivel-a btn-center font-weight-bold mb-auto ml-2" type="button">{nivel}</button></p> 
        }
    
        if (nivel === 'médio'){setNivel=<p className="row mx-3"><strong>Nivel: </strong><button className=" btn btn-nivel-m btn-center font-weight-bold mb-auto ml-2" type="button">{nivel}</button></p>
        }
    
        if (nivel === 'baixo'){setNivel=<p className="row mx-3"><strong>Nivel: </strong><button className=" btn btn-nivel-b btn-center font-weight-bold mb-auto ml-2 " type="button">{nivel}</button></p> 
        }
                }



    var status;
    var setStatus_button1;
    var setStatus_button2;
    var	userEmail;
console.log(idkey)
    userEmail=useSelector(state => state.userEmail)
    var nodePath='mensagem/'+idkey
// console.log(nodePath)

    function id_tecnico_aceito(){
        var Sata ={
            status:"pendente",
            idtecnico:userEmail,
        };
        firebase.database().ref(nodePath).update(Sata);
        
    }

    function id_tecnico_diponivel(){
        var Sata ={
            status:"disponivel",
            idtecnico:"",
        };
        firebase.database().ref(nodePath).update(Sata);
    }

    function id_tecnico_desarquivar(){
        var Sata ={
            status:"pendente",
            idtecnico:userEmail,
        };
        firebase.database().ref(nodePath).update(Sata);

    }
    function id_tecnico_suspender(){
        var Sata ={
            status:"suspenso",
            idtecnico:userEmail,
        };
        firebase.database().ref(nodePath).update(Sata);
    }


    if(status!==null){

        if(status==="disponivel"){
            setStatus_button1=<button onClick={id_tecnico_suspender} className="mt-3 mx-3 font-weight-bold btn btn-center btn-suspender" type="button">Suspender</button>
            setStatus_button2=<button onClick={id_tecnico_aceito} className="mt-3 mx-3 font-weight-bold btn btn-center btn-aceitar" type="button">Aceitar</button>
        }

        if(status==="suspenso"){
            setStatus_button1=<button onClick={id_tecnico_diponivel} className="mt-3 mx-3 font-weight-bold btn btn-center btn-disponivel" type="button">Disponibilizar</button>
        }

        if(status==="arquivado"){
            setStatus_button1=<button onClick={id_tecnico_desarquivar} className="mt-3 mx-3 font-weight-bold btn btn-center btn-arquivado" type="button">Desarquivar</button>
        }
    }


    return(
        <>
        <div >

            <div className="btn-mensagem mx-5 mt-5 row">

                <div className="row ml-3 mr-2 text-left">

                    <p> <strong>Protocolo: </strong>{protocolo} 
                        <br/> 
                    <strong>Titulo: </strong> {titulo} </p>
                </div>

                <div className="row mx-3 mr-2 text-left">
                    <p> <strong>Data: </strong>{data} 
                        <br/> 
                    <strong>Setor: </strong>{setor}</p>
                </div>
                
                <div className="row mx-3 mr-2 text-left">
                    <p> <strong>Email: </strong>{email}</p>
                </div>
                        
                    {setNivel}
                    {setStatus_button1}
                    {setStatus_button2}
                </div>

            </div>

        <br/><br/><br/>
        
        </>
    )
}

export default Mensagens_Abertas;