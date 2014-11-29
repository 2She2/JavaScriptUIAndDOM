// 3.Crеate a function that gets the value of <input type="color"> and sets the background of the body to this value

function getValueOfInputColor() {
    var inputColorValue = document.getElementById('input').value;

    console.log(inputColorValue);

    document.body.style.backgroundColor = inputColorValue;
}