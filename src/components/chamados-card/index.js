import React, { useState , useEffect } from 'react';
import {Link} from 'react-router-dom';
import firebase from '../../config/firebase';
import './chamados-card.css';



function ChamadoCard(){
	return(
		<div className="col-md-6 col-sm-12">
			<div className="card my-5">
			  <div className="card-header">Título</div>
			  <div className="card-body">
			    <blockquote className="blockquote mb-0">
			      <p>Descrição</p>
			      notificação se ja foi lido
			    </blockquote>
			  </div>
			</div>
		</div>
		);
}

export default ChamadoCard;


/* linha 16: colocar dois circulos, um verde e um vermelho. dependendo da ação mudar de cor */