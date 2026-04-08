// მოვძებნოთ ელემენტები DOM-იდან
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");
const remove = document.getElementById("remove")

// ღილაკზე დაჭერისას დავამატოთ ახალი task
addBtn.addEventListener("click", function() {
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  // დაჭერისას task წაიშლება
  remove.addEventListener("click", function() {
    list.removeChild(li);
  });

  list.appendChild(li);
  input.value = "";
});
