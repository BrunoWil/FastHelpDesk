import React,{Component} from 'react';
import '../UsuariosCadastradosTecnico/UsuariosCadastradosTecnico.css';
import Navbar from '../../components/navbarTec/index';
import FirebaseService from '../services/FirebaseService'
import { Link } from 'react-router-dom';

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

render(){

return(
    <>
            <div className="uc">
            <Navbar/>
            <h5 className="font-weight-bold text-white">Lista de Usuários</h5>
            <div className="row">
                <div className="col-md-3 themed-grid-col font-weight-bold text-white">Nome</div>
                <div className="col-md-3 themed-grid-col font-weight-bold text-white">Email</div>
                <div className="col-md-3 themed-grid-col font-weight-bold text-white">Tipo de Usuário</div>
                <div className="col-md-3 themed-grid-col font-weight-bold text-white">Setor</div>
            </div>
                    {this.state.data.map((item,index)=>
            <div className="btn-mensagens text-center" key={index}>
                    <div className="row"key={index}>
                    <div className="col-md-3 themed-grid-col2">{item.username}</div>
                    <div className="col-md-3 themed-grid-col2">{item.email}</div>
                    <div className="col-md-3 themed-grid-col2">{item.tipo}</div>
                    <div className="col-md-3 themed-grid-col2">{item.setor}</div>
                </div>
        </div>
        )}
           
            <Link  type="button" className="bt btn-primary" to='/novousuario'>Cadastrar Usuário</Link>
            
        </div>
 
</>
);
}
}
export default UsuariosCadastrados;


