import React, { Fragment } from 'react';
import './Rodape.css'
const Rodape = () => {

    return (
        <section>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>

            <div className="fim-pagina">
                <i class="icone medium material-icons">local_cafe</i>
                <h4 className="nome-rodape">Doceria Pão Doce</h4>
                <p className="descricao">Deixando a vida mais doce</p>
            </div>
        </section>
    );
}
export default Rodape;