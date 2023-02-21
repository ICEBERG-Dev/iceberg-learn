let addTaskButton = document.querySelector('.add_task_button');
let removeButton = document.querySelector('.remove_button');

addTaskButton.addEventListener('click', () => {
    let userTask = document.createElement('textarea');
    userTask.classList.add('task_message');
    userTask.setAttribute('rows', '5');
    userTask.setAttribute('cols', '33');
    if (document.querySelectorAll('.task_message').length == 0) {
        document.querySelector('.container_task').insertAdjacentElement('beforeend', userTask);
    } else if (document.querySelectorAll('.task_message').length >= 1) {
        if (document.querySelector('.task_message').value == '') {
            alert('Пустые данные')
            return
        }
        let userTaskAnswer = document.createElement('div');
        userTaskAnswer.classList.add('user_task_answer');
        userTaskAnswer.innerHTML = `
        <p>${document.querySelector('.task_message').value}</p>
        <button class="remove_button"><i class="fa-solid fa-trash fa-xl"></i></button>`

        document.querySelector('.container_task').insertAdjacentElement('beforeend', userTaskAnswer);
        document.querySelector('.task_message').remove();

    }

});

