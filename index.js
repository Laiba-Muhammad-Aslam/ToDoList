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
    if(item === ""){
        return;
    }else{

  
    let task = document.createElement("li");
    task.innerHTML = `<input type="checkbox" class="me-2 checkbox my-2">
                      <input type="text" value="${item}" disabled class="me-2 taskName my-2">
                      <i class="bi bi-pencil-fill me-2 fs-5 my-2" onclick="edit(event)"></i>
                      <i class="bi bi-trash3-fill fs-5 my-2" onclick="deleteList(event)"></i>`  
    tasklist.appendChild(task);
    addItemInput.value = ""; // Clear the input field after adding the task

    let checkBox = task.querySelector(".checkbox");
    let taskName = task.querySelector(".taskName");

    checkBox.addEventListener("change", function() {
        if(checkBox.checked) {
            taskName.style.textDecoration = "line-through";
        } else {
            taskName.style.textDecoration = "none";
        }
    });

}
}

function edit(event){
    let changeDisabled = event.target.parentNode.childNodes[2].disabled;
    changeDisabled = false;
    console.log(changeDisabled);
    if(changeDisabled === false){
        console.log(event.target.parentNode.childNodes[2].value);
        // taskName.focus();
        event.target.parentNode.childNodes[2].focus();
    }
    // console.log(event.target.parentNode.childNodes[2].disabled = true);
}

function deleteList(event){
    console.log(event.target.parentNode);
    event.target.parentNode.remove();
}

let deleteAll = document.getElementById("deleteAll");
console.log(deleteAll);
deleteAll.addEventListener("click", function(){
    tasklist.innerHTML = "";
})