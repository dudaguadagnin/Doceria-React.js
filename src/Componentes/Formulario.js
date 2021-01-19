import React, { Component } from 'react'
import FormularioValidador from '../utils/FormularioValidador'
import PopUp from '../utils/PopUp'

class Formulario extends Component {

    constructor(props) {
        super(props);

        this.validador = new FormularioValidador([{
            campo: 'nome',
            metodo: 'isEmpty', //METODO VALIDADOR
            validoQuando: false,
            mensagem: 'entre com nome'
        },
        {
            campo: 'sobrenome',
            metodo: 'isEmpty', //METODO VALIDADOR
            validoQuando: false,
            mensagem: 'entre com sobrenome'
        },
        {
            campo: 'idade',
            metodo: 'isInt', //METODO VALIDADOR
            args: [{ min: 0, max: 200 }],
            validoQuando: true,
            mensagem: 'entre com idade'
        }
        ]);

        this.stateInicial = { //ESTADO INICIAL SEM OS VALORES
            nome: '',
            sobrenome: '',
            idade: '',
            validacao: this.validador.valido()
        }
        this.state = this.stateInicial;
    }

    escutadorDeInput = event => { //ESCUTADOR DE ENTRADAS 
        const { name, value } = event.target;

        //A CADA DIGITACAO O CAMPO É ATUALIZADO
        this.setState({
            [name]: value
        });
    }
    submitFormulario = () => {  //ENVIO DE INFORMAÇOES PARA A TABELA

        const validacao = this.validador.valida(this.state);

        if (validacao.isValid) {
        //MANDA O STATE QUE CONTEM AS INFORMAÇOES QUE O USUARIO DIGITOU PARA O APP.JS
            this.props.escutadorDeSubmit(this.state);
            this.setState(this.stateInicial);

        } else { // MENSAGEM DE ERRO SE ALGUM CAMPO NÃO FOI DIGITADO
            const { nome, sobrenome, idade } = validacao;
            const campos = [nome, sobrenome, idade];

            const camposInvalidos = campos.filter(elem => {
                return elem.isInvalid;
            });
            camposInvalidos.forEach(campo => {
                PopUp.exibeMensagem('error', campo.message);
                //EXIBE MENSAGEM DE ERRO SE ALGUM CAMPO NÃO FOI DIGITADO
            });
        }
    }
    render() {

        const { nome, sobrenome, idade } = this.state;

        return ( //INFORMAÇOES DE IMPUT PASSANDO VALIDAÇAO, ID, TYPE, NOME VALOR, E CHAMA ESCUTADOR
            <form>
                <div className="row">
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="nome">Nome</label>
                        <input
                            className="validate"
                            id="nome"
                            type="text"
                            name="nome"
                            value={nome}
                            onChange={this.escutadorDeInput}
                        />
                    </div>
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="sobrenome">sobrenome</label>
                        <input
                            className="validate"
                            id="sobrenome"
                            type="text"
                            name="sobrenome"
                            value={sobrenome}
                            onChange={this.escutadorDeInput}
                        />
                    </div>
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="idade">Idade</label>
                        <input
                            className="validate"
                            id="idade"
                            type="text"
                            name="idade"
                            value={idade}
                            onChange={this.escutadorDeInput}
                        />
                    </div>
                </div>
                <button className="waves-effect waves-light btn light-green darken-3" onClick={this.submitFormulario} type="button">Salvar</button>
            </form>
        );
    }
}
export default Formulario;