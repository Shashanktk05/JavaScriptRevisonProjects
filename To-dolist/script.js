let arr =  [];

function updateStats() {
    document.getElementById("totalTasks").textContent = arr.length;

    const completed = arr.filter(task => task.completed).length;

    document.getElementById("completedTasks").textContent = completed;
    document.getElementById("pendingTasks").textContent = arr.length - completed;
}

function showDetails() {

    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    arr.forEach((task) => {

        taskList.innerHTML += `
        <li class="task">

            <div class="left">
                <input
                    type="checkbox"
                    class="check"
                    value="${task.id}"
                    ${task.completed ? "checked" : ""}
                >

                <span class="${task.completed ? "completed" : ""}">
                    ${task.value}
                </span>
            </div>

            <button class="delete" value="${task.id}">
                Delete
            </button>

        </li>
        `;
    });

    updateStats();
}

document.getElementById("addTask").addEventListener("click", () => {

    const input = document.getElementById("taskInput");
    const data = input.value.trim();

    if (data === "") {
        document.getElementById("message").textContent = "Please enter a task.";
        return;
    }

    document.getElementById("message").textContent = "";

    arr.push({
        id: Date.now(),
        value: data,
        completed: false
    });

    input.value = "";

    
    showDetails();
});

document.getElementById("taskInput").addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        document.getElementById("addTask").click();
    }

});

document.getElementById("taskList").addEventListener("click", (event) => {

  
    if (event.target.classList.contains("delete")) {

        const id = Number(event.target.value);

        arr = arr.filter(task => task.id !== id);

      
        showDetails();
    }


    if (event.target.classList.contains("check")) {

        const id = Number(event.target.value);

        arr = arr.map(task => {

            if (task.id === id) {
                task.completed = !task.completed;
            }

            return task;
        });

        showDetails();
    }

});

showDetails();