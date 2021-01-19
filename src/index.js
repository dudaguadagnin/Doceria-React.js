import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Paginas/App/App';
import reportWebVitals from './reportWebVitals';
import Sobre from './Paginas/Sobre/Sobre';
import Produtos from './Paginas/Produtos/Produtos';
import NotFound from './Paginas/NotFound/NotFound';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(        //ROTAS PARA REDIRECIONAMENTO DE PAGINAS
    <BrowserRouter>
        <Switch>
            <Route path='/' exact={true} component={App} /> 
            <Route path='/sobre' component={Sobre} />
            <Route path='/produtos' component={Produtos} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'));

reportWebVitals();
