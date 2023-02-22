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
       
        <input class = "vhtxt" type="text" readonly="true" value="${document.querySelector('.task_message').value}">
        <button class="remove_button"><i class="fa-solid fa-trash fa-xl"></i></button>
        <button class="edit_button"><i class="fa-solid fa-pen-to-square fa-xl"></i></button>
        <button class="complete_button"><i class="fa-solid fa-check fa-xl"></i></button>`


        document.querySelector('.container_task').insertAdjacentElement('beforeend', userTaskAnswer);

        userTaskAnswer.querySelector('.fa-solid.fa-trash.fa-xl').addEventListener('click', (e)=>{removeTodo(e)})
        userTaskAnswer.querySelector('.vhtxt').addEventListener('click', (e) => {hiddenButton(e)})
        userTaskAnswer.querySelector('.fa-solid.fa-pen-to-square').addEventListener('click', (e)=>{editBnt(e)})
        userTaskAnswer.querySelector('.fa-solid.fa-check.fa-xl').addEventListener('click', (e)=>{completeBtn(e)})
        document.querySelector('.task_message').remove();

    }

});
    const hiddenButton = (e) => {
        if (e.target.readOnly === true) {
            e.target.classList.toggle('hdtext');
            e.target.parentElement.querySelector('.remove_button').classList.toggle('visible_button');
            e.target.parentElement.querySelector('.edit_button').classList.toggle('edit_button--close');
        };

    };
    function removeTodo (event) {
        event.target.parentElement.parentElement.remove()
        // e.target.parentElement.remove()
    };

    function editBnt (e) {
        e.target.parentElement.parentElement.querySelector('.vhtxt').readOnly = !e.target.parentElement.parentElement.querySelector('.vhtxt').readOnly;
        e.target.parentElement.classList.toggle('edit_button--close');
        e.target.parentElement.parentElement.querySelector('.complete_button').classList.toggle('complete_button--visible');
    };

    let completeBtn = (e) => {
        e.target.parentElement.parentElement.querySelector('.vhtxt').readOnly = true;
        e.target.parentElement.parentElement.querySelector('.edit_button').classList.toggle('edit_button--close');
        e.target.parentElement.classList.toggle('complete_button--visible');
    };
