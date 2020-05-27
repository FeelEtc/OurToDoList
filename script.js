const feel = function () {
  let str = document.querySelector(".newTask").value; //значение из поля ввода
  let list = document.querySelector(".list");

  let task = document.createElement("div"); //новая задача (вся) - с флажком выполнения и кнопкой удаления
  task.className = "task";
  list.append(task);

  let done = document.createElement("input"); //поставить галочку
  done.type = "checkbox";
  task.append(done);
  let noga = true;
    done.addEventListener("click", function () {
      if(noga){
        taskValue.style.textDecoration = "line-through";
        taskValue.style.color = "#ead7d7";
        console.log(done);
        noga = false;
      }else{
        taskValue.style.textDecoration = "none";
        taskValue.style.color = "black";
        noga = true;
      }
    });

  let taskValue = document.createElement("label"); //записанная новая задача
  task.append(taskValue);
  taskValue.innerHTML = str;

  let deleteButton = document.createElement("button"); //кнопка удаления задачи
  deleteButton.className = "delBut";
  deleteButton.innerHTML = "X";
  task.append(deleteButton);
  deleteButton.addEventListener("click", function () {
    task.remove();
  });

  document.querySelector(".newTask").value = ""; //обнуление поля ввода после ввода задачи
};

document.querySelector("button").addEventListener("click", feel);

document.querySelector("input").addEventListener("keydown", function (e) {
  //добавление новой задачи при нажатии на ENTER
  if (e.keyCode === 13) {
    feel();
  }
});