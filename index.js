// let date = document.getElementById("date");
// console.log(date);

// let currentDate = new Date();

// let months = ["January", "February", "March", "April", "May", "June", 
//               "July", "August", "September", "October", "November", "December"];

// let month = months[currentDate.getMonth()];
// console.log(currentDate.getDate(), month, currentDate.getFullYear());


let date = document.getElementById("date");
let addItemInput = document.getElementById("addItemInput");
let addbtn = document.getElementById("addbtn");
let tasklist = document.getElementById("task-list");

let currentDate = new Date();
let months = ["January", "February", "March", "April", "May", "June", 
              "July", "August", "September", "October", "November", "December"];
let month = months[currentDate.getMonth()];
date.innerText = `${currentDate.getDate()} ${month} ${currentDate.getFullYear()}`;


addbtn.addEventListener("click", function() {
    let item = addItemInput.value;
    addItem(item);
});

function addItem(item) {
    console.log(item); 
    // let task = document.createElement("li");
    let task = `<li><input type="checkbox" class="me-2"><input type="text" value="Breakfast" disabled class="me-2"><i class="bi bi-pencil-fill me-2 fs-5" onclick="edit()"></i><i class="bi bi-trash3-fill fs-5" onclick="deleteList(event)"></i></li>`;
    tasklist.appendChild(task);
    task.innerText = `${item}`;
}

function edit(){}

function deleteList(event){
    console.log(event.target.parentNode);
    event.target.parentNode.remove();
}