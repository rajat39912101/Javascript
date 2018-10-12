// alert("Connected")
import ToDoOperation from '../js/Todo.js';

var ul = document.getElementById('list')
var li
let td = new ToDoOperation();
let tdList = td.toDo();
let undoList = [];
var addButton = document.getElementById('add')
addButton.addEventListener('click', addToDoList)

var removeButton = document.getElementById('remove')
removeButton.addEventListener('click', removeToDoList)


var toDoList = [];

function addToDoList(){

    var input = document.getElementById('input')
    var value = input.value

    if (value === ''){
        var para = document.createElement('p')
        para.textContent = 'Please enter valid ToDo'
        para.style = "color:red"
        ul.insertBefore(para, ul.childNodes[0])
    }
    else{
        td.addItem(value);
        undoList.push(td.removeItem(value));
        console.log("In else : " + td.toDo());
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

function removeToDoList(){
    li = ul.children
     console.log(li)

    for (let index = 0; index < li.length; index++) {
        // const element = li[index];
        console.log(li[index])
        console.log(value)
        while(li[index] && li[index].children[0].checked)
        {
            value = li[index].children[1].innerHTML
            td.removeItem(value);
            undoList.push(td.addItem(value));
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


