const btnAddTask = document.querySelector('.app__button--add-task');
const formTasks = document.querySelector('.app__form-add-task');

btnAddTask.addEventListener('click', () =>{
    formTasks.classList.toggle('hidden')
});