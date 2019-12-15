import React from 'react';
//import from './inicio.css';
import {Link} from 'react-router-dom';
import Navbar from '../../components/navbar/index';
import ChamadoCard from '../../components/chamados-card/index';
function Inicio() {
	return(
		<>
		<Navbar />
		<ChamadoCard />
		</>
		);
}

export default Inicio;