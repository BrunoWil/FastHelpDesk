import React,{Component} from 'react';
import './tecnico_arquivados.css';
import Navbar from '../../components/navbarTec/index';
import Barra_de_status_gerais from '../../components/barra_de_status_gerais';
import Mensagens_Abertas from '../../components/mensagens_abertas';
import FirebaseService from '../services/FirebaseService'
import { useSelector, useDispatch} from 'react-redux';

class Tecnico_arquivados extends Component {

  constructor(props){
    super(props);
    this.state = {
        data : [],
        
    };
  }
  
componentDidMount(){
  FirebaseService.getDataList('mensagem/','arquivado', (dataReceived) => this.setState({data: dataReceived}))
  
}

render(){

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
 
      {this.state.data.map((item,index)=>
      <div className="btn-mensagens text-center" key={index}>
      <Mensagens_Abertas 
          key={index}
          idkey={item.key}
          titulo={item.titulo} 
          nivel={item.nivel} 
          protocolo={item.protocolo} 
          setor={item.setor} 
          data={item.data} 
          email={item.email} 
          status={item.status} 
          id_tecnico={item.idtecnico}
          />
</div>
)}
</div>
</>
);
}
}
export default Tecnico_arquivados;


