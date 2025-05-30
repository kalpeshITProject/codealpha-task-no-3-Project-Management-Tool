// Simple login logic (for demo)
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    // Add real authentication in production
    window.location.href = 'dashboard.html';
  });
  
  // Task management logic
  let tasks = [];
  function renderTasks() {
    const taskListView = document.getElementById('taskListView');
    taskListView.innerHTML = tasks.map((task, i) =>
      `<div class="task">
        <h3>${task.title}</h3>
        <p>${task.description}</p>
        <button onclick="deleteTask(${i})">Delete</button>
      </div>`
    ).join('');
  }
  function addTask(title, description) {
    tasks.push({ title, description });
    renderTasks();
  }
  function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
  }
  document.getElementById('addTaskBtn')?.addEventListener('click', () => {
    const title = prompt('Task Title:');
    const description = prompt('Task Description:');
    if (title && description) addTask(title, description);
  });
  window.renderTasks = renderTasks;
  window.deleteTask = deleteTask;
