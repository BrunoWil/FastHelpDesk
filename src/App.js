import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store, persistor} from '../src/store/';
import {PersistGate} from "redux-persist/integration/react";
import { useSelector, useDispatch } from 'react-redux'

import { isModuleDeclaration } from '@babel/types'
import TelaLogin from './view/login/';
import Inicio from './view/inicio/';
import Chamado from './view/novochamado/';
import Perfil from './view/perfil'
//Telas do tecnico
import Home from './view/inicio_tecnicos/';
import Tecnico_aceitos from './view/tecnico_aceitos';
import Tecnico_disponiveis from './view/tecnico_disponiveis';
import Tecnico_suspensos from './view/tecnico_suspensos';
import Tecnico_arquivados from './view/tecnico_arquivados';
import Mensagem_usuario from './view/mensagem_usuario';

function App() {
  return (
  	<Provider store={store}>
		  <PersistGate loading={null} persistor={persistor}>
			<Router>
			<Route exact path='/' component={TelaLogin} />
			<Route exact path='/inicio' component={Inicio} />
			<Route exact path='/novochamado' component={Chamado} />
			<Route exact path='/perfil' component={Perfil} />

			<Route exact path= '/inicio_tecnico' component={Home}/>
			<Route exact path= '/tecnico_aceitos' component={Tecnico_aceitos}/>
			<Route exact path= '/tecnico_disponiveis' component={Tecnico_disponiveis}/>
			<Route exact path= '/tecnico_arquivados' component={Tecnico_arquivados}/>
			<Route exact path= '/tecnico_suspensos' component={Tecnico_suspensos}/>
			<Route exact path= '/mensagem_usuario' component={Mensagem_usuario}/>

			</Router>
		</PersistGate>
	</Provider>
  );
}

export default App;