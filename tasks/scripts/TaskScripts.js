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
        <p class = "vhtxt">${document.querySelector('.task_message').value}</p>
        <button class="remove_button"><i class="fa-solid fa-trash fa-xl"></i></button>`

        document.querySelector('.container_task').insertAdjacentElement('beforeend', userTaskAnswer);
        userTaskAnswer.querySelector('.fa-solid.fa-trash.fa-xl').addEventListener('click', (e)=>{removeTodo(e)})
        userTaskAnswer.querySelector('.vhtxt').addEventListener('click', (e) => {hiddenButton(e)})
        document.querySelector('.task_message').remove();

    }

});
    const hiddenButton = (e) => {
        e.target.classList.toggle('hdtext')
        e.target.parentElement.querySelector('.remove_button').classList.toggle('visible_button')
    };
    function removeTodo (event) {
        event.target.parentElement.parentElement.remove()
        // e.target.parentElement.remove()
    };

