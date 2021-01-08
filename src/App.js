import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Tabela from './Tabela';
import Header from './Header';
import router from 'react-router-dom';
import Forms from './Formulario';
import ApiService from './ApiService';

class App extends Component {

  constructor(props) {
    super(props);
    

    this.state = {
      pessoas: [],
    };
  }
  /* //array de pessoas
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
  }*/


  removePessoa = index => {

    const { pessoas } = this.state;

    //alteração de State
    this.setState(
      {
        pessoas: pessoas.filter((pessoa, posAtual) => {
          return posAtual !== index;
        }),
      }
    );
  }

  escutadorDeSubmit = pessoa => {
    this.setState({ pessoas: [...this.state.pessoas, pessoa] })
  }

  

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <h1>Clientes</h1>
          <Tabela pessoas={this.state.pessoas} removePessoa={this.removePessoa} />
          <Forms escutadorDeSubmit={this.escutadorDeSubmit} />
        </div>

      </Fragment>
    ); // envia o array para a tabela
  }




}
export default App;