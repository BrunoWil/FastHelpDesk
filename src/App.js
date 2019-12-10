import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../src/store/';
import { useSelector, useDispatch } from 'react-redux'

import { isModuleDeclaration } from '@babel/types'
import TelaLogin from './view/login/';
import Inicio from './view/inicio/';
import Chamado from './view/novochamado/';
import Perfil from './view/perfil'


function App() {
  return (
  	<Provider store={store}>
	    <Router>
	      <Route exact path='/' component={TelaLogin} />
	      <Route exact path='/inicio' component={Inicio} />
	      <Route exact path='/novochamado' component={Chamado} />
	      <Route exact path='/perfil' component={Perfil} />
	      
	    </Router>
	</Provider>
  );
}

export default App;