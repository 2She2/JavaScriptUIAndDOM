(function ($) {
    $.fn.listview = function (collection) {
        'use strict'

        var $this = $(this);

        var booksTemplateHtml = '{{#each collection}}';

        booksTemplateHtml += $this.html();
        booksTemplateHtml += '{{/each}}';

        var booksTemplate = Handlebars.compile(booksTemplateHtml);

        $this.html(booksTemplate({ collection: collection }));
    };
}(jQuery));

var books = [
    {
        id: 1,
        title: 'Blink: The Power of Thinking Without Thinking'
    }, {
        id: 2,
        title: 'Outliers: The Story of Success'
    }, {
        id: 3,
        title: 'Freakonomics: A Rogue Economist Explores the Hidden Side of Everything'
    }, {
        id: 4,
        title: 'The Tipping Point: How Little Things Can Make a Big Difference'
    }
];

var students = [
    {
        number: 10987,
        name: 'Pesho Peshev',
        mark: 4
    }, {
        number: 10123,
        name: 'Gosho Goshev',
        mark: 5
    }, {
        number: 10654,
        name: 'Sasho Sashev',
        mark: 3
    }, {
        number: 10915,
        name: 'Marinka Marinkina',
        mark: 6
    },
];

$('#books-list').listview(books);

$('#students-table').listview(students);