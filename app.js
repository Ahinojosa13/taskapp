// Create document to pull items from html by ID
const taskForm = document.getElementById('taskForm');
const titleTaskInput = document.getElementById('title');
const descriptionTaskInput = document.getElementById('description');
const list = document.getElementById('list');
// Empty Array for Task to be stored and push later
let ulTask = [];

// Create Task
function updateTask(){
    list.innerHTML = '';
    ulTask.forEach((task, index)=>{
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${task.title}</span>
            <span>${task.description}</span>
            <button class="edit-btn" data-index="${index}">Edit</button>
            <button class="delete-btn" data-index="${index}">Delete</button>`;
        list.appendChild(listItem);
    });
    // Edit and Delete Eventlistener
    const editButtons = document.querySelectorAll('.edit-btn');
    editButtons.forEach(button =>{
        button.addEventListener('click', editTask);
    });
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button =>{
        button.addEventListener('click', deleteTask);
    });
}
// Form Submit Function
function formSumbit(event){
    event.preventDefault();
    const title = titleTaskInput.value;
    const description = descriptionTaskInput.value;
    const updateTask = {
        title, 
        description
    };
    ulTask.push(updateTask);
    titleTaskInput.value = '';
    descriptionTaskInput.value = '';
    updateTask();
}
// Edit JS
function editTask(event){
    const index = event.target.getAttribute('data-index');
    const newTitle = prompt('Edit Title:');
    const newDescription = prompt('Edit Description:');
    // Update New Edits to arrive
    ulTask[index].title = newTitle;
    ulTask[index].description = newDescription;
    updateTask();
}
// Delete JS
function deleteTask(event){
    const index = event.target.getAttribute('data-index');
    ulTask.slice(index, 1);
    updateTask();
}
taskForm.addEventListener('submit', formSumbit);