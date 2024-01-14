const Labelinput = document.querySelector("#day-task-input");

function addTask(listId, inputId) {
  const taskInput = document.getElementById(inputId);
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskList = document.getElementById(listId);
    const newTask = document.createElement("li");
    newTask.textContent = taskText;

    // Adiciona um checkbox à tarefa
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";
    newTask.appendChild(checkbox);
    //

    // Adiciona um botão para remover a tarefa
    const removeButton = document.createElement("button");
    removeButton.className = "remove-button";
    const removeIcon = document.createElement("img");
    removeIcon.src = "../IMAGEM/botao-apagar.png";
    removeIcon.alt = "Remover";
    removeButton.appendChild(removeIcon);
    removeButton.onclick = function () {
      taskList.removeChild(newTask);
    };
    //

    // Adiciona um botão para editar a tarefa
    const editButton = createActionButton(
      "../IMAGEM/lapis.png",
      "Editar",
      function () {
        editTask(newTask, taskInput);
      }
    );
    function editTask(taskElement, taskInput) {
      const currentText = taskElement.textContent;
      taskInput.value = currentText;
      taskElement.parentNode.removeChild(taskElement);
    }

    function createActionButton(iconSrc, altText, clickHandler) {
      const button = document.createElement("button");
      button.className = "action-button";
      const icon = document.createElement("img");
      icon.src = iconSrc;
      icon.alt = altText;
      button.appendChild(icon);
      button.onclick = clickHandler;
      return button;
    }
    //

    newTask.appendChild(editButton);
    newTask.appendChild(removeButton);
    taskList.appendChild(newTask);

    taskInput.value = "";
  }

  Labelinput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      addTask("day-tasks", "day-task-input");
    }
  });
}
