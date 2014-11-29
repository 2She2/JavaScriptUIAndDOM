// 3.Create a text area and two inputs with type="color"
//      Make the font color of the text area as the value of the first color input
//      Make the background color of the text area as the value of the second input


// Choose colors and click on the text area to see the result!
window.onload = function () {
    var dFrag = document.createDocumentFragment(),
        firstInput = document.createElement('input'),
        secondInput = document.createElement('input'),
        textArea = document.createElement('textarea');

    firstInput.type = 'color';
    secondInput.type = 'color';

    dFrag.appendChild(firstInput);
    dFrag.appendChild(secondInput);
    dFrag.appendChild(textArea);

    document.body.appendChild(dFrag);

    // When you click on the text area the color are changed
    textArea.addEventListener('click', function () {
        textArea.style.color = firstInput.value;
        textArea.style.backgroundColor = secondInput.value;
    });
}