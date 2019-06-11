//Define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners 
loadEventListeners();

//Load all event listeners
function loadEventListeners() {
    //Add task event

    form.addEventListener('submit', addTask);
}

//Add Task
function addTask(event) {

    if(taskInput.value === '') {
        alert('Add a task');
    }

    // Create li element 
    const li = document.createElement('li');
    // Add a class
    li.className = 'collection-item';
    // Create textNode and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);

    // Clear input
    taskInput.value = '';

    // To prevent the default behavior of form to submit the data 
    event.preventDefault();
}