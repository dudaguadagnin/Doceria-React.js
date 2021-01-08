import { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Tabela from './Tabela';
import Header from './Header';
import router from 'react-router-dom';

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
    <div className="App">
      <Header />
     <Tabela pessoas = {pessoas}/> 
    </div>
  ); // envia o array para a tabela
}

export default App;
