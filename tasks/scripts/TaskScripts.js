let addTaskButton = document.querySelector('.add_task_button');
let removeButton = document.querySelector('.remove_button');

addTaskButton.addEventListener('click', ()=>{
    let userTask = document.createElement('textarea');
    userTask.classList.add('task_message');
    userTask.setAttribute('rows', '5');
    userTask.setAttribute('cols', '33');
    if(document.querySelectorAll('.task_message').length == 0) {
        document.querySelector('.container_task').insertAdjacentElement('beforeend', userTask);
    } else if(document.querySelectorAll('.task_message').length >= 1){
        let userTaskAnswer = document.createElement('p');
        userTaskAnswer.classList.add('user_task_answer');
        userTaskAnswer.innerHTML = document.querySelector('.task_message').value;
        document.querySelector('.container_task').insertAdjacentElement('beforeend', userTaskAnswer);
        document.querySelector('.task_message').remove();

        }

    });

removeButton.addEventListener('click', ()=>{;
    if(document.querySelectorAll('.user_task_answer').length >= 1 ){
        document.querySelector('.user_task_answer').remove();
    } else {
        return;
    }
})