import M from 'materialize-css';

            //IMPRIMIR MENSAGENS NA TELA
            //USANDO BIBLIOTECA MATERIALIZE

const PopUp = {
    exibeMensagem: (status, msg) => {
        if (status === "success") { //MENSAGEM DE SUCESSO
            M.toast({ html: msg, classes: 'rounded green', displayLength: 2000 });
        }
        if (status === 'error') { //MENSAGEM DE ERRO
            M.toast({ html: msg, classes: 'rounded red', displayLength: 2000 });
        }
    }
}
export default PopUp;