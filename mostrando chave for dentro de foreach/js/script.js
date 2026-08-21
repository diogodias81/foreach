const result = document.querySelector('#resultado');
const formulario = [
    {

        Titulo: "Manutenção",
        Descricao: "o ar esta pingando",
        Responsável: "Pedro DIME",
        DataConclusao: "10/05/2026"
        
    },
    {
        Titulo: "Atualizar senha ",
        Descricao: "Minha senha expirou",
        Responsável: "Joao DPA",
        DataConclusao: "10/05/2026"
    }
    ];

    
formulario.forEach(item => {
    Object.keys(formulario[0]).forEach(chave =>{
        result.innerHTML += `<li>${chave}: ${tem[chave]}</li>`
    })
});
