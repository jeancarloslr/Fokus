const btnAddTask = document.querySelector('.app__button--add-task');
const formTasks = document.querySelector('.app__form-add-task');
const textArea = document.querySelector('.app__form-textarea');
const taskArea = document.querySelector('.tasks');
const ulTasks = document.querySelector('.app__section-task-list');
const paragrafoDescricaoTarefa = document.querySelector('.app__section-active-task-description');

const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

function atualizarTarefa(){
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function CancelarTask(){
    textArea.value = "";
    formTasks.classList.add('hidden');
}

function createTask(tarefa){
    const li = document.createElement('li');
    li.classList.add('app__section-task-list-item');
    const svg = document.createElement('svg');
    svg.innerHTML = `
    <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
    <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z"
        fill="#01080E"></path>
</svg>  
    `
    const paragrafo = document.createElement('p')
    paragrafo.textContent = tarefa.descricao;
    paragrafo.classList.add('app__section-task-list-item-description');

    const botao = document.createElement('button');
    botao.classList.add('app_button-edit');

    botao.onclick = () =>{
       const taskChanged = prompt("Qual é o novo nome da tarefa?")
       if(!taskChanged){
        //console.log('nova tarefa: ' + taskChanged)
        return;
       }else{
        paragrafo.textContent = taskChanged;
        tarefa.descricao = taskChanged;
        atualizarTarefa();
       }
    }

    const botaoImg = document.createElement('img');
    botaoImg.setAttribute('src', '/imagens/edit.png')
    botao.append(botaoImg);

    li.append(svg);
    li.append(paragrafo);
    li.append(botao);

    li.onclick = () => {
        paragrafoDescricaoTarefa.textContent = tarefa.descricao
        document.querySelectorAll('.app__section-task-list-item-active')
        .forEach(elemento => {
          elemento.classList.remove('app__section-task-list-item-active')
        })
        li.classList.add('app__section-task-list-item-active')
    }
    return li;
} 
btnAddTask.addEventListener('click', () =>{
    formTasks.classList.toggle('hidden')
})
formTasks.addEventListener('submit', (evento) =>{
    evento.preventDefault(); //vai prevenir o comportamento padrão do navegador.
    const tarefa = {
        descricao: textArea.value
    }
    tarefas.push(tarefa);
    const elementoTarefa = createTask(tarefa)
    ulTasks.append(elementoTarefa)
    textArea.value = "";
    formTasks.classList.add('hidden');
    atualizarTarefa()
});

tarefas.forEach(tarefa => { /*para garantir que a tarefa seja adicionada à lista tanto quando o botão for clicado quanto quando a página for recarregada.*/ 
    const elementoTarefa = createTask(tarefa);
    ulTasks.append(elementoTarefa);
});

document.addEventListener("FocoFinalizado", () => {
  if(){
  }  
})