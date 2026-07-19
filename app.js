const BASE_URL = "http://3.6.39.68:8080";

window.onload = function () {
    loadTodos();
};

async function loadTodos() {

    const response = await fetch(BASE_URL + "/todos");

    const todos = await response.json();

    const todoList = document.getElementById("todoList");

    todoList.innerHTML = "";

    todos.forEach(todo => {

        todoList.innerHTML += `

        <div class="todo">

            <h3>${todo.title}</h3>

            <p>Completed : ${todo.completed}</p>

            <div class="actions">

                <button onclick="editTodo(${todo.id})">
                    Edit
                </button>

                <button onclick="deleteTodo(${todo.id})">
                    Delete
                </button>

            </div>

        </div>

        `;

    });

}

async function addTodo() {

    const title = document.getElementById("title").value;

    if(title===""){
        alert("Enter Title");
        return;
    }

    const todo={

        id:Date.now(),

        title:title,

        completed:false

    };

    await fetch(BASE_URL+"/todos",{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify(todo)

    });

    document.getElementById("title").value="";

    loadTodos();

}

async function deleteTodo(id){

    await fetch(BASE_URL+"/todos/"+id,{

        method:"DELETE"

    });

    loadTodos();

}

async function editTodo(id){

    const response =
        await fetch(BASE_URL+"/todos/"+id);

    const todo =
        await response.json();

    const newTitle =
        prompt("Update Todo",todo.title);

    if(newTitle==null)
        return;

    todo.title=newTitle;

    await fetch(BASE_URL+"/todos/"+id,{

        method:"PUT",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify(todo)

    });

    loadTodos();

}
