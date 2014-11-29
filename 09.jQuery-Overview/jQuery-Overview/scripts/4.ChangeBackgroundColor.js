/// <reference path="E:\Dropbox\Telerik Academy\5.JavaScript\2.JavaScript UI & DOM\2.Homework\09.jQuery-Overview\jQuery-Overview\jQuery-Overview\libs/jquery-2.1.1.min.js" />

// 4. Implement functionality to change the background color of a web page
//    i.e. select a color from a color picker and set this color as the background color of the page

// This is the easyest task ever :)
window.onload = function () {
    'use strict'

    var $color = $('input');

    $color.change(function () {
        $('body')
        .css('background-color', $color.val());
    });
    
}