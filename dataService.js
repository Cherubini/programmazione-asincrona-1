class DataService {
    
// GET => legge i dati 
// POST => scrive i dati
// PUT => modifica i dati
// DELETE => modifica i dati

    // static getTodos(callback) {
    //     fetch('https://643672ab8205915d34f3b508.mockapi.io/todos')
    //         .then(resp => resp.json())
    //         .then(data => callback(data))
    // }

    static getTodos() {
        return fetch('https://643693e63e4d2b4a12d60917.mockapi.io/todos')
            .then(resp => resp.json())
    }


    // static postTodo(todo){

    // }

    // static putTodo(todo){

    // }

    // static deleteTodo(todo){

    // }


}