import React from 'react';
import './barra_de_status_de_mensagem.css';
import {Link, Redirect} from 'react-router-dom';


function Barra_de_status_de_mensagem(){
    return(
      <>
    <table class="table table-borderless text-center btn-tabela table-white">
  <thead>
    <tr>
      <th scope="col">Pendente</th>
      <th scope="col">Resolvendo</th>
      <th scope="col">Resolvido</th>
    </tr>
  </thead>
</table>
            
      </>
        );

}

export default Barra_de_status_de_mensagem;