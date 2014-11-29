// 2.Write a script that creates 5 div elements and moves them in circular path with interval of 100 milliseconds

window.onload = function () {
    var button = document.getElementById('moveDivs'),
        DIVS_COUNT = 5,
        dFrag = document.createDocumentFragment(),
        createdDivs = [],
        WINDOW_CENTER = {
            // decrease the width and height, because divs go out of the window
            x: (window.innerWidth - 300) / 2 | 0,
            y: (window.innerHeight - 100) / 2 | 0
        },
        ROTATION_SPEED = 0.2,
        MOVEMENT_INTERVAL = 100;

    createDivs(DIVS_COUNT, createdDivs, dFrag, WINDOW_CENTER);
    document.body.appendChild(dFrag);

    setRadiusAndAngleProperties(createdDivs, WINDOW_CENTER);

    window.setInterval(moveDivs, MOVEMENT_INTERVAL);

    //Formula for calculatin the circular trajectory is:
    //  x = cx + Math.sin(angle) * radius;
    //  y = cy + Math.cos(angle) * radius;
    function moveDivs() {
        for (var i = 0; i < DIVS_COUNT; i++) {
            var currentDiv = createdDivs[i],
                left,
                top,
                cos = Math.cos(currentDiv['angle']),
                sin = Math.sin(currentDiv['angle']);

            left = (WINDOW_CENTER.x + currentDiv['radius'] * cos) + 'px';
            top = (WINDOW_CENTER.y + currentDiv['radius'] * sin) + 'px';

            // increment the angle to make the movement
            currentDiv['angle'] += ROTATION_SPEED;
            currentDiv.style.left = left;
            currentDiv.style.top = top;
        }
    }

    // for each div set position 'absolute' and random top, left
    function createDivs(divsCount, createdDivs, dFrag, center) {
        var div = document.createElement('div'),
            currentDiv,
            i;

        for (i = 0; i < divsCount; i++) {
            currentDiv = div.cloneNode(true);
            currentDiv.id = 'div' + i;
            currentDiv.style.position = 'absolute';
            currentDiv.style.top = getRandomNumber(0, center.y) + 'px';
            currentDiv.style.left = getRandomNumber(0, center.x) + 'px';
            currentDiv.style.backgroundColor = 'rgb(' + getRandomNumber(0, 255) + ',' + getRandomNumber(0, 255) + ',' + getRandomNumber(0, 255) + ')';
            currentDiv.innerHTML = 'div' + i;

            createdDivs[i] = currentDiv;
            dFrag.appendChild(currentDiv);
        }
    }

    // add these properties to the current div, so we can calculate its rotation trajectory
    function setRadiusAndAngleProperties(divs, center) {
        for (var i = 0, l = divs.length; i < l; i++) {
            var currentDiv = divs[i],
                currentElementLeft = parseInt(currentDiv.style.left),
                currentElementTop = parseInt(currentDiv.style.top),
                currentRadius;

            currentRadius = calcRadius(currentElementLeft, currentElementTop, center);
            
            currentDiv['radius'] = currentRadius;
            currentDiv['angle'] = getRandomNumber(0, 100);
        }
    }

    function calcRadius(x, y, center) {
        var radiusSquare = (center.x - x) * (center.x - x) + (center.y - y) * (center.y - y),
            radius = Math.sqrt(radiusSquare) | 0;

        return radius;
    }

    function getRandomNumber(min, max) {
        var randomNumber = Math.random() * (max - min) + min | 0;

        return randomNumber;
    }
}