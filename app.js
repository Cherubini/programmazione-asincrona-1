// DataService.getTodos(console.log)

let superList = new Todolist(' lista super figa');

displayTodos();

DataService.getTodos().then(data => {
    fillTodoArrayFromServer(data);
    displayTodos();
})

function fillTodoArrayFromServer(data) {
    for (let i = 0; i < data.length; i++) {
        const object = data[i];
        const todo = new Todo(object.title, object.creationDate,object.isCompleted,object.id);
        superList.addTodo(todo);
    }
}

function displayTodos2() {


    const superListTitle = document.getElementById('list-name');
    const superListUl = document.getElementById('todo-list');
    superListTitle.innerHTML = superList.title;
    superListUl.innerHTML='';
    for (let i = 0; i < superList.todoArray.length; i++) {
        const todo = superList.todoArray[i];
        console.log(todo);
        superListUl.innerHTML += 
    `<li class='todo-li ${todo.isCompleted ? 'completed' : ''}'>
        <span class='todo-title '>${todo.title}</span>
        <span class='todo-date'>${todo.creationDate.toDateString()}</span>
        <button id= 'completed-btn${i}'> completato </button>
        <button id= 'remove-btn${i}'> cancella </button>
    </li>`

    }

    for (let i = 0; i < superList.todoArray.length; i++) {
        const todo = superList.todoArray[i];
        const completedBtn = document.getElementById(`completed-btn${i}`);
        const deletedBtn = document.getElementById(`remove-btn${i}`);

        deletedBtn.addEventListener('click', (event)=> {
            superList.removeTodo(todo);
            displayTodos();
        })

        completedBtn.addEventListener('click', (event)=> {
            superList.completeTodo(todo);
            displayTodos();
        })
    
    }
}


function displayTodos() {
    const superListUl = document.getElementById('todo-list');
    superListUl.innerHTML = '';
    
    displayListTitle();

    const orderByTitleBtn = document.getElementById('order-title-btn')
    orderByTitleBtn.addEventListener('click', (event)=> {
        orderByTitle(superList);
        displayTodos();
    })

    const orderByDateBtn = document.getElementById('creation-date-btn')
    orderByDateBtn.addEventListener('click', (event)=> {
        orderByDate(superList);
        displayTodos();
    })


    for (let i = 0; i < superList.todoArray.length; i++) {
        const todo = superList.todoArray[i];
        const newLi =createLi(todo);
        superListUl.appendChild(newLi);
    }
}


function displayListTitle() {
    const superListTitle = document.getElementById('list-name');
    const titleNode = document.createTextNode(superList.title);
    superListTitle.innerHTML = '';
    superListTitle.appendChild(titleNode);
}

function createLi(todo) {
    const newLi = document.createElement('li');
    newLi.classList.add('todo-li');
    if (todo.isCompleted) {
        newLi.classList.add('completed');
        }
    newLi.appendChild(createTitleToLi(todo));
    newLi.appendChild(createDateToLi(todo));

    createButtonDeleted(superList, newLi, todo);
    createButtonCompleted(superList, newLi, todo);
    return newLi;
}

function createTitleToLi(todo) {
    const titleSpan = document.createElement('span');
    titleSpan.classList.add('todo-title');
    const titleNode = document.createTextNode(todo.title);
    //li.appendChild(titleSpan);
    titleSpan.appendChild(titleNode);
    return titleSpan;
}

function createDateToLi(todo) {
    const dateSpan = document.createElement('span');
    dateSpan.classList.add('todo-date');
    const dateNode = document.createTextNode(todo.creationDate.toDateString());
   // li.appendChild(dateSpan);
    dateSpan.appendChild(dateNode);
    return dateSpan;
}

 function createButtonDeleted(superList, newLi, todo) {
    const btnDeleted = document.createElement('button');
    btnDeleted.addEventListener('click', (event)=>  
        {
        DataService.deleteTodo(todo).then(removedTodo =>{
            superList.removeTodo(todo);
            displayTodos();
        })
        });
    const deletedBtn = document.createTextNode('cancella');
    btnDeleted.appendChild(deletedBtn);
    newLi.appendChild(btnDeleted)
 }

 function createButtonCompleted(superList, newLi, todo) {
    const btnCompleted = document.createElement('button');
    btnCompleted.addEventListener('click', (event)=> 
        {
        superList.completeTodo(todo);
        DataService.putTodo(todo).then(updatedTodo => {
            displayTodos();
            })
        superList.completeTodo(todo);
        displayTodos();
        });
    const completedBtn = document.createTextNode('completato');
    btnCompleted.appendChild(completedBtn);
    newLi.appendChild(btnCompleted);
 }



 function orderByTitle(superList) {
    superList.sortByTitle();
    displayTodos();
}

function orderByDate(superList) {
superList.sortByCreationDate();
displayTodos();
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