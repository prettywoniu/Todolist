const form = document.querySelector('#add-todo');
const input = document.querySelector('#new-todo');
const todoList = document.querySelector('#todo-list');

todoList.addEventListener('click', function(e){
    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();  
    }
    else if (e.target.tagName === "LI") {
        e.target.classList.toggle('completed');
    }
})

form.addEventListener('submit', function(e){
    e.preventDefault();
    const newTodo = document.createElement('li');
    const newButton = document.createElement('button');
    newTodo.innerText = input.value + "  ";
    newButton.innerText = "Remove";

    newButton.addEventListener('click', function(e){
        e.target.parentElement.remove();
    })

    newTodo.appendChild(newButton);
    todoList.appendChild(newTodo);
    form.reset();
})

