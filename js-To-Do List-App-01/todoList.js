
export default class TodoList{
    constructor(){
        this.tasks = [];
    }

    addTask(taskText){
        this.tasks.push({text: taskText}); // Add a task at end of tasks array
    }

    removeTask(index){
        this.tasks.splice(index, 1); // remove 1 element
    }

    getTasks(){
       return [...this.tasks];
    }

}
