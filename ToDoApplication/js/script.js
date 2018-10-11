// alert("Connected")

var ul = document.getElementById('list')
var li
let 
var addButton = document.getElementById('add')
addButton.addEventListener('click', addItem)

var removeButton = document.getElementById('remove')
removeButton.addEventListener('click', removeItem)

var resetButton = document.getElementById('reset')
resetButton.addEventListener('click', resetItem)

var toDoList = [];

function addItem(){

    var input = document.getElementById('input')
    var value = input.value

    if (value === ''){
        var para = document.createElement('p')
        para.textContent = 'Please enter valid ToDo'
        para.style = "color:red"
        ul.insertBefore(para, ul.childNodes[0])
    }
    else{
        addToDoItem(value);
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

function removeItem(){
    li = ul.children
     console.log(li)

    for (let index = 0; index < li.length; index++) {
        // const element = li[index];
        console.log(li[index])
        value = li[index].children[1].innerHTML
        console.log(value)
        while(li[index] && li[index].children[0].checked)
        {
            //console.log(li[index].children[1].value);
            removeToDoItem(li[index].children[1].innerHTML);
            ul.removeChild(li[index]);
        }

        
    }
        resetItem();
        toDoList.forEach(function(element) {displayToDo(element)});

}

function addToDoItem(value){
    toDoList.push(value);
    resetItem();
    toDoList.forEach(function(element) {displayToDo(element)});
}

function removeToDoItem(value){
    toDoList = toDoList.filter(function(item) {
        console.log("Item value  : " + item + " and compare string : " + value); 
        return item !== value
    })
    toDoList.forEach(function(element){
        console.log(element);
    })
    
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


