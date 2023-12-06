document.addEventListener('DOMContentLoaded', function() {
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

taskForm.addEventListener('submit',function(event) {
event.preventDefault();
addTask();
});
function addTask() {
const taskText = taskInput.value.trim();
if (taskText !== ''){
    const listItem = document.createElement('li');
    listItem.textContent = taskText;
    taskList.appendChild(listItem);
    taskInput.value = '';
} 
}
});