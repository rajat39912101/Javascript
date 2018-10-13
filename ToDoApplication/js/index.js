
let ul = document.getElementById('list')
let li;
let undoList =[];
let toDoList = [];
let redoList =[];
let addButton = document.getElementById('add')
addButton.addEventListener('click', addTodo)
document.addEventListener('keydown',function(event){
    //ctrl-z
    if (event.code == "KeyZ" && event.ctrlKey) {
        // alert("Hello")
        let popValue = undoList.pop();
        let str= popValue[0](popValue[1]);
        //redolist push
        if(str=="add"){
            redoList.push([toDO.removeItem,popValue[1]])
        }
        else{
            redoList.push([toDO.addItem,popValue[1]])
        }
        resetItem()
        toDoList.forEach((element)=>{
            
            
            displayToDo(element)
        })
       
    }
    //ctrl-y
    if (event.code == "KeyY" && event.ctrlKey) {
        event.preventDefault();
         let popValue = redoList.pop();
         let str = popValue[0](popValue[1]);
            //undolist push
         if(str=="add"){
            undoList.push([toDO.removeItem,popValue[1]])
        }
        else{
            undoList.push([toDO.addItem,popValue[1]])
        }
         resetItem()
        toDoList.forEach((element)=>{
        
            displayToDo(element)
        })

    }
})
//remove button
let removeButton = document.getElementById('remove')
removeButton.addEventListener('click', removeTodo)
class TodoOperation{
    //add item in array
     addItem(value){
    
        let value1 =toDoList.push(value)
        
        return "add"
     
     }
     //remove item
      removeItem(value){
        console.log(value);
       
        toDoList=toDoList.filter((element)=>{
            return element !== value;
        })
        console.log(toDoList);
        return "remove"
     }  
}

let toDO = new TodoOperation();

function addTodo(){

    let input = document.getElementById('input')
    let value = input.value

    if (value === ''){
        var para = document.createElement('p')
        para.textContent = 'Please enter valid ToDo'
        para.style = "color:red"
        ul.insertBefore(para, ul.childNodes[0])
    }
    else{
        toDO.addItem(value);
        resetItem();
        undoList.push([toDO.removeItem,value])
        console.log(undoList);
        toDoList.forEach((element)=>{
            
            
            displayToDo(element)
        })
    }
    input.value = ''
    redoList = [];
}    
//reset item
function resetItem(){
    var lt = ul.children
    let input = document.createElement('input');
    input.setAttribute('id','input');
    for (let index = 0; index < lt.length; index++) {
       
        while(lt[index]){
        ul.removeChild(lt[index])}
    }
}
//remove
function removeTodo(){
    li = ul.children
    

    for (let index = 0; index < li.length; index++) {
   
      
        
        
        while(li[index] && li[index].children[0].checked)
        {
           let value = li[index].children[1].innerHTML
         
            toDO.removeItem(value)
            undoList.push([toDO.addItem,value])
            console.log(undoList)
            ul.removeChild(li[index]);
        }

       
        
    }
    
    redoList = [];
       

}

function displayToDo(value){


    
    var textnode = document.createTextNode(value)

    //Create New Li
    var li = document.createElement('li')
    li.setAttribute('class', 'mycheck')

    //Create input
    var inp = document.createElement('input')
    inp.type = 'checkbox'
    inp.setAttribute('id' , 'check')

    //Create Label
    var label = document.createElement('label')
    label.appendChild(textnode)

    li.appendChild(inp)
    li.appendChild(label)

    ul.insertBefore(li, ul.childNodes[0])
    
    setTimeout(() => {
        li.className='visual'}, 5)     
    }


