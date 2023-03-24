const btnAdd = document.querySelector(".add");
const newTask = document.querySelector(".new-task");
const bColor = document.querySelector("#box-color");
const fColor = document.querySelector("#font-color");
const newNameList=document.querySelector("#box-name");
const nameList=document.querySelector(".name-list");
const toDo = document.querySelector(".to-do");
const config = document.querySelector(".config");
const configBtn = document.querySelector(".config-btn");
const btnOk = document.querySelector(".ok");
const ul = document.querySelector(".to-do-list");
const empty = document.querySelector(".empty");


configBtn.addEventListener("click", (e)=>{
    config.style.display = "block";
})

btnOk.addEventListener("click", function selectColor() {
    toDo.style.backgroundColor = bColor.value;
    toDo.style.color = fColor.value;
    config.style.backgroundColor = bColor.value;
    config.style.color = fColor.value;
    nameList.textContent=newNameList.value;
    config.style.display = "none";
});



btnAdd.addEventListener("click", (e) => {
    e.preventDefault;
    if (newTask.value != "") {
        li = document.createElement("li");
        p = document.createElement("p");
        p.textContent = newTask.value;
        li.appendChild(p);
        li.appendChild(addDeleteBtn());
        ul.appendChild(li);
        newTask.value = "";
        empty.style.display = "none";
    }
});



function addDeleteBtn() {
    const btnDel = document.createElement("button");
    btnDel.className = "del";
    btnDel.innerHTML = "x";
    btnDel.addEventListener("click", (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);
        const list = document.querySelectorAll("li");
        if (list.length === 0) {
            empty.style.display = "block";
        }
    });

    return btnDel;

}

