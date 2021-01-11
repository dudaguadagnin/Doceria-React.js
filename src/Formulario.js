import React, { Component } from 'react'
import FormularioValidador from './FormularioValidador'
import PopUp from './PopUp'

class Formulario extends Component {

    constructor(props) {
        super(props);

        this.validador = new FormularioValidador([{
            campo: 'nome',
            metodo: 'isEmpty', //metodo do validator
            validoQuando: false,
            mensagem: 'entre com nome'
        },
        {
            campo: 'sobrenome',
            metodo: 'isEmpty', //metodo do validator
            validoQuando: false,
            mensagem: 'entre com sobrenome'
        },
        {
            campo: 'idade',
            metodo: 'isInt', //metodo do validator
            args: [{min: 0, max:200}],
            validoQuando: true,
            mensagem: 'entre com idade'
        }
        ]);

        this.stateInicial = {
            nome: '',
            sobrenome: '',
            idade: '',
            validacao: this.validador.valido()
        }
        this.state = this.stateInicial;
    }

    escutadorDeInput = event => {
        const { name, value } = event.target;

        //a cada digitação o campo é atualizado
        this.setState({
            [name]: value
        });
    }
    submitFormulario = () => {

        const validacao = this.validador.valida(this.state);

        if(validacao.isValid) {
            //manda o state que contem as informaçoes que o usuario digitou
            //para o app.js
            this.props.escutadorDeSubmit(this.state);
            this.setState(this.stateInicial);
        }else{
            const{nome, sobrenome, idade} = validacao;
            const campos = [nome, sobrenome, idade];

            const camposInvalidos = campos.filter(elem => {
                return elem.isInvalid;
            });
            camposInvalidos.forEach(campo =>{
                PopUp.exibeMensagem('error', campo.message);
            });
        }

    }



    render() {

        const { nome, sobrenome, idade } = this.state;

        return (
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