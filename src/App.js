import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Tabela from './Tabela';
import Header from './Header';
import Forms from './Formulario';
import ApiService from './ApiService';
import './App.css';
import PopUp from './PopUp'

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
    PopUp.exibeMensagem("error", "Removido com sucesso!")
  }

  escutadorDeSubmit = pessoa => {
    this.setState({ pessoas: [...this.state.pessoas, pessoa] });
    PopUp.exibeMensagem("success", "Adicionado com sucesso!");
  }

  componentDidMount(){
    //recuperando os elementos da api, redesenhando na tela
      ApiService.ListaPessoas()
        .then(res => {
            this.setState({pessoas: [...this.state.pessoas, ...res.data]})
        });
    
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container rodape">
          <h1>Clientes</h1>
          <Tabela pessoas={this.state.pessoas} removePessoa={this.removePessoa} />
          <Forms escutadorDeSubmit={this.escutadorDeSubmit} />
        </div>

      </Fragment>
    ); // envia o array para a tabela
  }




}
export default App;