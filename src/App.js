import { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Tabela from './Tabela';
import Header from './Header';
import router from 'react-router-dom';
import Forms from './Formulario'

//array de pessoas
function App() {
  const pessoas = [
    {
      nome: 'Carol',
      sobrenome: 'Ferreira',
      idade: '30'
    },
    {
      nome: 'Juliana',
      sobrenome: 'de Prado',
      idade: '16'
    },
    {
      nome: 'Ana',
      sobrenome: 'Paula',
      idade: '12'
    },
  ];
  return (
    <Fragment>
      <Header />
      <Tabela pessoas={pessoas} />
      <Forms />
    </Fragment>
  ); // envia o array para a tabela
}

export default App;
