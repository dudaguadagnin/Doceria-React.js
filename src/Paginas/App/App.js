import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Tabela from '../../Componentes/Tabela';
import Header from '../../Componentes/Header';
import Forms from '../../Componentes/Formulario';
import ApiService from '../../utils/ApiService';
import './App.css';
import PopUp from '../../utils/PopUp';
import Rodape from '../../Componentes/Rodape';

class App extends Component {           //PAGINA PRINCIPAL(HOME)

  constructor(props) {  //CONSTRUTOR DO ARRAY DE PESSOAS
    super(props);

    this.state = {
      pessoas: [],
    };
  }
  /* //array de pessoas antes de usar API
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

  removePessoa = id => {      //METODO PARA REMOVER AS PESSOAS

    const { pessoas } = this.state;

    const pessoasAtualizado = pessoas.filter(pessoa => {
      return pessoa.id !== id;//ATUALIZA O ARRAY FILTRANDO AS REMOÇOES FEITAS
    });

    ApiService.RemovePessoa(id)
      .then(res => ApiService.TrataErros(res)) //CHAMA O TRATA ERROS CASO TENHA DADO ALGUM
      .then(res => {                           //PROBLEMA NA REMOÇAO

        if (res.message === 'deleted') {
          this.setState({ pessoas: [...pessoasAtualizado] });
          PopUp.exibeMensagem('error', "Pessoa removida com sucesso");
          //EXIBE MENSAGEM NA TELA DE PESSOA REMOVIDA
        }
      })
      .catch(err => PopUp.exibeMensagem('error', "Erro na comunicação com a API ao tentar remover a pessoa"))
      //INFORMA ERRO CASO TENHA PROBLEMA EM CONECTAR COM O SERVIDOR PARA FAZER REMOÇAO
  }

  escutadorDeSubmit = pessoa => {
    ApiService.CriaPessoa(JSON.stringify(pessoa)) //CRIA PESSOA RECEBE EM STRING
      .then(res => ApiService.TrataErros(res))  //CHAMA TRATA ERROS PARA VERIFICAÇAO
      .then(res => {

        if (res.message === 'success') {//SE A MENSAGEM É DE SUCESSO EXIBE POPUP DE SUCESSO
          this.setState({ pessoas: [...this.state.pessoas, res.data] });
          PopUp.exibeMensagem('success', "adicionado com sucesso");
        }
      })
      .catch(err => PopUp.exibeMensagem('error', "Erro na comunicação com a API ao tentar adicionar a pessoa"));
  }

  componentDidMount() {
    //RECUPERANDO OS ELEMENTOS DA API, REDESENHANDO NA TELA
    ApiService.ListaPessoas()
      .then(res => ApiService.TrataErros(res)) //CONFERRE POSSIVEIS ERROS
      .then(res => {
        if (res.message === 'success') { //MENSAGEM DE SUCESSO
          this.setState({ pessoas: [...this.state.pessoas, ...res.data] })
        }
      })
      .catch(err => PopUp.exibeMensagem('error', "Erro na comunicação com a API ao tentar listar os autores"));
  }           // CASO TENHA ERRO COM CONEÇÃO DA API

  render() {
    return ( //CRIA FRAGMENTO PARA ENGLOBAR AS CHAMADAS
      <Fragment> 
        <Header />
        <div className="container rodape">
          <h1>Clientes</h1>
          <Tabela pessoas={this.state.pessoas} removePessoa={this.removePessoa} />
          <Forms escutadorDeSubmit={this.escutadorDeSubmit} />
        </div>
        <Rodape />
      </Fragment>
    ); //ENVIA O ARRAY PARA A TABELA
  }
}
export default App;