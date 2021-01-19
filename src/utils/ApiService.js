
const ApiService = {
    
    ListaPessoas: () => {
        return fetch('http://localhost:8000/api/pessoa');
    },

    CriaPessoa: pessoa => {
        return fetch('http://localhost:8000/api/pessoa', { method: 'POST', headers: { 'content-type': 'application/json' }, body: pessoa });
    },

    ListaNomes: () => {
        return fetch('http://localhost:8000/api/pessoa/nome');
    },
    ListaSobrenomes: () => {
        return fetch('http://localhost:8000/api/pessoa/sobrenome');
    },
    RemovePessoa: id => {
        return fetch(`http://localhost:8000/api/pessoa/${id}`, { method: 'DELETE', Headers: { 'content-type': 'application/json' } });
    },
    TrataErros: res => {  //CONFERRE ERROS
        if (!res.ok) {
            throw Error(res.responseText);
        }
        return res.json();
    }
}
export default ApiService;