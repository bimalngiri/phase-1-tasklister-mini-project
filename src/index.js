document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const addTask = () => {
      li.innerText = `${newTask} `;
      btn.innerText = "x";
      li.appendChild(btn);
      ul.appendChild(li);
    }

    const deleteTask = (e) => {
      e.target.parentNode.remove();
    }

    const clearInput = () => {
      taskInput.value = "";
    }

    const taskInput = document.getElementById("new-task-description");
    const newTask = taskInput.value;
    const ul = document.getElementById("tasks");
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.addEventListener('click', deleteTask);
    addTask();
    clearInput();
  });
});
