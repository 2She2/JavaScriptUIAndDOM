/// <reference path="E:\Dropbox\Telerik Academy\5.JavaScript\2.JavaScript UI & DOM\2.Homework\09.jQuery-Overview\jQuery-Overview\jQuery-Overview\libs/jquery-2.1.1.min.js" />

// 1.Create a slider control using jQuery
//   The slider can have many slides
//   Only one slide is visible at a time
//   Each slide contains HTML code
//   i.e. it can contain images, forms, divs, headers, links, etc…
//   Implement functionality for changing the visible slide after 5 seconds
//   Create buttons for next and previous slide

window.onload = function () {
    var slides = [
        // It is not necessary to be a object, but if we want to extend its functionality, this way will be better
        { content: $('<img />').attr('src', 'images/telerik-softwate-academy-program.png') },
        { content: $('<p />').html('Some interesting text') },
        { content: $('<a />').html('telerik').attr('href', 'https://telerikacademy.com/') },
        { content: $('<h1 />').html('Header text') },
        { content: $('<img />').attr('src', 'images/Cool.jpg') }
    ],
        currentSlideIndex = 0,
        // This is needed so we can stop auto change slides
        interval,
        INTERVAL_DURATION = 1000,
        // Needed buttons to move trough the slides
        $prevButton = $('<button />')
            .html('previous')
            .css('margin-left', '300px')
            .css('margin-bottom', '50px'),
        $nextButton = $('<button />')
            .html('next'),
        $autoChange = $('<button />')
            .html('auto change'),
        $stopAutoChange = $('<button />')
            .html('stop auto change'),
        $container = $('#container');

    $container.before($prevButton);
    $container.before($nextButton);
    $container.before($autoChange);
    $container.before($stopAutoChange);

    $container.append(slides[0].content);

    $prevButton.on('click', onPrevButtonClick);
    $nextButton.on('click', onNextButtonClick);
    $autoChange.on('click', onAutoChangeClick);
    $stopAutoChange.on('click', onStopAutoChangeClick);

    function onPrevButtonClick(ev) {
        currentSlideIndex -= 1;
        currentSlideIndex = checkSlideIndex(currentSlideIndex, slides);

        // We need to clear the current displayed slide
        $('#container').empty();
        $container.append(slides[currentSlideIndex].content);
    }

    function onNextButtonClick() {
        currentSlideIndex += 1;
        currentSlideIndex = checkSlideIndex(currentSlideIndex, slides);

        // We need to clear the current displayed slide
        $('#container').empty();
        $container.append(slides[currentSlideIndex].content);
    }

    function onAutoChangeClick() {
        interval = setInterval(onNextButtonClick, INTERVAL_DURATION);
    }

    function onStopAutoChangeClick() {
        clearInterval(interval);
    }

    // Correct index if it gets less tha0 or greater than slides count
    function checkSlideIndex(slideIndex, slides) {
        var index = slideIndex;

        if (index >= slides.length) {
            index = 0;
        }
        else if (index < 0) {
            index = slides.length - 1;
        }

        return index;
    }
}
