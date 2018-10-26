window.onload = function(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.myjson.com/bins/1f617w');
    xhr.responseType = 'text';

    xhr.onload = function () {
        if(this.status == 200){
            let data = JSON.parse(xhr.responseText);
            loadData(data);    
        }    
    };
    xhr.send();
};


let btn = document.getElementById("btn");
btn.addEventListener("click", addToDoList);


function addToDoList(){
    let div = document.getElementById("container");
    let span = document.createElement("div");
    span.setAttribute("class", "containers");
    let title = document.getElementById("titlex").value;
    let titleText = document.createTextNode(title);
    let todoItem = document.createElement("input");
    todoItem.type = 'text';
    let addBtn = document.createElement("button");
    addBtn.innerHTML = 'Add';
    let delBtn = document.createElement("button");
    delBtn.innerHTML = 'Delete';
    delBtn.addEventListener("click", deleteToDoList);
    span.appendChild(titleText);
    span.appendChild(delBtn);
    span.appendChild(todoItem);
    span.appendChild(addBtn);
    div.appendChild(span);
    addBtn.addEventListener("click", function(){
        let todoItemValue = todoItem.value;
        let todoItemText = document.createTextNode(todoItemValue);
        let li = document.createElement("li");
        let ul = document.createElement("ul");
        let close = document.createElement("button");
        close.innerHTML = 'Done';
        if(todoItemValue === ''){
            alert("Please enter some value");
        }
        else{
            li.appendChild(todoItemText);
            ul.appendChild(li);
            span.appendChild(ul);
        }
        todoItem.value= '';
        li.appendChild(close);
        close.addEventListener("click", deleteToDoItem);
        li.addEventListener("click", strikeout);
    });
}

function deleteToDoList(evt){
    evt.target.parentNode.style.display="none";
}

function strikeout(evt){
    evt.target.classList.toggle("strike");
}

function deleteToDoItem(evt){
    evt.target.parentNode.style.display="none";
}