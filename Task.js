const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const completedTaskList = document.getElementById("completedTaskList");
const todoContainer = document.getElementsByClassName("todo-Container");
function add() {
  const taskText = taskInput.value;
  if (taskText !== "") {
    // Create a new <li> element for the task
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;
    const taskDone = document.createElement("img");
    taskDone.className = "taskDone";
    taskDone.src = "phone un.png";
    taskItem.prepend(taskDone);
    // Create a cross button
    const span = document.createElement("span");
    span.className = "delete-btn";
    span.textContent = "X";
    // Append delete cross to the taskItem
    taskItem.appendChild(span);
    // Append taskItem to To-DO List
    taskList.appendChild(taskItem);
    // Clear the input field
    taskInput.value = "";
    const img = document.createElement("img");
    img.src = "task cm.png";
    img.width = 40;
    img.height = 30;

    // Mark task as completed
    taskDone.addEventListener("click", function () {
      taskItem.removeChild(taskDone);
      taskItem.removeChild(span);
      completedTaskList.appendChild(taskItem);
      taskItem.prepend(img);
      taskItem.appendChild(span);
      // Add delete functionality for completed tasks
      span.addEventListener("click", function (event) {
        event.stopPropagation();
        completedTaskList.removeChild(taskItem);
      });
    });
    // Delete task from To-Do List
    span.addEventListener("click", function (event) {
      event.stopPropagation();
      taskList.removeChild(taskItem);
    });
  } else {
    alert("Enter your Task");
  }
}
