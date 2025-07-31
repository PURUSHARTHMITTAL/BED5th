let todos = [
  { id: 234565431, title: "Todo4" },
  { id: 234565432, title: "Todo5" }
];

let ul = document.querySelector(".todoList");

function addTodo(todo) {
  let li = document.createElement("li");
  li.setAttribute("id", `${todo.id}`); // Corrected template literal
  li.innerHTML = `
    <div>
      <input type="checkbox" id="checkbox-${todo.id}">
      <h1>${todo.title}</h1>
      <div>
        <button class="edit">🤠</button>
        <button class="delete">❌</button>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      </div>
    </div>
  `;
  ul.appendChild(li);
}

function showAllTodos(todos) {
  todos.forEach(todo => addTodo(todo));
}

showAllTodos(todos); // Call to render all todos