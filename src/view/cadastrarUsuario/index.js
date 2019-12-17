import React, { useState, useEffect } from 'react';
import {useSelector} from 'react-redux'; 
import '../cadastrarUsuario/cadastrarUsuario.css';
import {Link} from 'react-router-dom';
import Navbar from '../../components/navbarTec/index';

import firebase from '../../config/firebase';
import NewUser from '../../components/novoUsuarioForm/index';

function cadastrarUsuario (){
    return(
        <>
            <Navbar></Navbar>
            <NewUser></NewUser>
        </>
    )  
}

export default cadastrarUsuario;