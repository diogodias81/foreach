let entrada = document.querySelector('#entrada');
let salvar = document.querySelector('#salvar');
let limpar = document.querySelector('#limpar');
let resultado = document.querySelector('#resultado');
let html = '';
let contador = 0;

let valorLista = [];
let listaTarefa = [{
    nome: entrada.value,
}];

let entradaNova = '';

function salvarDados (){    
    let resultadoArray = valorLista.push(listaTarefa)

    if(!entrada.value){
        alert("por favor ensira algo!")
    }else{
        html += `
        <li>${entrada.value}</li>
        <button onclick="alterarCampo()">
            Alterar
        </button> 
        <input type="text" id="entrada2">
        `
    };
    resultado.innerHTML =html;
    limparCampo();
}

function limparCampo(){
    entrada.value = '';    
}
