// 1. Write a script that creates a number of div elements. Each div element must have the following
//      Random width and height between 20px and 100px
//      Random background color
//      Random font color
//      Random position on the screen (position:absolute)
//      A strong element with text "div" inside the div
//      Random border radius
//      Random border color
//      Random border width between 1px and 20px

window.onload = function () {
    var button = document.getElementById('createDivs');

    button.addEventListener('click', onButtonClick);

    function onButtonClick() {
        var divsCount = document.getElementById('divElementsCount'),
            dFrag = document.createDocumentFragment();

        divsCount = parseInt(divsCount.value);
        if (divsCount < 1) {
            alert('Enter positive integer number');
        }

        createDivs(dFrag, divsCount);
        document.body.appendChild(dFrag);

        function createDivs(dFrag, divsCount) {
            var div = document.createElement('div'),
                strong = document.createElement('strong'),
                i,
                currentDiv,
                width = window.innerWidth,
                height = window.innerHeight;

            strong.innerHTML = 'div';

            for (i = 0; i < divsCount; i += 1) {
                currentDiv = div.cloneNode(true);

                currentDiv.style.width = getRandomNumber(20, 100) + 'px';
                currentDiv.style.height = getRandomNumber(20, 100) + 'px';
                currentDiv.style.backgroundColor = 'rgb(' + getRandomNumber(0, 255) + ',' + getRandomNumber(0, 255) + ',' + getRandomNumber(0, 255) + ')';
                currentDiv.style.fontColor = 'rgb(' + getRandomNumber(0, 255) + ',' + getRandomNumber(0, 255) + ',' + getRandomNumber(0, 255) + ')';
                currentDiv.style.position = 'absolute';
                currentDiv.style.top = getRandomNumber(0, height) + 'px';
                currentDiv.style.left = getRandomNumber(0, width) + 'px';
                currentDiv.appendChild(strong.cloneNode(true));
                currentDiv.style.borderWidth = getRandomNumber(1, 20) + 'px';
                currentDiv.style.borderStyle = 'solid';
                currentDiv.style.borderColor = 'rgb(' + getRandomNumber(0, 255) + ',' + getRandomNumber(0, 255) + ',' + getRandomNumber(0, 255) + ')';
                currentDiv.style.borderRadius = getRandomNumber(0, currentDiv.offsetWidth) + 'px';

                dFrag.appendChild(currentDiv);
            }
        }

        function getRandomNumber(min, max) {
            var randomNumber = Math.random() * (max - min) + min | 0;

            return randomNumber;
        }
    }
}