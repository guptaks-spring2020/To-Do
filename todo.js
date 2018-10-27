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

function loadData(data) {
    //alert(JSON.stringify(data));

    
    for (let i = 0; i < data.length; i++) {
       

        let TodoTitle = document.createTextNode(data[i].Title);
        let TodoAuthor = document.createTextNode(data[i].Author);
        let TodoDate = document.createTextNode(data[i].date);
       // let todoTextItem = document.createTextNode(data[i].ToDoText);
        let todoTextItem = data[i].ToDoText;
        // for(let j = 0; j< data[i].ToDoText.length; j++){
        //     todoTextItem = document.createTextNode(data[i].ToDoText[j]);
        //     console.log(todoTextItem);
        // }
        addJson(TodoTitle, TodoAuthor,TodoDate, todoTextItem);
    } 
}


function addJson(TodoTitle, TodoAuthor, TodoDate, todoTextItem) {

    //alert(typeof todoTextItem);
    let div = document.getElementById("container1");
    let span = document.createElement("div");
    let spanParent = document.createElement("div");
    spanParent.setAttribute("class", "spanParent");
    span.setAttribute("class", "containers");
    let textdiv = document.createElement("div");
     let dateAuthor = document.createElement("div");
    //let date = new Date().toLocaleDateString();
     let dateText = document.createTextNode(TodoDate.data);
     let authorText = document.createTextNode(TodoAuthor.data);
     dateAuthor.appendChild(dateText);
    
     let authorDiv = document.createElement("div");
     authorDiv.appendChild(authorText)
     authorDiv.setAttribute("class","authorDiv");

     dateAuthor.appendChild(authorDiv);
     dateAuthor.setAttribute("class", "dateauthor");
    let title = document.getElementById("titlex").value;
    let titleText;
    
    titleText = document.createTextNode(TodoTitle.data);
    textdiv.appendChild(titleText);
    textdiv.setAttribute("class", "textDiv")  
    
    
    document.createElement("br");
    let todoItem = document.createElement("input");
    todoItem.setAttribute("class", "taskInput");
    todoItem.type = 'text';
    let iconAdd = document.createElement("i");
    iconAdd.setAttribute("class", "fa fa-plus");
    let iconDel = document.createElement("i");
    iconDel.innerHTML = "delete";
    iconDel.setAttribute("class", "material-icons");
    iconDel.addEventListener("click", deleteToDoList);
    textdiv.appendChild(iconDel);
    span.appendChild(textdiv);
    span.appendChild(todoItem);
    span.appendChild(iconAdd);
    span.appendChild(dateAuthor);
    div.appendChild(span);

    let ul = document.createElement("ul");
    ul.setAttribute("class", "uList");
    
    for(let i = 0; i< todoTextItem.length; i++){
        let li = document.createElement("li");
    li.setAttribute("class", "list");
        let create = document.createTextNode(todoTextItem[i])
        li.appendChild(create);
        ul.appendChild(li);  
        spanParent.appendChild(ul); 
        span.appendChild(spanParent);
        let cl = close();
        li.appendChild(cl);
        cl.addEventListener("click", deleteToDoItem);
        li.addEventListener("click", strikeout);
    }

    

    iconAdd.addEventListener("click", function () {
        let todoItemValue = todoItem.value;
        let todoItemText1 = document.createTextNode(todoItemValue);
        let li = document.createElement("li");
        li.setAttribute("class", "list");
        
        // let ul = document.createElement("ul");
        // ul.setAttribute("class", "uList");
        let cl = close();

        if (todoItemValue === '') {
            //alert("Please enter some value");
        } else {
            li.appendChild(todoItemText1);
            ul.appendChild(li);
            spanParent.appendChild(ul);
            span.appendChild(spanParent);
        }
        todoItem.value = '';
        li.appendChild(cl);
        cl.addEventListener("click", deleteToDoItem);
        li.addEventListener("click", strikeout);
    });
}



function close()
{
    let close = document.createElement("i");
    close.setAttribute("class", "material-icons")
    close.innerHTML = 'delete';
    return close;

}


let btn = document.getElementById("btn");
btn.addEventListener("click", addToDoList);


function addToDoList(){
    let div = document.getElementById("container1");
    let span = document.createElement("div");
    span.setAttribute("class", "containers");
    let textdiv = document.createElement("div");
    // let dateAuthor = document.createElement("div");
    // let date = new Date().toLocaleDateString();
    // let dateText = document.createTextNode(date);
    // dateAuthor.appendChild(dateText);
    // dateAuthor.setAttribute("class", "dateauthor");
    let title = document.getElementById("titlex").value;
    let titleText = document.createTextNode(title);
    let ul = document.createElement("ul");
    ul.setAttribute("class", "uList");
    textdiv.appendChild(titleText);
    textdiv.setAttribute("class", "textDiv")
    document.createElement("br");
    let todoItem = document.createElement("input");
    todoItem.setAttribute("class","taskInput");
    todoItem.type = 'text';
    let iconAdd = document.createElement("i");
    iconAdd.setAttribute("class","fa fa-plus");
    let iconDel = document.createElement("i");
    iconDel.innerHTML = "delete";
    iconDel.setAttribute("class","material-icons");
    iconDel.addEventListener("click", deleteToDoList);
    textdiv.appendChild(iconDel);
    span.appendChild(textdiv);
    span.appendChild(todoItem);
    span.appendChild(iconAdd);
   // span.appendChild(dateAuthor);
    div.appendChild(span);
    
    iconAdd.addEventListener("click", function(){
        let todoItemValue = todoItem.value;
        let todoItemText = document.createTextNode(todoItemValue);
        let li = document.createElement("li");
        li.setAttribute("class", "list");
        // let ul = document.createElement("ul");
        // ul.setAttribute("class", "uList");
        let close = document.createElement("i");
        close.setAttribute("class","material-icons")
        close.innerHTML = 'delete';
        
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
    evt.target.parentNode.parentNode.style.display="none";
}

function strikeout(evt){
    evt.target.classList.toggle("strike");
}

function deleteToDoItem(evt){
    evt.target.parentNode.parentNode.removeChild(evt.target.parentNode);
}