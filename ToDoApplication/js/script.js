// alert("Connected")

let ul = document.getElementById('list')
let li;
let undoList =[];
let toDoList = [];
let addButton = document.getElementById('add')
addButton.addEventListener('click', addTodo)

let removeButton = document.getElementById('remove')
removeButton.addEventListener('click', removeTodo)
class TodoOperation{
     addItem(value){
        console.log(value); 
        toDoList.push(value)
       
     
     }
      removeItem(value){
        
        toDoList.pop(value)
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
        undoList[0][0](undoList[0][1])
        toDoList.forEach((element)=>{
            
            
            displayToDo(element)
        })
    }
    input.value = ''
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
            removeItem(value)
            undoList.push(addItem(value))
            console.log(undoList)
            ul.removeChild(li[index]);
        }

       
        
    }
       

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
