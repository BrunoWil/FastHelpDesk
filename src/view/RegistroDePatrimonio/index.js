import React from 'react';
import '../RegistroDePatrimonio/RegistroDePatrimonio.css';
import Navbar from '../../components/navbar/index';

function RegistroDePatrimonio(){
    return(
        <div className="setor">
            <Navbar></Navbar>
            <h5 className="font-weight-bold text-white">Patrimônios</h5>

            <div class="row">
                
                <div className="col-md-3 themed-grid-col font-weight-bold text-white">Identificador</div>
                <div className="col-md-3 themed-grid-col font-weight-bold text-white">Tipo</div>
                <div className="col-md-3 themed-grid-col font-weight-bold text-white">Marca</div>
                <div className="col-md-3 themed-grid-col font-weight-bold text-white">Setor</div>
            </div>

            <button type="button" class="bt">Cadastrar Patrimônio</button>
            
        </div>



    );
}

export default RegistroDePatrimonio;
