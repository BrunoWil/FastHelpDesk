import React from 'react';
//import from './inicio.css';
import {Link} from 'react-router-dom';
import Navbar from '../../components/navbar/index';
import ChamadoCard from '../../components/chamados-card/index';
import {useSelector} from 'react-redux'; 
function Inicio() {
	return(
		<>
		{useSelector(state => state.userEmail)}
		<Navbar />
		<ChamadoCard />
		</>
		);
}

export default Inicio;