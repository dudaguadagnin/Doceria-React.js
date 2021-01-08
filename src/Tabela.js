import React, { Component } from 'react';


const TableHead = () => {
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

const TableBody = props => {

    const linhas = props.pessoas.map((linha, index) => {
        return (

            <tr>
                <td>{linha.nome}</td>
                <td>{linha.sobrenome}</td>
                <td>{linha.idade}</td>
                <td><button onClick ={ () => {props.removePessoa(index) }}
                 className="btn-floating btn-large waves-effect waves-light light-green lighten-1">
                    Remover</button></td>
                
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
    render() {

        const { pessoas, removePessoa} = this.props;

        return (
            <table className="highlight">
                <TableHead />
                <TableBody pessoas={pessoas} removePessoa={removePessoa}/>

            </table>
        );
    }

}
export default Tabela;