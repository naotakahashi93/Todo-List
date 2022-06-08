const toDoForm = document.querySelector ("#toDoForm")
const toDoList = document.querySelector ("#toDoList")

toDoForm.addEventListener("submit", function(event){
event.preventDefault();

let removeBtn = document.createElement("button");
removeBtn.innerText = "Remove Task";

let newTodo = document.createElement("li");
newTodo.innerText = document.getElementById("task").value;

toDoList.appendChild(newTodo);
newTodo.appendChild(removeBtn);
})

toDoList.addEventListener ("click", function(event){

const targetTagToLowerCase = event.target.tagName.toLowerCase()
if (event.target.tagName === "BUTTON"){
    event.target.parentElement.remove();
}

else if(targetTagToLowerCase === "li"){
    event.target.style.textDecoration = "line-through";
}
})


