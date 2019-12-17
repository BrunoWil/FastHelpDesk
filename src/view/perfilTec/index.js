import React, { useState , useEffect } from 'react';
import {Link} from 'react-router-dom';
import firebase from '../../config/firebase';
import Navbar from '../../components/navbarTec/index';
import DadosUser from '../../components/userperfil/index';
import { useSelector} from 'react-redux'



function Perfil() {


/*	const {perfil, setPerfil} = useState([]);
	let listaperfil= [];

	useEffect(() => {
		firebase.firestore().collection('inforusuarios').get().then( async(resultado) => {
			await resultado.docs.forEach(doc => {
				listaperfil.push({
					id: doc.id,
					...doc.date()
				})
			})
			setPerfil(listaperfil);
		})
	});
*/

	return(
		<>

		<Navbar />
		<h1></h1>
		<DadosUser />
		</>
		);
}

export default Perfil;