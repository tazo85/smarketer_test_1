// მოვძებნოთ ელემენტები DOM-იდან
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to save tasks to localStorage
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to add task to DOM
function addTaskToDOM(taskText, index) {
  const li = document.createElement("li");
  li.textContent = taskText;

  // შევქმნათ წაშლის ღილაკი
  const removeBtn = document.createElement("button");
  removeBtn.innerHTML = "&times;";
  removeBtn.className = "remove-btn";
  removeBtn.addEventListener("click", function() {
    list.removeChild(li);
    tasks.splice(index, 1);
    saveTasks();
  });

  li.appendChild(removeBtn);
  list.appendChild(li);
}

// Load existing tasks on page load
tasks.forEach((taskText, index) => {
  addTaskToDOM(taskText, index);
});

// ღილაკზე დაჭერისას დავამატოთ ახალი task
addBtn.addEventListener("click", function() {
  const taskText = input.value.trim();
  if (taskText === "") return;

  tasks.push(taskText);
  saveTasks();
  addTaskToDOM(taskText, tasks.length - 1);
  input.value = "";
});
