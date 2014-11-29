// 2.Create a function that gets the value of <input type="text"> ands prints its value to the console

function getValueOfInputText() {
    var allInputTags = document.getElementsByTagName('input'),
        currInput,
        WANTED_TYPE = 'text';

    for (var i = 0, l = allInputTags.length; i < l; i++) {
        currInput = allInputTags[i];

        if (currInput.type == WANTED_TYPE) {
            console.log(currInput.value);
        }
    }

    //// Different ways to display the input's value
    //var inputTextValue = document.querySelector('input[type="text"]').value;
    //var inputTextValue = document.getElementById('input').value;
    //console.log(inputTextValue);
}