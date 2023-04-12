class Todolist{

    constructor(title, todoArray = []){
        this.title = title;
        this.todoArray = todoArray;
    }

    static fromObjectArray(title, objectArray) {
        const newTodoList = new Todolist(title);
        for (let i = 0; i < objectArray.length; i++) {
            const todoObject = objectArray[i];
            const newTodo = Todo.fromTodoObject(todoObject);
            newTodoList.addTodo(newTodo);
        }
        return newTodoList;
    }

    addTodo(todo){
        this.todoArray.push(todo);
    }

    removeTodo(todo){
        this.todoArray.filter((element) => element!=todo)
    }

    sortByTitle(){

    }

    sortByCreationDate(){

    }

    completeTodo(todo){
        this.todoArray.map((element) => {if(element===todo)
                                            element.isComplete=true;})
    }


}