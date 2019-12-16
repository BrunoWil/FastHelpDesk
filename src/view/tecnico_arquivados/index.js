import React,{useState} from 'react';
import './tecnico_arquivados.css';
import Navbar from '../../components/navbar';
import Barra_de_status_gerais from '../../components/barra_de_status_gerais';
import { useSelector } from 'react-redux';
import Mensagem_estrutura from '../../components/mensagem_estrutura';




function Tecnico_arquivados(){

const setTitulo ="Ajuda"
const setNivel ="urgente"
const setProtocolo ="000111"
const setSetor ="Adm"
const setData ="20/12/2019"
const setEmail ="bruno@gmail.com"
const setStatus ="arquivado"
const setId_tecnico="bruno@gmail.com"

 

 if (setStatus==="arquivado"){

  var arquivado=[<div className='table text-center'>
        <Mensagem_estrutura titulo={setTitulo} nivel={setNivel} protocolo={setProtocolo} setor={setSetor} data={setData} email={setEmail} status={setStatus} id_tecnico={setId_tecnico}/>
    </div>]
}


return(
    <>
<Navbar/>
<Barra_de_status_gerais/>
<div className="text-center">
<table class="table table-borderless btn-tabela table-white">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Arquivados</th>
      <th scope="col"></th>
    </tr>
  </thead>
</table>
    {arquivado}
    </div>

</>
)

}
export default Tecnico_arquivados;