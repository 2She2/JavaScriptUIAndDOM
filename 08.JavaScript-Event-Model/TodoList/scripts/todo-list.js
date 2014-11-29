// Create a TODO list with the following UI controls
//  Form input for new Item
//  Button for adding the new Item
//  Button for deleting some item
//  Show and Hide Button

window.onload = function () {
    'use strict'

    function attachEventListener(id, eventType, eventHandler) {
        document.getElementById(id).addEventListener(eventType, eventHandler);
    };

    attachEventListener('add-task', 'click', onAddTaskClick);
    attachEventListener('delete-task', 'click', onDeleteTaskClick);
    attachEventListener('hide-task', 'click', onHideTaskClick); 
    attachEventListener('show-all-tasks', 'click', onShowClick);

    var ul = document.createElement('ul'),
        taskNumberID = 0;

    ul.id = 'tasks';
    document.body.appendChild(ul);

    function onAddTaskClick() {
        var li = document.createElement('li'),
            taskText = document.getElementById('create-task').value,
            checkBox = document.createElement('input'),
            taskLabel = document.createElement('label'),
            dFrag = document.createDocumentFragment();

        li.style.listStyleType = 'none';

        checkBox.type = 'checkbox';
        checkBox.id = taskNumberID;

        taskLabel.innerHTML = taskText;
        taskLabel.setAttribute('for', checkBox.id);

        li.appendChild(checkBox);
        li.appendChild(taskLabel);
        dFrag.appendChild(li);

        document.getElementById('tasks').appendChild(dFrag);

        taskNumberID += 1;
    };

    function onDeleteTaskClick() {
        var checkboxes = getSelectedCheckboxes(),
            currentCheckbox,
            taskLabel,
            li,
            i,
            l;

        for (i = 0, l = checkboxes.length; i < l; i++) {
            currentCheckbox = checkboxes[i];

            taskLabel = getCheckboxLabel(currentCheckbox);

            li = taskLabel.parentNode;
            li.removeChild(currentCheckbox);
            li.removeChild(taskLabel);
            li.parentNode.removeChild(li);
        }
    };

    function onShowClick() {
        var checkboxes = getSelectedCheckboxes(),
            currentCheckbox,
            taskLabel,
            li,
            i,
            l;

        for (i = 0, l = checkboxes.length; i < l; i++) {
            currentCheckbox = checkboxes[i];

            li = currentCheckbox.parentNode;

            li.style.display = 'block';
        }
    };

    function onHideTaskClick() {
        var checkboxes = getSelectedCheckboxes(),
            currentCheckbox,
            taskLabel,
            li,
            i,
            l;

        for (i = 0, l = checkboxes.length; i < l; i++) {
            currentCheckbox = checkboxes[i];

            li = currentCheckbox.parentNode;
            li.style.display = 'none';
        }
    };

    function getCheckboxLabel(checkbox) {
        var label = document.querySelector('label[for="' + checkbox.id + '"]');

        return label;
    };

    function getSelectedCheckboxes() {
        var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

        return checkboxes;
    };
};
