const btnAddTask = document.querySelector('.app__button--add-task');
const formTasks = document.querySelector('.app__form-add-task');
const textArea = document.querySelector('.app__form-textarea');
const taskArea = document.querySelector('.tasks');

const tarefas = [];

btnAddTask.addEventListener('click', () =>{
    formTasks.classList.toggle('hidden')
});

formTasks.addEventListener('submit', (evento) =>{
    evento.preventDefault(); //vai prevenir o comportamento padrão do navegador.
    const tarefa = {
        descricao: textArea.value
    }

    tarefas.push(tarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));

});