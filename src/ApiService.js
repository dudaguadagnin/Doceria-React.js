const ApiService = {
    ListaPessoas: () =>{
        return fetch('http://localhost:8000/api/pessoa')
            .then(res => res.json());
    },

    CriaPessoa: pessoa =>{
        return fetch('http://localhost:8000/api/pessoa', {method: 'POST', headers: {'content-type': 'application/json'}, body: pessoa})
            .then(res => res.json());
    },

    ListaNomes: () =>{
        return fetch('http://localhost:8000/api/pessoa/nome')
            .then(res => res.json());
    },
    ListaSobrenomes: () =>{
        return fetch('http://localhost:8000/api/pessoa/sobrenome')
            .then(res => res.json());
    },
    RemovePessoa: id =>{
        return fetch(`http://localhost:8000/api/pessoa/${id}`, {method: 'DELETE', Headers: {'content-type': 'application/json'}})
        .then(res => res.json());
    }

}
export default ApiService;