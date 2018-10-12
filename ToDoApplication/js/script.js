
// alert("Connected")


let ul = document.getElementById('list')
let li;
let undoList =[];
let toDoList = [];
let redoList = [];
let addButton = document.getElementById('add')
addButton.addEventListener('click', addTodo)

document.addEventListener('keydown',function(event){
    if (event.code == "KeyZ" && event.ctrlKey) {
        alert("Hello")
        let popValue = undoList.pop();
        let str= popValue[0](popValue[1]);
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
        //console.log(undoList)
    }

    if (event.code == "KeyY" && event.ctrlKey) {
        alert("y")
        let popValue = redoList.pop();
         let str = popValue[0](popValue[1]);
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
        document.getElementById('input').innerHTML = '';    
        //console.log(undoList)
    }
    
    
})
  
let removeButton = document.getElementById('remove')
removeButton.addEventListener('click', removeTodo)
class TodoOperation{
     addItem(value){
        //console.log(value); 
        toDoList.push(value)
        return "add";  
     
     }
      removeItem(value){
        //console.log(value);
        // toDoList.pop(value)
        toDoList=toDoList.filter((element)=>{
            return element !== value;
        })
        //console.log(toDoList);
        return "remove"
     }  
}

let toDO = new TodoOperation();

function addTodo(){

    var input = document.getElementById('input')
    var value = input.value

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

        //undoList[0][0](undoList[0][1])
        toDoList.forEach((element)=>{
            
            
            displayToDo(element)
        })
    }
    redoList = [];
}    

function resetItem(){
    var lt = ul.children
    for (let index = 0; index < lt.length; index++) {
        // console.log(lt[index])
        while(lt[index]){
        ul.removeChild(lt[index])}
    }
}

function removeTodo(){
    li = ul.children
     console.log(li)

    for (let index = 0; index < li.length; index++) {
        // const element = li[index];
      
        
        //console.log(value)
        while(li[index] && li[index].children[0].checked)
        {
           let value = li[index].children[1].innerHTML
            //console.log(li[index].children[1].value);s
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
    input.value = ''

    setTimeout(() => {
        li.className='visual'}, 5)     
}




