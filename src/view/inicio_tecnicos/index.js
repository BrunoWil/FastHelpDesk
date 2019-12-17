import React,{useState,useEffect} from 'react';
import './home.css';
import {Link, Redirect} from 'react-router-dom';
import Navbar from '../../components/navbarTec/index'
import Barra_de_status_gerais from '../../components/barra_de_status_gerais'
import { useSelector } from 'react-redux';
import firebase from "firebase"

function Home(){



    return(
      <>
      <Navbar/>
      <Link to='#' className="btn btn-lg btn-block btn-" >Solicitações ao Administrador</Link>
      <Link to='/cadastrados'  className="btn btn-lg btn-block btn-"> Usuários</Link>
      <Link to='/tecnico_disponiveis' className="btn btn-lg btn-block btn-"> Chamados de Usuarios</Link>
      </>
        );

}

export default Home;