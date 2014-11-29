/// <reference path="E:\Dropbox\Telerik Academy\5.JavaScript\2.JavaScript UI & DOM\2.Homework\09.jQuery-Overview\jQuery-Overview\jQuery-Overview\libs/jquery-2.1.1.min.js" />

// 3.By given an array of students, generate a table that represents these students
//   Each student has first name,last name and grade
//   Use jQuery

window.onload = function () {
    var students = [
        generateStudent('Pesho', 'Peshev', 6),
        generateStudent('Gosho', 'Goshev', 4),
        generateStudent('Sasho', 'Sashev', 5)
    ];

    generateTable(students);

    function generateTable(students) {
        var $table = $('<table />'),
            $thead = $('<thead />'),
            $tbody = $('<tbody />'),
            $th,
            i, l;

        $th = $('<tr />')
            .append($('<th />').html('First name'))
            .append($('<th />').html('Last name'))
            .append($('<th />').html('Grade')),

        $thead.append($th)
        $table.append($thead);

        for (var i = 0, l = students.length; i < l; i++) {
            var $tr = $('<tr />')
                .append($('<td />').html(students[i].firstName))
                .append($('<td />').html(students[i].lastName))
                .append($('<td />').html(students[i].grade));

            $tbody.append($tr);
        }

        $table.append($tbody);
        $('body').append($table);

        $('table').css('border-collapse', 'collapse');
        $('th, td').css('padding-left', '5px');
        $('th, td').css('padding-right', '5px');
        $('table, th, td').css('border', '1px solid black');
    }

    function generateStudent(firstName, lastName, grade) {
        return {
            firstName: firstName,
            lastName: lastName,
            grade: grade
        }
    }
}