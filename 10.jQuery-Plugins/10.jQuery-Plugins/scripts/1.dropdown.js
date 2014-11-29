/// <reference path="E:\Dropbox\Telerik Academy\5.JavaScript\2.JavaScript UI & DOM\2.Homework\10.jQuery-Plugins\10.jQuery-Plugins\libs/jquery-2.1.1.min.js" />

(function ($) {
    'use strict'

    // I'm not sure I understood the task
    $.fn.makeDropdownList = function () {
        var $this = $(this);
        $this.css('display', 'none');

        var $divContainer = $('<div />')
        .addClass('dropdown-list-container');

        var $ul = $('<ul />')
            .addClass('dropdown-list-options')
            .css('list-style-type', 'none');

        var $li = $('<li />')
            .addClass('dropdown-list-option')
            .css('width', '100px');

        var $options = $this.find('option');

        for (var i = 0, l = $options.length; i < l; i++) {
            var $currentOption = $($options[i]),
                $currentLi = $li.clone(true);

            $currentLi.css('display', 'none');

            // Set first item as selected
            if (i === 0) {
                setSelectedCssAndClass($currentLi);

                $currentOption.attr('selected', 'selected');
            }

            $currentLi.attr('data-value', i)
            .html($currentOption.html())
            .css('border', '1px solid black');

            $ul.append($currentLi);
        }

        $divContainer.append($ul);
        $this.after($divContainer);

        var isDivSlideDown = false;

        $divContainer.on('click', function (e) {
            var $that = $(e.target),
                $liOptions = $('.dropdown-list-option');

            $('.dropdown-list-option').on('mouseover', function () {
                $(this).css('background-color', 'red');
            });

            $('.dropdown-list-option').on('mouseout', function () {
                $(this).css('background-color', 'white');
            });

            if (isDivSlideDown === false) {
                $liOptions.css('display', 'block');
            }
            else {
                $liOptions.css('display', 'none');
                $('.selected').removeClass('selected');
                setSelectedCssAndClass($that);

                var curItemIndex = $that.attr('data-value');

                $this.find(':selected').removeAttr('selected');
                $($options[curItemIndex]).attr('selected', 'selected');

            }

            isDivSlideDown = !isDivSlideDown;
        });


        function setSelectedCssAndClass($selected) {
            $selected.addClass('selected')
                .css('display', 'block')
                //.css('border', '1px solid black');
        }
    };
}(jQuery));