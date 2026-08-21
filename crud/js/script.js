let dadosUsers = []

function salvarDados(){
    let nomeValor = document.querySelector('#nome').value;
    let matriculaValor = document.querySelector('#matricula').value;
    
    let dadosObjeto = 
    {
        nome: nomeValor,
        matricula:matriculaValor,
    }

    let dadosLista = dadosUsers.push(dadosObjeto);
    
    if(!nomeValor){
        alert("O Campo Nome nao pode estar vazio");
        return;
    }if(!matriculaValor){
        alert("A Matricula nao pode estar em vazio");
        return;
    }else{
        alert("O Valor foi Salvo,agora clique em listar para ver os itens ");
        return
    }
    limparCampo()
}

function listar(){
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    for(let i = 0;i < dadosUsers.length;i++){
        resultado.innerHTML += 
        `
        <br>
        Nome: ${dadosUsers[i].nome},
        Matricula: ${dadosUsers[i].matricula}<br>
        <button type="button" onclick="editar(${i})">
            Editar
        </button>
        <br>
         `
        }
}


function editar(indice){
    let editarNome = prompt("insira o nome");
    let editarMatricula = prompt("insira a matricula");

    dadosUsers[indice] =  
        {
            nome: editarNome,
            matricula: editarMatricula,
        }
    listar();
}
function limparCampo(){
    document.querySelector('#nome').value = '';
    document.querySelector('#matricula').value = '';
}