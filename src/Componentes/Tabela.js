import React, { Component } from 'react';

const TableHead = () => {       //INFORMAÇOES DA TABELA PARTE SUPERIOR
    return (
        <thead>
            <tr>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>Idade</th>
                <th>Remover</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {        //CORPO DA TABELA

    const linhas = props.pessoas.map((linha) => { 
        return (
            
            <tr key={linha.id}>
                <td>{linha.nome}</td>
                <td>{linha.sobrenome}</td>
                <td>{linha.idade}</td>
                <td><button onClick ={ () => {props.removePessoa(linha.id) }} //REMOVE APENAS O INDIVIDUO SELECIONADO
                 className="btn-floating waves-effect waves-light light-green lighten-1">
                    x</button></td>
            </tr>
        );
    });
    return (
        <tbody>
            {linhas}
        </tbody>
    );
}

class Tabela extends Component {
    render() {          //ONDE ACONTECE AS CHAMADAS DA PARTE SUPERIOR E CORPO DA TABELA

        const { pessoas, removePessoa} = this.props;

        return (
            <table className="centered highlight">
                <TableHead />
                <TableBody pessoas={pessoas} removePessoa={removePessoa}/>
            </table>
        );
    }
}
export default Tabela;