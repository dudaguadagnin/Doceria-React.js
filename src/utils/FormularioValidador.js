import validador from 'validator'; 

    //FAZ A VALIDAÇÃO DOS CAMPOS PARA ENVIAR APENAS QUANDO TUDO ENTIVER PREENCHIDO

class FormValidator {

    constructor(validacoes) {
        this.validacoes = validacoes;
    }

    valida(state) { //PARA VALIDAR 
        let validacao = this.valido();

        this.validacoes.forEach(regra => {

            //VALIDADOR TRABAHA COM STRINGS
            const campoValor = state[regra.campo.toString()]; //PEGA O VALOR DO CAMPO EM FORMULARIO E PASSA COMO STRING
            const args = regra.args || [];

            const metodoValidacao = typeof regra.metodo === 'string' ?
                validador[regra.metodo] : regra.metodo

            if (metodoValidacao(campoValor, ...args, state) !== regra.validoQuando) {
                validacao[regra.campo] = {
                    isInvalid: true,
                    message: regra.mensagem
                }
                validacao.isValid = false;
            }
        });
        return validacao;
    }
    valido() { // SE ESTA VALIDO
        const validacao = {}

        this.validacoes.map(regra => (
            validacao[regra.campo] = { isInvalid: false, message: '' }
        ));
        return { isValid: true, ...validacao };
    }
}

export default FormValidator;