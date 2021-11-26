
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('submit-form-btn').addEventListener('click',
      (e) => {
      e.preventDefault(); 
      let newTaskDesc = document.getElementById("new-task-description").value;

      let newList = document.createElement("li");

      newList.innerHTML = newTaskDesc;

      document.getElementById("tasks").append(newList)
      })
  });
