const btnAdd = document.querySelector(".add");
const newTask = document.querySelector(".new-task");
const color = document.querySelector("#color");
const toDo = document.querySelector(".to-do");
const btnOk = document.querySelector(".ok");
const ul = document.querySelector(".to-do-list");
const empty = document.querySelector(".empty");


btnOk.addEventListener("click", function selectColor() {
    toDo.style.backgroundColor = color.value;
    console.log(color.value);
});



btnAdd.addEventListener("click", (e) => {
    e.preventDefault;
    li = document.createElement("li");
    p = document.createElement("p");
    btnDel = document.createElement("button");
    btnDel.className = "del";
    btnDel.innerHTML = "-";
    p.textContent = newTask.value;
    li.appendChild(p);
    li.appendChild(btnDel);
    ul.appendChild(li);
    newTask.value = "";

});

btnDel.addEventListener("click", (e) => {
    e.preventDefault;
    li.textContent="";
});