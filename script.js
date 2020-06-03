const feel = function () {
  let str = document.querySelector(".newTask").value; //значение из поля ввода
  let list = document.querySelector(".list");

  let task = document.createElement("div"); //новая задача (вся) - с флажком выполнения и кнопкой удаления
  task.className = "task";
  list.append(task);

  let done = document.createElement("input"); //поставить галочку
  done.type = "checkbox";
  task.append(done);
  done.addEventListener("click", function () {//сделать задачу перечеркнутой при поставленном флажке и обратно
    if (done.checked) {
      taskValue.style.textDecoration = "line-through";
      taskValue.style.color = "#ead7d7";
    } else {
      taskValue.style.textDecoration = "none";
      taskValue.style.color = "black";
    }
  });

  let taskValue = document.createElement("label"); //записанная новая задача
  task.append(taskValue);
  taskValue.innerHTML = str;

  let countValue = document.querySelector(".count");

  let deleteButton = document.createElement("button"); //кнопка удаления задачи
  deleteButton.className = "delBut";
  deleteButton.innerHTML = "X";
  task.append(deleteButton);
  deleteButton.addEventListener("click", function () {
    task.remove();
    countValue.innerHTML = document.querySelectorAll(".task").length + ' items left';
  });

  document.querySelector(".newTask").value = ""; //обнуление поля ввода после ввода задачи

  //let count = document.querySelectorAll(".task").length;  
  countValue.innerHTML = document.querySelectorAll(".task").length + ' items left';
};

document.querySelector("button").addEventListener("click", feel);

document.querySelector("input").addEventListener("keydown", function (e) {
  //добавление новой задачи при нажатии на ENTER
  if (e.keyCode === 13) {
    feel();
  }
});


