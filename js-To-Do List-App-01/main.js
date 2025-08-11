
import TodoList from "./todoList.js";
import { createElement } from "./utils.js";

const todoList = new TodoList();

const taskInput = document.getElementById("taskInput"); // input
const addTaskBtn = document.getElementById("addTaskBtn"); // button
const taskListEl = document.getElementById("taskList"); // ul

const renderTasks = () => {
    taskListEl.innerHTML = "";
    todoList.getTasks().forEach( (task, index) => {
        const li = createElement("li", task.text);
        
        const deleteBtn = createElement("span", "X", "delete-btn");
        
        deleteBtn.addEventListener("click", () => {
            todoList.removeTask(index);
            renderTasks();
        });

        li.appendChild(deleteBtn);
        taskListEl.appendChild(li);
    } );
};

addTaskBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();
    if(text){
        todoList.addTask(text);
        taskInput.value = "";
        renderTasks();
    }
});

