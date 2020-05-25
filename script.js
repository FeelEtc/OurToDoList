const feel = function () {
  let str = document.querySelector(".newTask").value; //значение из поля ввода
  let list = document.querySelector(".list");

  let task = document.createElement("div");
  task.className = "task";
  list.append(task);

  let done = document.createElement("input");
  done.type = "checkbox";
  task.append(done);

  let taskValue = document.createElement("label");
  task.append(taskValue);
  taskValue.innerHTML = str;

  let deleteButton = document.createElement("button");
  deleteButton.className = "delBut";
  deleteButton.innerHTML = "X";
  task.append(deleteButton);
  deleteButton.addEventListener('click', function(){
    task.remove()
  })

  document.querySelector(".newTask").value = "";
};

document.querySelector("button").addEventListener("click", feel);

document.querySelector("input").addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    feel();
  }
});

