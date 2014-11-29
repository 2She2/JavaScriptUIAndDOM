/// <reference path="E:\Dropbox\Telerik Academy\5.JavaScript\2.JavaScript UI & DOM\2.Homework\09.jQuery-Overview\jQuery-Overview\libs/jquery-2.1.1.min.js" />

// 5.*Implement a GridView control
//      Rows can be added dynamically
//      A header row can be added dynamically
//      Each GridView can have at most one header row
//      Each row can have  a nested GridView
//      Each GridView can have at most one nested GridView

function addTable(container, rows, cols, text, id) {
    'use strict'

    var $table = $('<table />'),
        $tbody = $('<tbody />');

    $table.attr('id', id);


    addRows($tbody, rows, cols, text);

    $table.append($tbody);
    container.append($table);
};

function addHeader(container, cols, text, id) {
    var $cont = $(container);

    // check for "Each GridView can have at most one header row"
    if ($cont.find('> thead').length > 0) {
        return;
    }

    var $thead = $('<thead />'),
        $tr = $('<tr />'),
        $th = $('<th />'),
        $curTh,
        i;

    if (id) {
        $thead.attr('id', id);
    }

    for (i = 0; i < cols; i++) {
        $curTh = $th.clone();

        // only if we have text, we add it
        if (text) {
            $curTh.text(text[i]);
        }

        $tr.append($curTh);
    }

    $thead.append($tr);
    container.prepend($thead);
}

function addRows(container, rows, cols, text) {
    'use strict'

    var $tr = $('<tr />'),
        $td = $('<td />'),
        i, j,
        $curTr,
        $curTd,
        textIndexCounter = 0;

    var $dFrag = $(document.createDocumentFragment());

    for (i = 0; i < rows; i++) {
        $curTr = $tr.clone(false);

        for (j = 0; j < cols; j++) {
            $curTd = $td.clone(false);

            // only if we have text, we add it
            if (text) {
                $curTd.text(text[textIndexCounter]);
            }

            $curTr.append($curTd);

            textIndexCounter += 1;
        }

        $dFrag.append($curTr);
    }

    container.append($dFrag);
};