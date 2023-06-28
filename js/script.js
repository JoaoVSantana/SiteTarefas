//selecionando eventos
let campoTarefa = document.querySelector('#campo-tarefa');
let botaoAdicionar = document.querySelector('#botao-adicionar');
let listaTarefas = document.querySelector('#lista-tarefas');

var botao = document.getElementById("botao-adicionar");
// //adicionando o Evento do clique no botão Adicionar
// botaoAdicionar.addEventListener('click', adicionarTarefa);

//Adicionando a tarefa com a tecla enter
campoTarefa.addEventListener("keyup", function (enter) {
    if (enter.key === "Enter") {
        let nomeItem = campoTarefa.value;
        if (nomeItem == "") {
            nomeItem = "Vazio";
        }
        itensSalvos.push(nomeItem);
        localStorage.setItem('itens', JSON.stringify(itensSalvos));
        adicionarTarefa(nomeItem);
    }
})

//Criando a adicionar elementos
function adicionarTarefa(nomeTarefa) {



    //criando um elemento li
    let novaTarefa = document.createElement('li');

    novaTarefa.innerText = nomeTarefa;

    //adicionar o item da lista ao final da lista
    listaTarefas.appendChild(novaTarefa);

    //Quando o item da lista é clicado adicionamos a classe "concluida"
    novaTarefa.addEventListener('click', function () {
        novaTarefa.classList.toggle("concluida");
    })

    //Removendo elementos
    //Criar botão excluir
    let botaoExcluir = document.createElement("button");

    //Definir o texto do botão excluir
    botaoExcluir.innerText = "Remover";

    //Adicionar o botão excluir
    novaTarefa.appendChild(botaoExcluir);

    //Limpar o campo de texto
    campoTarefa.value = "";

    //Adicionar classe botão excluir
    botaoExcluir.className = "botao-excluir";

    botaoExcluir.addEventListener('click', function () {
        listaTarefas.removeChild(novaTarefa);
        itensSalvos.splice(itensSalvos.indexOf(nomeTarefa), 1);
        localStorage.setItem('itens', JSON.stringify(itensSalvos));
    });
};

let botaoToggle = document.getElementById('toggle');

document.body.className = localStorage.getItem('modo') || 'modo-claro';

botaoToggle.addEventListener('click', function () {
    if (document.body.className === 'modo-claro') {
        document.body.className = 'modo-escuro'
    } else {
        document.body.className = 'modo-claro'
    }

    localStorage.setItem('modo', document.body.className);
})

let itensSalvos = JSON.parse(localStorage.getItem('itens')) || [];
itensSalvos.forEach(adicionarTarefa);

botaoAdicionar.addEventListener('click', function () {
    let nomeItem = campoTarefa.value;

    if (nomeItem == "") {
        nomeItem = "Vazio";

    }
    adicionarTarefa(nomeItem);
    itensSalvos.push(nomeItem);
    localStorage.setItem('itens', JSON.stringify(itensSalvos));
    campoTarefa.value = '';
})

function adicionarItemNaLista(nomeItem) {
    let itemLista = document.createElement('li');
    novaTarefa.innerText = nomeItem;
    listaCompras.appendChild(novaTarefa);

}