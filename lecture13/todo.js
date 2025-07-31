const todoInput = document.querySelector('.todotitle');
const todoForm = document.querySelector('#todoform');
const todoContainer = document.querySelector('.todoContainer');
let todoArray = [];

todoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const value = inputValue();
    if (!value.trim()) return;

    const newTodo = {
        id: Math.floor(Math.random() * 10000),
        title: value
    };

    todoArray.push(newTodo);
    showAllTodo(todoArray); 
    todoInput.value = '';
});

function inputValue() {
    return todoInput.value;
}

function addTodo(todo) {
    const li = document.createElement('li');
    li.classList.add('todoItem');
    li.style.display = 'flex';
    li.setAttribute('id', `${todo.id}`);  // Corrected the backtick syntax

    li.innerHTML = `
        <h1 class="todoTitle">${todo.title}</h1>
        <div>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div>
    `;

    // Add event listeners for Edit and Delete
    const deleteBtn = li.querySelector('.delete');
    deleteBtn.addEventListener('click', () => {
        todoArray = todoArray.filter(item => item.id !== todo.id);
        showAllTodo(todoArray);
    });

    const editBtn = li.querySelector('.edit');
    editBtn.addEventListener('click', () => {
        const newTitle = prompt("Edit your todo:", todo.title);
        if (newTitle !== null && newTitle.trim()) {
            todo.title = newTitle;
            showAllTodo(todoArray);
        }
    });

    todoContainer.appendChild(li);
}

function showAllTodo(todos) {
    todoContainer.innerHTML = '';
    todos.forEach(todo => addTodo(todo));
}
