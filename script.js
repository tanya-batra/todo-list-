const newTask = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

function addTask(){
  if(newTask.value === ''){
    alert("You must write something!..");
  }else{
    let listItem = document.createElement('li');
    listItem.innerHTML = newTask.value ;
    taskList.appendChild(listItem);
    const editButton = document.createElement('span');
    const deleteButton = document.createElement('button');
    editButton.innerText = '✎';
    deleteButton.innerText = '❌';
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
  }
  newTask.value = '';
  saveData();
}
 
taskList.addEventListener("click",function(e){
if(e.target.tagName === "LI"){
  e.target.classList.toggle("checked");
  saveData();
}else if(e.target.tagName === "BUTTON"){
e.target.parentElement.remove();
saveData();
}else if (e.target.tagName === "SPAN"){
  const listItem = e.target.parentElement;
    const newContent = prompt("Enter new content:", listItem.firstChild.textContent);
    if (newContent !== null) {
      listItem.firstChild.textContent = newContent;
      saveData();
}
}
},false);

function saveData(){
  localStorage.setItem("data",taskList.innerHTML);
}

function showlist(){
taskList.innerHTML = localStorage.getItem("data");
}
showlist();

 
  