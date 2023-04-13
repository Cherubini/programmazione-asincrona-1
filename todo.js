class Todo{

    constructor(title, creationDate, isCompleted = false, id){
        this.title = title;
        this._creationDate = new Date(creationDate*1000);
        this.isCompleted = isCompleted;
        if (id) {
            this.id = id;
        }
    }

    get creationDate(){
        return this._creationDate;
    }

    set creationDate(newDate){
        this._creationDate=newDate;
    }

    compareByTitle(todo2){
        return this.title.localeCompare(todo2.title);
    }
    //ritorna la data più recente o true se sono uguali
    compareByCreationDate(todo2){
        if(this.creationDate.getTime() < todo2.creationDate.getTime())
            return -1;
         else if(this.creationDate.getTime() > todo2.creationDate.getTime())
            return 1;
        return 0
    }

    static fromTodoObject(todoObject) {
        return new Todo(todoObject.title, todoObject.creationDate, todoObject.isCompleted, todoObject.id);
    }


}