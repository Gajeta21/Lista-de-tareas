const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const taskItem = document.createElement('li');
    taskItem.className = 'taskItem';
    taskItem.innerHTML = `
      <input type="checkbox">
      <span>${taskText}</span>
      <button class="deleteButton">Eliminar</button>
    `;

    const deleteButton = taskItem.querySelector('.deleteButton');
    deleteButton.addEventListener('click', deleteTask);

    taskList.appendChild(taskItem);
    taskInput.value = '';
  }
}

function deleteTask(event) {
  const taskItem = event.target.parentElement;
  taskList.removeChild(taskItem);
}

taskInput.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
    addTask();
  }
});
