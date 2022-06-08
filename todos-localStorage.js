const todoForm = document.getElementById("toDoForm");
const todoList = document.getElementById("toDoList");

// retrieve from localStorage
const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];  // we are retrieving the savedTodos from local storage 
console.log(localStorage.getItem("todos"));
console.log(savedTodos);
for (let i = 0; i < savedTodos.length; i++) { // for everyitem in the savedTodo list we are creating an li in which we put the innertext and if its completed 
  let newTodo = document.createElement("li");
  console.log("new todo1", newTodo)
  newTodo.innerText = savedTodos[i].task; // task is the key we set in line34 and is equivalent to newTodo.innerText which is the value of the task we inputted
  console.log("new todo2", newTodo)
  newTodo.isCompleted = savedTodos[i].isCompleted ? true : false; //iscompleted is a key we initialized as false in line 34 as a task is not complete at first when we add it (it becomes complete when we click and add line-through)
  if (newTodo.isCompleted) {
    newTodo.style.textDecoration = "line-through";
  }
  console.log("new todo3", newTodo)
  todoList.appendChild(newTodo);
  console.log("todo List", todoList)
}

todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  let newTodo = document.createElement("li");
  let taskValue = document.getElementById("task").value;
  newTodo.innerText = taskValue;
  newTodo.isCompleted = false;
  console.log("new todo4", newTodo)
  todoForm.reset();
  todoList.appendChild(newTodo);
  console.log("todoList2", todoList)

  // save to localStorage
  savedTodos.push({ task: newTodo.innerText, isCompleted: false });
  localStorage.setItem("todos", JSON.stringify(savedTodos)); //setting todos into local storage 
});

todoList.addEventListener("click", function(event) {
  let clickedListItem = event.target;

  if (!clickedListItem.isCompleted) {
    clickedListItem.style.textDecoration = "line-through";
    clickedListItem.isCompleted = true;
  } else {
    clickedListItem.style.textDecoration = "none";
    clickedListItem.isCompleted = false;
  }

  // breaks for duplicates - another option is to have dynamic IDs
  for (let i = 0; i < savedTodos.length; i++) {
    if (savedTodos[i].task === clickedListItem.innerText) {
      savedTodos[i].isCompleted = !savedTodos[i].isCompleted;
      localStorage.setItem("todos", JSON.stringify(savedTodos));
    }
  }
});
