import React from 'react';
import './mensagem_estrutura.css';
import {Link, Redirect} from 'react-router-dom';
import firebase from '../../config/firebase';
import { useSelector, useDispatch} from 'react-redux';



function Mensagem_estrutura({idkey,titulo,nivel,protocolo,data,setor,email,status,id_tecnico}){

    var setNivel;

    if(nivel!==null){
        if (nivel === 'urgente'){setNivel= <p className="row mx-3"><strong>Nivel: </strong><button className=" btn btn-nivel-u btn-center font-weight-bold mb-auto ml-2 mt-1" type="button">{nivel}</button></p>
    }
    
        if (nivel === 'alto'){setNivel=<p className="row mx-3"><strong>Nivel: </strong><button className=" btn btn-nivel-a btn-center font-weight-bold mb-auto ml-2" type="button">{nivel}</button></p> 
        }
    
        if (nivel === 'medio'){setNivel=<p className="row mx-3"><strong>Nivel: </strong><button className=" btn btn-nivel-m btn-center font-weight-bold mb-auto ml-2" type="button">{nivel}</button></p>
        }
    
        if (nivel === 'baixo'){setNivel=<p className="row mx-3"><strong>Nivel: </strong><button className=" btn btn-nivel-b btn-center font-weight-bold mb-auto ml-2 " type="button">{nivel}</button></p> 
        }
                }


    var setStatus_button1;
    var setStatus_button2;
    var setFormato;
    var id_tecnico_aceito=useSelector(state => state.userEmail);
    var nodePath='mensagem/'+idkey

    function id_tecnico_resolvendo(){
        var Sata ={
            status:"resolvendo",

        };
        firebase.database().ref(nodePath).update(Sata);
    }
    function id_tecnico_resolvido(){
        var Sata ={
            status:"resolvido",

        };
        firebase.database().ref(nodePath).update(Sata);
    }
    function id_tecnico_arquivar(){
        var Sata ={
            status:"arquivado",
        };
        firebase.database().ref(nodePath).update(Sata);
    }




    if(status!==null && id_tecnico_aceito===id_tecnico ){

            if(status==="pendente"){
                setStatus_button1=<button onClick={id_tecnico_resolvendo} className="mt-3 mx-3 font-weight-bold btn btn-center btn-arquivado row" type="button">Pendente</button>
                setFormato="btn btn-mensagem mx-5 mt-5 row"
            }

            if(status==="resolvendo"){
                setStatus_button1=<button onClick={id_tecnico_resolvido} className="mt-3 mx-3 font-weight-bold btn btn-center btn-arquivado" type="button">Resolvendo</button>
                setFormato="btn btn-mensagem mx-5 mt-5 row"
            }

            if(status==="resolvido"){
                setStatus_button1=<button onClick={id_tecnico_arquivar} className="mt-3 mx-3 font-weight-bold btn btn-center btn-arquivado" type="button">Resolvido</button>
                setFormato="btn btn-mensagem mx-5 mt-5 row"
            }
        }

    return(
        <>
        <div >
        <div className={setFormato}>
            <div className="row ml-3 mr-2 text-left">
                <p> <strong>Protocolo: </strong>{protocolo} 
                <br/> 
                <strong>Titulo: </strong> {titulo} </p>
                   
                    {setNivel}

                </div>
                <div className="row mx-3 mr-2 text-left">

                    <p> <strong>Data: </strong>{data} 
                    <br/> 
                    <strong>Setor: </strong>{setor}</p>

                    <div className="row mx-3 mr-2 text-left">
                        <p> <strong>Email: </strong>{email}</p>

                    </div>  
                </div>
            {setStatus_button1}
            {setStatus_button2}
            
        </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        </>
    )
}

export default Mensagem_estrutura;