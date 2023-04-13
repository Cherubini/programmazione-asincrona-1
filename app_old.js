// DataService.getTodos(console.log)

DataService.getTodos()
.then(data => {
    console.log(data);
    return Todolist.fromObjectArray('lista figa', data)
})
.then(todoList =>{
    console.log('todolist fatta nel then prima ', todoList);
    addButtonsListeners(todoList);
    displayTodos(todoList)});


    
function displayTodos(todoList) {
    const todoListTitle = document.getElementById('list-name');
    const todoListUl = document.getElementById('todo-list');
    const titleNode = document.createTextNode(todoList.title);
    const orderTitleBtn = document.getElementById('order-title-btn');
    
    todoListTitle.innerHTML = '';
    todoListUl.innerHTML = '';

    todoListTitle.appendChild(titleNode);

    for (let i = 0; i < todoList.todoArray.length; i++) {
        const todo = todoList.todoArray[i];

        const newLi = document.createElement('li');
        newLi.classList.add('todo-li');

        const titleSpan = document.createElement('span');
        titleSpan.classList.add('todo-title');

        const todoCompleted = document.createElement('span');
        todoCompleted.classList.add('todo-completed');

        const dateSpan = document.createElement('span');
        dateSpan.classList.add('todo-date');
        
        const titleNode = document.createTextNode(todo.title);
        const dateNode = document.createTextNode(todo.creationDate.toDateString());
        const completedNode = document.createTextNode(todo.isCompleted);

        titleSpan.appendChild(titleNode);
        dateSpan.appendChild(dateNode);
        todoCompleted.appendChild(completedNode);

        newLi.appendChild(titleSpan);
        newLi.appendChild(dateSpan);
        newLi.appendChild(todoCompleted);
        
        todoListUl.appendChild(newLi);

    }
}

 function orderByTitle(todoList) {
         todoList.sortByTitle();
         displayTodos(todoList);
 }
    
 function orderByDate(todoList) {
    todoList.sortByCreationDate();
    displayTodos(todoList);
}

function addButtonsListeners(todoList) {
    const orderByTitleBtn = document.getElementById('order-title-btn')
    orderByTitleBtn.addEventListener('click', (event)=> orderByTitle(todoList))

    const orderByDateBtn = document.getElementById('creation-date-btn')
    orderByDateBtn.addEventListener('click', (event)=> orderByDate(todoList))
}

// [
//     {
//      "title": "Fare colazione in orario",
//      "creationDate": 1681330379,
//      "isCompleted": false,
//      "id": "1"
//     },
//     {
//      "title": "Arrivare in orario a lezione",
//      "creationDate": 1681330319,
//      "isCompleted": false,
//      "id": "2"
//     },
//     {
//      "title": "Arrivare a Winterhold e diventare arcimago",
//      "creationDate": 1681330259,
//      "isCompleted": false,
//      "id": "3"
//     },
//     {
//      "title": "Entrare nella gilda dei ladri a Riften",
//      "creationDate": 1681330199,
//      "isCompleted": false,
//      "id": "4"
//     },
//     {
//      "title": "Andare a bere con Sam",
//      "creationDate": 1681334400,
//      "isCompleted": false,
//      "id": "5"
//     },
//     {
//      "title": "Portare l'osso illiaco di Pelagius",
//      "creationDate": 1681334340,
//      "isCompleted": false,
//      "id": "6"
//     },
//     {
//      "title": "Dire alla porta della confraternita che deve stare zitta",
//      "creationDate": 1681334280,
//      "isCompleted": false,
//      "id": "7"
//     },
//     {
//      "title": "Rovinare il matrimonio a Vittoria",
//      "creationDate": 1681334220,
//      "isCompleted": false,
//      "id": "8"
//     },
//     {
//      "title": "Rapire Lydia e mettera a capo di una fattoria senza possibilità di rescindere il contratto",
//      "creationDate": 1681334160,
//      "isCompleted": false,
//      "id": "9"
//     }
//    ]