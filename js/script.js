//selecionando eventos
let campoTarefa = document.querySelector('#campo-tarefa');
let botaoAdicionar = document.querySelector('#botao-adicionar');
let listaTarefas = document.querySelector('#lista-tarefas');

var botao = document.getElementById("botao-adicionar");
// botao.onclick = function() {
//     alert('Clicado');
// }

//adicionando o Evento do clique no botão Adicionar
botaoAdicionar.addEventListener('click', adicionarTarefa);

//Adicionando a tarefa com a tecla enter
campoTarefa.addEventListener("keyup", function(enter)   {
    if(enter.key === "Enter") {
        adicionarTarefa();
    }
})

//Criando a adicionar elementos
function adicionarTarefa(){
    //pegar o valor do campo de texto
    let nomeTarefa = campoTarefa.value;

    //criando um elemento li
    let novaTarefa = document.createElement('li');
    
    novaTarefa.innerText = nomeTarefa;

    //adicionar o item da lista ao final da lista
    listaTarefas.appendChild(novaTarefa);

    //Quando o item da lista é clicado adicionamos a classe "concluida"
    novaTarefa.addEventListener('click' , function() {
        novaTarefa.classList.toggle("concluida");
        listaTarefas.removeChild(novaTarefa);

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

    //Adicionar classe 
};
 
let botaoToggle = document.getElementById('toggle');

document.body.className = localStorage.getItem('modo') || 'modo-claro'; 

botaoToggle.addEventListener('click', function(){
    if(document.body.className === 'modo-claro'){
        document.body.className = 'modo-escuro'
    } else {
        document.body.className = 'modo-claro'
    }

    localStorage.setItem('modo' , document.body.className);
})