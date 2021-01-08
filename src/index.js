import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Sobre from './Sobre';
import Produtos from './Produtos';
import NotFound from './NotFound';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact={true} component={App}/>
            <Route path='/sobre' component={Sobre}/>
            <Route path='/produtos' component={Produtos}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>,
document.getElementById('root'));

reportWebVitals();
