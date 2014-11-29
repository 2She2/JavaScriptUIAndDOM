/// <reference path="E:\Dropbox\Telerik Academy\5.JavaScript\2.JavaScript UI & DOM\2.Homework\09.jQuery-Overview\jQuery-Overview\jQuery-Overview\libs/jquery-2.1.1.min.js" />

// 2.Using jQuery implement functionality to insert a DOM element before or after another element

// As I understand the condishion, we have to insert element created with vanilla javascript
window.onload = function () {
    'use strict'

    var elementToInsertBeforeOrAfter = document.getElementById('some-element'),
        element = document.createElement('div');

    element.innerHTML = 'inserted element';
    
    insertElement(element, elementToInsertBeforeOrAfter, true);

    function insertElement(elementToInsert, sibling, isBefore) {
        if (isBefore === true) {
            $(sibling).before(elementToInsert);
        }
        else {
            $(sibling).after(elementToInsert);
        }
    }
}