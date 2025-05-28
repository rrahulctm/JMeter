document.getElementById('addTaskBtn').addEventListener('click', function() {
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    let li = document.createElement('li');
    li.innerHTML = `${taskText} <button class="deleteBtn">Delete</button>`;
    
    document.getElementById('taskList').appendChild(li);

    // Add event listener to delete button
    li.querySelector('.deleteBtn').addEventListener('click', function() {
        li.remove();
    });

    taskInput.value = ''; // Clear input field
});