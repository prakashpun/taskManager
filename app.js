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
    // Add task event
    form.addEventListener('submit', addTask);

    // Remove task event
    taskList.addEventListener('click', removeTask);
    
    // Clear Tasks event
    clearBtn.addEventListener('click', clearTasks);

    // Filter tasks event
    filter.addEventListener('keyup', filterTasks);
}

// Add Task
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

// Remove Task
function removeTask(event) {

    if(event.target.parentElement.classList.contains('delete-item')) {
        if( confirm('Are you sure you wan to remove this task ?') ){
            event.target.parentElement.parentElement.remove();               
        }
    }
}

// Clear all tasks 
function clearTasks(event) {
    // Slower way
    // taskList.innerHTML = '';

    // Faster way : Follow for more details here : https://jsperf.com/innerhtml-vs-removechild/47
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

// Filter tasks
function filterTasks(event) {
    // Get the filter text value
    const text = event.target.value.toLowerCase();
    
    // Search in all the list items
    document.querySelectorAll('.collection-item').forEach(
        function(task){
            const item = task.firstChild.textContent;
            if(item.toLowerCase().indexOf(text) !== -1 ) {
                task.style.display = 'block';
            } else {
                task.style.display = 'none';    
            }
        }
    );

    console.log(text);
}