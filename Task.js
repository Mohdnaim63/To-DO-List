const taskInput = document.getElementById("taskInput")
const addTaskButton = document.getElementById("addTaskButton")
const taskList = document.getElementById("taskList")
const completedTaskList = document.getElementById("completedTaskList")
const todoContainer = document.getElementsByClassName("todo-Container")

//Add task on button click
addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value;

    if(taskText !== ""){
        //create a new <li> element for the task
        const taskItem = document.createElement("li")
        taskItem.textContent = taskText;
       
        // Create a delete button Complete Button
         const completeButton = document.createElement("button")
         completeButton.className = "complete-btn"
        completeButton.textContent = "Complete"
        taskItem.appendChild(completeButton)

        //Hover the Button
        completeButton.addEventListener("mouseover", function(){
            completeButton.style.backgroundColor = "#4d804d"
        });

        completeButton.addEventListener("mouseout", function(){
            completeButton.style.backgroundColor = "#29a329"
        });

        // Create a Delete Button
        const deleteButton = document.createElement("button")
        deleteButton.className = "delete-btn"
        deleteButton.textContent = "Delete"

        // Append delete button to the taskItem
        taskItem.appendChild(deleteButton)
       // Append taskItem to To-DO List
        taskList.appendChild(taskItem)
       // Clear the Input Field
    
        taskInput.value = "";

        const img = document.createElement("img")
        img.src = "task cm.png";
        img.width =40;
        img.height = 30;

        completeButton.addEventListener("click", function(){
            taskItem.removeChild(completeButton)
            taskItem.removeChild(deleteButton)
            completedTaskList.appendChild(taskItem)
            taskItem.appendChild(img)
        })

        deleteButton.addEventListener("click", function(event){
            event.stopPropagation()
            taskList.removeChild(taskItem)
        
        });
    }
    else{
        alert("Enter your Task")
    
    }
});
 
