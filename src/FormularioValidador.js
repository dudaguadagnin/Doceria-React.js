import validador from 'validator';

class FormValidator {
    constructor(validacao){
        this.validacao = validacao;
    }
    valida(state) { //validator trabalha com strings
        const campoValor = state[this.validacao.campo.toString()]; //pegando o valor do campo em fromulario e passando para string
        const metodoValidacao = validador[this.validacao.metodo];

        if(metodoValidacao(campoValor, [], state) === true){
            console.log("form invalido");
            return false;
        }else{
            console.log("valido");
            return true;
        }
    }
}

export default FormValidator;