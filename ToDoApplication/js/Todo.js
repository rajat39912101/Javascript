  export class TodoOperation{
    
    constructor(){
        
         this.toDoList=[];
        console.log(toDoList)
        // let undoList=[];
        // let redoList =[];
    }
      toDo(){
        console.log(this.toDoList);
        
        return this.toDoList
    }
     addItem(value){
         console.log(value);
         
        this.toDoList.push(value)
        console.log(this.toDoList);
        //return this.toDoList;

    }
    removeItem(value){
        
        this.toDoList.pop(value)
    }

}
