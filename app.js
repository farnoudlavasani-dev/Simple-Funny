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
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function(){
        taskList.removeChild(listItem);

        
    })
    const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function(){
            const newText = prompt('Edit task', listItem.textContent)
            if (newText !== null){
                listItem.textContent = newText;
            }
     
        });

listItem.appendChild(deleteButton);
listItem.appendChild(editButton);
taskList.appendChild(listItem);

taskInput.value = '';
} 

}
});