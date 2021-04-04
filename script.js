// const button = document.querySelector('button');

// button.addEventListener('click', event => {
//     button.textContent = `Click count: ${event.detail}`;
// });

// document.querySelector("button").onclick = function(event) { … }.

console.clear();

//Document is the DOM can be accessed in the console with document.window.
// Tree is from the top, html, body, p etc.

//Solution: Add interactivity so the user can manage daily tasks.
//Break things down into smaller steps and take each step at a time.

//Event handling, interaction is what starts the code execution.
var newTaskInput = document.getElementById("new-task"); //Add a new task.
var addButton = document.getElementById("addButton"); //add button
var taskHolder = document.getElementById("todo-list"); //ul of #todo-list
var deleteAllButton = document.getElementById("delete-all"); //ul of #todo-list

//New task list item
var createNewTask = function(newTask) {
    var listItem = document.createElement("li");
    //input (text)
    var editInput = document.createElement("input"); //text
    //button.edit
    var editButton = document.createElement("button"); //edit button
    //button.delete
    var deleteButton = document.createElement("button"); //delete button

    //Set the click handler to the deleteTask function.
    deleteButton.onclick = deleteTask;
    // deleteButton.addEventListener("click", deleteTask);

    // editInput.innerText = newTask;
    // grab the input value
    editInput.value = newTask;

    //Each elements, needs type, class, labelling
    editInput.type = "text";
    editInput.className = "todo-item";

    editButton.innerText = "Edit"; //innerText encodes special characters, HTML does not.
    editButton.className = "editButton";
    deleteButton.innerText = "Delete";
    deleteButton.className = "deleteButton";

    //and appending to the DOM - list
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    // console.log(listItem)

    return listItem;
}

// show/display task
var addTask = function() {
    console.log("Add Task...");

    //Create a new list item with the text from the #new-task:
    var listItem = createNewTask(newTaskInput.value);
    console.log(listItem)
        //Append listItem to taskHolder ??
    taskHolder.appendChild(listItem);
    // bindTaskEvents(listItem, taskCompleted);

    // clear input box
    newTaskInput.value = '';
}

//Delete all tasks.
var deleteAll = function() {
    console.log("Delete All...");

    // remove all children from an element:
    while (taskHolder.firstChild) {
        taskHolder.removeChild(taskHolder.firstChild);
    }
}

//Delete  task.
var deleteTask = function() {
    console.log("Delete task...");

    // let d = document.getElementById("top");
    // find or assign id to newly created items/tasks
    // let d_nested = document.getElementById("nested");
    // let throwawayNode = taskHolder.removeChild(d_nested);

    // let throwawayNode = taskHolder.removeChild(deleteButton);

    // if (node.parentNode) {
    //     node.parentNode.removeChild(node);
    // }

    // var listItem = this.parentNode;
    // var ul = listItem.parentNode;
    // //Remove the parent list item from the ul.
    // ul.removeChild(listItem);

}

//Set the click handler to the addTask function.
// addButton.onclick = addTask;
// addButton.addEventListener("click", addTask);

//Edit an existing task.

// var editTask=function(){
// console.log("Edit Task...");
// console.log("Change 'edit' to 'save'");


// var listItem=this.parentNode;

// var editInput=listItem.querySelector('input[type=text]');
// var label=listItem.querySelector("label");
// var containsClass=listItem.classList.contains("editMode");
// 		//If class of the parent is .editmode
// 		if(containsClass){

// 		//switch to .editmode
// 		//label becomes the inputs value.
// 			label.innerText=editInput.value;
// 		}else{
// 			editInput.value=label.innerText;
// 		}

// 		//toggle .editmode on the parent.
// 		listItem.classList.toggle("editMode");
// }







// //Mark task completed
// var taskCompleted=function(){
// 		console.log("Complete Task...");

// 	//Append the task list item to the #completed-tasks
// 	var listItem=this.parentNode;
// 	completedTasksHolder.appendChild(listItem);
// 				bindTaskEvents(listItem, taskIncomplete);

// }


// var taskIncomplete=function(){
// 		console.log("Incomplete Task...");
// //Mark task as incomplete.
// 	//When the checkbox is unchecked
// 		//Append the task list item to the #incomplete-tasks.
// 		var listItem=this.parentNode;
// 	incompleteTaskHolder.appendChild(listItem);
// 			bindTaskEvents(listItem,taskCompleted);
// }



// var ajaxRequest=function(){
// 	console.log("AJAX Request");
// }

//The glue to hold it all together.


// //Set the click handler to the addTask function.
// addButton.onclick=addTask;
// addButton.addEventListener("click",addTask);
// addButton.addEventListener("click",ajaxRequest);


// var bindTaskEvents=function(taskListItem,checkBoxEventHandler){
// 	console.log("bind list item events");
// //select ListItems children
// 	var checkBox=taskListItem.querySelector("input[type=checkbox]");
// 	var editButton=taskListItem.querySelector("button.edit");
// 	var deleteButton=taskListItem.querySelector("button.delete");


// 			//Bind editTask to edit button.
// 			editButton.onclick=editTask;
// 			//Bind deleteTask to delete button.
// 			deleteButton.onclick=deleteTask;
// 			//Bind taskCompleted to checkBoxEventHandler.
// 			checkBox.onchange=checkBoxEventHandler;
// }

// //cycle over incompleteTaskHolder ul list items
// 	//for each list item
// 	for (var i=0; i<incompleteTaskHolder.children.length;i++){

// 		//bind events to list items chldren(tasksCompleted)
// 		bindTaskEvents(incompleteTaskHolder.children[i],taskCompleted);
// 	}




// //cycle over completedTasksHolder ul list items
// 	for (var i=0; i<completedTasksHolder.children.length;i++){
// 	//bind events to list items chldren(tasksIncompleted)
// 		bindTaskEvents(completedTasksHolder.children[i],taskIncomplete);
// 	}




// Issues with usabiliy don't get seen until they are in front of a human tester.

//prevent creation of empty tasks.

//Shange edit to save when you are in edit mode.



/*

// Javascript was initially used, but wasn't really necessary. Javascript droppped, but left here for archival purposes.

var todos = [ ...document.querySelectorAll('.todo') ].forEach(activateTodo);

function togglePath(path, toggle, offset = 0){
  var length = offsetPath(path, offset);

  function updatePath(toggle){
    return path.style.strokeDashoffset = ( toggle ? -offset : length );
  }

  updatePath(toggle);
  return updatePath;
}

function activateTodo(todo, i){
  
  todo.insertAdjacentHTML('afterbegin', todoTemplate(i));
  
  var line = todo.querySelector('.todo__line'),
      updateLine = togglePath(line, false, 4);

  var box = todo.querySelector('.todo__box'),
      updateBox = togglePath(box, true);

  var check = todo.querySelector('.todo__check'),
      updateCheck = togglePath(check);

  var toggle = false;

  todo.addEventListener('click', function(){
    toggle = !toggle;
    updateLine(toggle);
    updateBox(!toggle);
    updateCheck(toggle);
    if ( todo.classList ) { todo.classList[ toggle ? 'add' : 'remove' ]('todo--checked'); }
  });
  
}

*/