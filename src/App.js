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


  removePessoa = id => {

    const { pessoas } = this.state;

    const pessoasAtualizado = pessoas.filter(pessoa => {
      return pessoa.id !== id;
    });

    ApiService.RemovePessoa(id)
      .then(res => ApiService.TrataErros(res))
      .then(res => {
        if (res.message === 'deleted') {
          this.setState({ pessoas: [...pessoasAtualizado] });
          PopUp.exibeMensagem('error', "Pessoa removida com sucesso");
        }
      })
      .catch(err => PopUp.exibeMensagem('error', "Erro na comunicação com a API ao tentar remover a pessoa"))
  }

  escutadorDeSubmit = pessoa => {
    ApiService.CriaPessoa(JSON.stringify(pessoa)) //recebe em string
      .then(res => ApiService.TrataErros(res))
      .then(res => {
        if (res.message === 'success') {
        this.setState({ pessoas: [...this.state.pessoas, res.data] });
        PopUp.exibeMensagem('success', "adicionado com sucesso");
      }
      })
      .catch(err => PopUp.exibeMensagem('error', "Erro na comunicação com a API ao tentar adicionar a pessoa"));
  }

  componentDidMount() {
    //recuperando os elementos da api, redesenhando na tela
    ApiService.ListaPessoas()
      .then(res => ApiService.TrataErros(res))
      .then(res => {
        if (res.message === 'success') {
          this.setState({ pessoas: [...this.state.pessoas, ...res.data] })
        }
      })
      .catch(err => PopUp.exibeMensagem('error', "Erro na comunicação com a API ao tentar listar os autores"));
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