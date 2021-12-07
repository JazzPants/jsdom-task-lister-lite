
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('submit-form-btn').addEventListener('click',
      (e) => {
      e.preventDefault(); 
      let newTaskDesc = document.getElementById("new-task-description").value;

      let newList = document.createElement("li");
      newList.innerHTML = newTaskDesc;


      let deleteButton = document.createElement("button")
      deleteButton.className = "deleteClass"
      deleteButton.innerHTML = " x";
      deleteButton.addEventListener("click", deleteList)

      newList.appendChild(deleteButton);
      document.getElementById("tasks").append(newList)

      function deleteList() {
        document.getElementById("tasks").removeChild(newList)
    return console.log("hello world")
  }
      })

      


      
 
  });

