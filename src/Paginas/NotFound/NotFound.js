import React, { Fragment } from 'react';
import Header from '../../Componentes/Header';

const NotFound = () => { //CASO A PAGINA NÃO TENHA SIDO ENCONTRATA

    return (
        <Fragment>
            <Header />
            <h1>Não encontrado</h1>
        </Fragment>
    );
}

export default NotFound;