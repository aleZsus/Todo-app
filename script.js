const taskInput = document.querySelector('#input');
const inputBotton = document.querySelector('#input-botton');
const taskList = document.querySelector('#task-list');


inputBotton.addEventListener('click', addTask);
taskList.addEventListener('click', removeTask);



function addTask(e) {
    if (taskInput.value === '') {
        alert('scrivi qualcosa')
    }
    

    //Create a new LI and add a class
    const li = document.createElement('li');
    li.className = 'task';


    //Create a new Text Node and put it in the LI
    li.appendChild(document.createTextNode(taskInput.value))

    //Create a link
    const link = document.createElement('a')

    //Add a class for <a>
    link.className = 'delete-todo'

    //Add X for <a></a>
    link.innerHTML = '<h3>X</h3>'

    //Put link in LI
    li.appendChild(link)

    //Put LI in UL
    taskList.appendChild(li)




    taskInput.value = ''    
    e.preventDefault()
}


function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-todo')) {
        e.target.parentElement.parentElement.remove();
    }
}