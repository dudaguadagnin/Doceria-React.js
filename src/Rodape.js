import React, { Fragment } from 'react';
import './Rodape.css'
const Rodape = () => {

    return (
        <Fragment>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            
            <div className="rodape">
                <i class="icone medium material-icons">local_cafe</i>
                <h4 className="nome-rodape">Doceria Pão Doce</h4>
                <p className="descricao">Deixando a vida mais doce</p>
            </div>
        </Fragment>
    );
}
export default Rodape;