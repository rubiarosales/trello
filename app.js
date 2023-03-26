const btnAdd = document.querySelector(".add");
const newTask = document.querySelector(".new-task");
const bColor = document.querySelector("#box-color");
const fColor = document.querySelector("#font-color");
const newNameList = document.querySelector("#box-name");
const nameList = document.querySelector(".name-list");
const toDo = document.querySelector(".to-do");
const config = document.querySelector(".config");
const configBtn = document.querySelector(".config-btn");
const btnOk = document.querySelector(".ok");
const ul = document.querySelector(".to-do-list");
const empty = document.querySelector(".empty");
const createBtn = document.querySelector(".create");
const boxContainer = document.querySelector(".box-container");

createBtn.addEventListener("click", function createBox() {
    const box = document.createElement("div");
    box.className = "list-container";
    box.innerHTML = `
    <div class="to-do">
    <div class="titulo">
        <p class="name-list">Tareas Pendientes</p>
        <div class="config-btn">
            <span class="material-symbols-outlined">
                settings
            </span>
        </div>
    </div>
    <div class="add-task">
        <input type="text" class="new-task" placeholder="Agregar nueva tarea">
        <button class="add">+</button>
    </div>
    <div class="to-do-task">
        <ul class="to-do-list">
        </ul>
    </div>

    <div class="empty">
        <p>No tienes tareas pendientes</p>
    </div>
</div>

<div class="config">
<div class="box-color">
    <p>Color de la caja: </p>
    <input type="color" id="box-color">
</div>
<div class="font-color">
    <p>Color de la fuente: </p>
    <input type="color" id="font-color">
</div>
<div class="box-name">
    <input type="text" id="box-name" placeholder="Nombre de la lista">
</div>
<button class="ok">Guardar</button>
</div>    `
    boxContainer.appendChild(box)
});

configBtn.addEventListener("click", (e) => {
    config.style.display = "block";
})

btnOk.addEventListener("click", function selectColor() {
    toDo.style.backgroundColor = bColor.value;
    toDo.style.color = fColor.value;
    config.style.backgroundColor = bColor.value;
    config.style.color = fColor.value;
    nameList.textContent = newNameList.value;
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

