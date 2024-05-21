const main_container = (document.getElementsByClassName('main_container'))[0]
const input = document.getElementById('task')
const button =  document.getElementById('addbutton')
const todolist = (document.getElementsByClassName('container'))[0]
const ullist = document.getElementById('ullist')
const error = document.getElementById("errors")
button.addEventListener('click', ()=>{
    const todo = input.value
    
    AddTodo(todo)
})

function AddTodo(todo){
    console.log(todo.length)
    console.log(typeof(todo))
    if(todo.length > 0){
    const div = document.createElement('li')
    div.classList.add('full-item')
    div.innerHTML = `<span id="left-item">${todo}</span>
                        <span id="right-item">
                            <button class="bg-success" id="complete" onclick=func1()>Complete</button>
                            <button class="bg-danger" id="Remove">Remove</button>
                        </span>`
    ullist.appendChild(div)
    }
    else{
        error.innerHTML = '<li>To-do should not be empty</li>'
    }
}

const complete = document.getElementById('complete')
console.log(complete)
const Remove = document.getElementById('Remove')
const fullitem = document.getElementById('full-item')
const leftitem = document.getElementById('left-item')
const rightitem = document.getElementById('right-item')

// complete.addEventListener('click', ()=>{
//     console.log("Hello")
//     fullitem.style.background = "green"
// })

function func1(){
    fullitem.style.color = "green"
}