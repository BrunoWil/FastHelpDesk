import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import Navbar from '../../components/navbar/index';
import NewChamado from '../../components/chamadoform/index';
import firebase from '../../config/firebase';

function Chamado() {
	return(
		<>
			<Navbar />
			<NewChamado />
		</>
		
		);
}

export default Chamado;