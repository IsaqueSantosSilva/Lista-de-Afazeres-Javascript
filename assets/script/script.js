let addToDoButton = document.querySelector("#addToDo");
let toDoContainer = document.querySelector("#toDoContainer");
let inputField = document.querySelector("#inputField");

addToDoButton.addEventListener("click", () => {
  if (inputField.value != "") {

    toDoContainer.insertAdjacentHTML("afterbegin",
      `
		<div class="toDo-container">
			<li class="todo-text">
				${inputField.value}
			</li>

			<div class="buttons-div">
				<button class="removeTodo-btn"> 
          <i class="fas fa-trash"></i>
				</button>
				<button class="checkTodo-btn"> 
					<i class="fas fa-check"></i>
				</button>
			</div>
      
		</div>
    <hr>
		`
    );

    inputField.value = "";
  }

  let removeBtn = document.querySelector(".removeTodo-btn");
  let checkBtn = document.querySelector(".checkTodo-btn");
  let paragraph = document.querySelector(".todo-text");
  let container = document.querySelector(".toDo-container");

  removeBtn.addEventListener("click", () => {
	container.style.display = "none";
  });

  checkBtn.addEventListener("click", () => {
    paragraph.style.color = "#00ca00";
    checkBtn.style.display = "none";
  });
});
