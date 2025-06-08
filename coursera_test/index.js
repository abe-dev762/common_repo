

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const clearCompletedBtn = document.getElementById('clearCompletedBtn');

let tasks = [];

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({text: taskText});
        taskInput.value = "";
        displayTask();
    }
}

function displayTask() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = createElement("li");
        li.innerHTML = `<input type="checkbox" id="task-${index} ${task.completed ? "checked" : ""}>
        <label for="task-${index}>${taskText}</label>`;
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList,appendChild(li);

    });
}

function toggleTask() {
    tasks[index].completed = !task[index].completed;
    displayTask();
}

function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
    displayTask();
}

addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);