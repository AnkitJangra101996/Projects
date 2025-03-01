import "./style.css";

const todoForm = <HTMLFormElement>document.querySelector("#todo");
const todoInput = <HTMLInputElement>document.querySelector("#todoInput");
const todoContainer = <HTMLDivElement>document.querySelector("#todoContainer");

interface Todo {
  readonly id: string;
  title: string;
  isCompleted: boolean;
}

const todos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");

const updateTodo = (id: number) => {
  const todoIndex = todos.find((todo) => +todo.id === +id);
  if (!todoIndex) return;
  todoIndex.isCompleted = !todoIndex.isCompleted;
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodoList(todos);
};

const deleteTodo = (id: number) => {
  const todoArr = todos.filter((todo) => +todo.id !== +id);
  localStorage.setItem("todos", JSON.stringify(todoArr));
  renderTodoList(todoArr);
};

const renderTodoList = (todos: Todo[]) => {
  if (todos.length > 0) {
    todoContainer.innerHTML = "";
    todos.forEach((todo: Todo) => {
      const todoItem = document.createElement("div") as HTMLDivElement;
      todoItem.classList.add("todo-list");
      // ? checkbox
      const todoInput = document.createElement("input") as HTMLInputElement;
      todoInput.type = "checkbox";
      todoInput.checked = todo.isCompleted;
      todoInput.onchange = () => updateTodo(+todo.id);

      // ? Title
      const todoTitle = document.createElement("p") as HTMLParagraphElement;
      todoTitle.style.textDecoration = todo.isCompleted
        ? "line-through"
        : "none";
      todoTitle.textContent = todo.title;

      // ? Delete button
      const todoDeleteBtn = document.createElement(
        "button"
      ) as HTMLButtonElement;
      todoDeleteBtn.classList.add("delete-btn");
      todoDeleteBtn.onclick = () => deleteTodo(+todo.id);
      todoDeleteBtn.textContent = "Delete";

      // ? Append elements to todoItem
      todoItem.appendChild(todoInput);
      todoItem.appendChild(todoTitle);
      todoItem.appendChild(todoDeleteBtn);

      todoContainer.appendChild(todoItem);
    });
  } else {
    todoContainer.innerText = "No todos yet";
  }
};

renderTodoList(todos);

todoForm.onsubmit = (e) => {
  e.preventDefault();
  if (!todoInput.value) return;
  const todo = {
    id: (Math.random() * 100).toFixed(2),
    title: todoInput.value,
    isCompleted: false,
  };
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodoList(todos);
  todoInput.value = '';
};
