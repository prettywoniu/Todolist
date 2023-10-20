const form = document.querySelector('#add-todo');
const input = document.querySelector('#new-todo');
const todoList = document.querySelector('#todo-list');

// retrieve from localStorage
const savedTodos = JSON.parse(localStorage.getItem("todos")) || []; //?????????
for (let i = 0; i < savedTodos.length; i++) {
  let newTodo = document.createElement("li");
  newTodo.innerText = savedTodos[i].task;
  newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;
  if (newTodo.isCompleted) {
    newTodo.style.textDecoration = "line-through";
  }
  todoList.appendChild(newTodo);
}

todoList.addEventListener('click', function(e){
    if (!e.target.isCompleted) {
        e.target.isCompleted = true;
        e.target.style.textDecoration = "line-through";
    } else {
        e.target.isCompleted = false;
        e.target.style.textDecoration = "none";
    }
      

    // save new status after each click
  for (let i = 0; i < savedTodos.length; i++) {
    if (savedTodos[i].task === e.target.innerText) {
      savedTodos[i].isCompleted = !savedTodos[i].isCompleted;
      localStorage.setItem("todos", JSON.stringify(savedTodos));
    }
  }
})

form.addEventListener('submit', function(e){
    e.preventDefault();
    const newTodo = document.createElement('li');
    newTodo.innerText = input.value;
    newTodo.isCompleted = false;

    todoList.appendChild(newTodo);
    form.reset();
    
    //save to localStorage
    savedTodos.push({ task: newTodo.innerText, isCompleted: false });
    localStorage.setItem("todos", JSON.stringify(savedTodos));
})

