document.addEventListener("DOMContentLoaded", function() {
    const todoInput = document.getElementById("todoInput");
    const addTodoBtn = document.getElementById("addTodo");
    const todoList = document.getElementById("todoList");

    addTodoBtn.addEventListener("click", function() {
        const taskText = todoInput.value.trim();

        if (taskText !== "") {
            const li = document.createElement("li");
            li.textContent = taskText;

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.classList.add("delete-button");

            deleteBtn.addEventListener("click", function() {
                li.remove();
            });

            li.appendChild(deleteBtn);

            li.addEventListener("click", function() {
                li.classList.toggle("completed");
            });

            todoList.appendChild(li);
            todoInput.value = "";
        }
    });

    todoInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTodoBtn.click();
        }
    });
});
