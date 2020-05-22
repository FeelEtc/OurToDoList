let btn = document.querySelector("button");
btn.addEventListener("click", function() {
    let str = document.querySelector(".newTask").value;
    let task_str = document.querySelector(".taskText");
    task_str.append(str);
})
