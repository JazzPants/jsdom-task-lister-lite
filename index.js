document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("submit-form-btn").addEventListener("click", 
    (e) => {
        e.preventDefault();
    })
});







// document.addEventListener("DOMContentLoaded", () => {
//     document.getElementById('create-task-form').addEventListener('click',(e) => {
//         e.preventDefault(); {
//             let newTaskDesc = document.getElementById('new-task-description')

//             let newList = document.createElement('li');
        
//             newList.innerHTML = newTaskDesc;
        
//             document.getElementById('tasks').append(newList)
            
//         })
//     }
// });


// const input = document.getElementById('new-task-description');
// const submit = document.getElementById('submit-form-btn');
// // const delete = document.getElementById('delete-btn');

// //UL where we will add in LI elements
// const newTaskList = document.getElementById('tasks')


// const createNewTask = function(event) {
//     event.preventDefault();
    
//     const newTaskDescription = document.getElementById('new-task-description')
//     const newTask = document.createElement("li");
//     newTask.innerText = newTaskDescription.value;
//     appendNewTask(newTask);
//     // event.target.reset();
// };

// document.addEventListener("DOMContentLoaded", function() {
    
//     newTaskForm.addEventListener("submit", createNewTask ) 
//     //when a submit button is pressed or enter is pressed when editing a field
// });
