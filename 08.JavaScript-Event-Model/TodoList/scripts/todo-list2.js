window.onload = function () {
    'use strict'

    // Store hidden elements. We delete the hidden elements and add them here, so we can 'show them later'
    var hiddenElements = [];

    function attachEventListener(id, event, eventHandler) {
        document.getElementById(id).addEventListener(event, eventHandler);
    };

    attachEventListener('add-task', 'click', onAddTaskClick);
    attachEventListener('delete-task', 'click', onDeleteClick);
    attachEventListener('show-all-tasks', 'click', onShowClick);
    attachEventListener('hide-task', 'click', onHideClick);

    function onAddTaskClick() {
        var tasks = document.getElementById('tasks'),
            taskText = document.getElementById('create-task').value,
            task = document.createElement('option');
            
        task.innerHTML = taskText;
        tasks.add(task);
    };

    function onDeleteClick() {
        var tasks = document.getElementById('tasks'),
            selectedTasks = getAllSelectedTasksIndexes('tasks'),
            i,
            l = selectedTasks.length;
            
        for (i = 0; i < l; i++) {
            tasks.remove(selectedTasks[i]);
        }
    };

    // The removed(hidden) options have to be added again
    // They will not be in the same places
    function onShowClick() {
        var tasks = document.getElementById('tasks'),
            i,
            l = hiddenElements.length;

        for (i = 0; i < l; i++) {
            tasks.add(hiddenElements[i]);
        }

        // clear all elements in the array
        hiddenElements = [];
    };

    // It is not possible ti hide option in select
    // We have to remove them
    function onHideClick() {
        var tasks = document.getElementById('tasks'),
            selectedTasks = getAllSelectedTasksIndexes('tasks'),
            i,
            l = selectedTasks.length;

        for (i = 0; i < l; i++) {
            hiddenElements.unshift(tasks[selectedTasks[i]]);
            tasks.remove(selectedTasks[i]);
        }
    };

    function getAllSelectedTasksIndexes(taskListId) {
        var taskList = document.getElementById(taskListId),
            tasks = taskList.options,
            selectedTasks = [],
            currentTask,
            i,
            l = tasks.length;

        for (i = 0; i < l; i++) {
            currentTask = tasks[i];

            if (currentTask.selected) {
                // It is important to be 'unshift', i.e to remove elements from last index to the first
                // Else the indexes are being reordered
                selectedTasks.unshift(i);
            }
        }

        return selectedTasks;
    };
};