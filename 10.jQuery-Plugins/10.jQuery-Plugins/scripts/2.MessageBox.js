/// <reference path="E:\Dropbox\Telerik Academy\5.JavaScript\2.JavaScript UI & DOM\2.Homework\10.jQuery-Plugins\10.jQuery-Plugins\libs/jquery-2.1.1.min.js" />

(function ($) {
    'use strict'

    $.fn.messageBox = function () {
        var $this = $(this),
            $span = $('<span />');

        $span
            .attr('id', 'msg-span')
            .css('border', '1px solid black');

        $span.text('Message:&#nbsp');

        $this.append($span);
    };
}(jQuery));

(function ($) {
    'use strict'

    $.fn.success = function (message) {
        var $this = $(this);

        var $msgBox = $this.find('#msg-span');

        $msgBox.text(message)
        .hide()
        .fadeIn(1000)
        // first way to hide
        .fadeOut(3000);
        // same as
        //.fadeIn(1000)
        //.fadeOut(3000);

        // second way to hide
        //setTimeout(function () {
        //    $msgBox.hide();
        //}, 3000);
    };
}(jQuery));

(function ($) {
    'use strict'

    $.fn.error = function (message) {
        var $this = $(this);

        var $msgBox = $this.find('#msg-span');

        $msgBox.text(message)
        .hide()
        .fadeIn(1000)
        // first way to hide
        //.fadeOut(3000);
        // same as
        //.fadeIn(1000)
        //.fadeOut(3000);

        // second way to hide
        setTimeout(function () {
            $msgBox.hide();
        }, 3000);
    };
}(jQuery));