var todos=[]

var todoBtn = document.getElementById("todoBtn")
var table = document.getElementById("todo-list")


todoBtn.addEventListener('click', ()=>{
    var todo = document.getElementById("todo").value
    if(todo){
        todos.push(todo)
        
        const todoListItem = document.createElement("tr")
        const todoListItemNum = document.createElement("td")
        todoListItemNum.style.textAlign = "center"
        todoListItemNum.innerHTML = todos.length

        const todoListItemTitle = document.createElement("td")
        todoListItemTitle.innerHTML = todo

        const todoListItemActions = document.createElement("td")
        const editBtn = document.createElement("a")
        editBtn.innerHTML = "Edit"

        const deleteBtn = document.createElement("a")
        deleteBtn.innerHTML = "Delete"

        todoListItemActions.appendChild(editBtn)
        todoListItemActions.appendChild(deleteBtn)

        todoListItem.appendChild(todoListItemNum)
        todoListItem.appendChild(todoListItemTitle)
        todoListItem.appendChild(todoListItemActions)

        table.appendChild(todoListItem)
    }else{
        //do nothing
    }
    
    
    
})
