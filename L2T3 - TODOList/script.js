const taskTitle = document.getElementById("title");
const taskDescription = document.getElementById("description");
const addTaskBtn = document.getElementById("add-btn");
const taskUList = document.getElementById("task-list");
addTaskBtn.addEventListener("click",() =>{
    const newItem = document.createElement('li');
    newItem.classList.add('flex-item');
    var span1 = document.createElement('span');
    span1.textContent = taskTitle.value;

    var span2 = document.createElement('span');
    span2.textContent = taskDescription.value;

    const btn = document.createElement('button');
    btn.textContent = 'Done ?';
    btn.classList.add('delete-btn');

    var span3 = document.createElement('span');
    span3.appendChild(btn);

    newItem.appendChild(span1);
    newItem.appendChild(span2);
    newItem.appendChild(span3);
    taskUList.appendChild(newItem);
});
var deleteButtons = document.querySelectorAll('.delete-btn');
deleteButtons.forEach(button => button.addEventListener('click',() => {
    // console.log(1);
    // Get the parent list item
    var listItem = button.parentNode.parentNode;
    // Remove the list item
    listItem.remove();
    // listItem.style.display = none;
}
));