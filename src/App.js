import { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Tabela from './Tabela';
import Header from './Header';
import router from 'react-router-dom';
import Forms from './Formulario'

class App extends Component {
  //array de pessoas

  state = {
    pessoas: [
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
      }
    ],
  };

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

  escutadorDeSubmit = pessoa =>{
    this.setState({pessoas:[...this.state.pessoas, pessoa]})
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Tabela pessoas={this.state.pessoas} removePessoa={this.removePessoa} />
        <Forms escutadorDeSubmit={this.escutadorDeSubmit}/>
      </Fragment>
    ); // envia o array para a tabela
  }




}
  export default App;
