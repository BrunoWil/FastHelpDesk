import React,{useState,useEffect,Component} from 'react';
import './tecnico_aceitos.css';
import Navbar from '../../components/navbar'
import { useSelector } from 'react-redux';
import Barra_de_status_de_mensagem from '../../components/barra_de_status_de_mensagem'
import Mensagem_estrutura from '../../components/mensagem_estrutura'
import Barra_de_status_gerais from '../../components/barra_de_status_gerais'
import firebase from '../../config/firebase';
import FirebaseService from '../services/FirebaseService'


class Tecnico_aceitos extends Component {

    constructor(props){
      super(props);
      this.state = {
        pendente : [],
        resolvendo : [],
        resolvido : [],
      };
    }
  
  componentDidMount(){
    FirebaseService.getDataList('mensagem/','pendente', (dataReceived) => this.setState({pendente: dataReceived}))
    // FirebaseService.getDataList('mensagem/','resolvendo', (dataReceived) => this.setState({resolvendo: dataReceived}))
    // FirebaseService.getDataList('mensagem/','resolvido', (dataReceived) => this.setState({resolvido: dataReceived}))


  }
  
render(){
console.log(this.state.pendente)
// console.log(this.state.resolvendo)
// console.log(this.state.resolvido)
    return(
      <>
      <Navbar/>
      <Barra_de_status_gerais/>
      <Barra_de_status_de_mensagem />
      
            <div>
                {this.state.pendente.map((item,index)=>
                    <div key={index}>
                    <Mensagem_estrutura 
                        key={index}
                        titulo={item.titulo} 
                        nivel={item.nivel} 
                        protocolo={item.protocolo} 
                        setor={item.setor} 
                        data={item.data} 
                        email={item.email} 
                        status={item.status} 
                        id_tecnico={item.idtecnico}/>
                  </div>)
                  }

            </div>

            <div>      
                {/* {this.state.resolvendo.map((item,index)=>
                <div  key={index}>
                <Mensagem_estrutura 
                    key={index}
                    titulo={item.titulo} 
                    nivel={item.nivel} 
                    protocolo={item.protocolo} 
                    setor={item.setor} 
                    data={item.data} 
                    email={item.email} 
                    status={item.status} 
                    id_tecnico={item.idtecnico}/>
              </div>)
              } */}

            </div>

             <div>
                {/* {this.state.resolvido.map((item,index)=>
                  <div key={index}>
                  <Mensagem_estrutura 
                      key={index}
                      titulo={item.titulo} 
                      nivel={item.nivel} 
                      protocolo={item.protocolo} 
                      setor={item.setor} 
                      data={item.data} 
                      email={item.email} 
                      status={item.status} 
                      id_tecnico={item.idtecnico}/>
                </div>)
                } */}

            </div> 
      
      </>
        );

}
}
export default Tecnico_aceitos;