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

    
for(let i = 0;i < formulario.length;i++){
    const chaves = Object.keys(formulario[i])
    for(let j=0;j <chaves.length;j++){
        const chave = chaves[j]
        result.innerHTML += `<li>${chave} ${formulario[i] [chave]}</li>`
    }
}