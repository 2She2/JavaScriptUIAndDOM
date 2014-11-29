drawingGraphics();

function drawingGraphics() {
    var canvas = document.getElementById('the-canvas'),
        context = canvas.getContext('2d');

    context.lineWidth = 2.5;
    context.fillStyle = '#975B5B';

    // roof
    context.beginPath();
    context.moveTo(11, 172);
    context.lineTo(300, 172);
    context.lineTo(155, 11);
    context.lineJoin = 'bevel';
    context.lineTo(11, 172);
    context.fill();
    context.stroke();
    context.closePath();
    
    // chimney
    context.beginPath();
    context.fillRect(212.5, 53, 31, 73);
    context.moveTo(212, 52);
    context.lineTo(212, 131);
    context.stroke();
    drawOval(228, 169, 16, 0, 2 * Math.PI, 1, 0.3, false);
    context.lineTo(244, 131)
    context.stroke();

    context.beginPath();
    context.fillRect(11, 172, 289, 215);
    context.strokeRect(11, 172, 289, 215);

    // windows
    context.fillStyle = '#000';
    context.fillRect(32, 198, 50, 32);
    context.fillRect(85, 198, 50, 32);
    context.fillRect(32, 233, 50, 32);
    context.fillRect(85, 233, 50, 32);

    context.fillRect(173, 196, 49, 32);
    context.fillRect(225, 196, 49, 32);
    context.fillRect(173, 230, 49, 32);
    context.fillRect(225, 230, 49, 32);

    context.fillRect(173, 288, 49, 32);
    context.fillRect(225, 288, 49, 32);
    context.fillRect(173, 323, 49, 32);
    context.fillRect(225, 323, 49, 32);

    // door
    drawOval(84, 624, 40, Math.PI, 2 * Math.PI, 1, 0.5, true);
    context.lineTo(124, 386.5);
    context.stroke();

    context.moveTo(44, 386.5);
    context.lineTo(44, 310);
    context.stroke();

    context.moveTo(84, 291);
    context.lineTo(84, 387);
    context.stroke();

    // door hands
    drawOval(72, 357.5, 5, 0, 2 * Math.PI, 1, 1, true);
    drawOval(95, 357.5, 5, 0, 2 * Math.PI, 1, 1, true);


    function drawOval(x, y, r, from, to, xScale, yScale, isStroke) {
        context.save();
        context.beginPath();
        context.scale(xScale, yScale);
        context.arc(x, y, r, from, to);
        context.restore();

        if (isStroke === true) {
            context.stroke();
        }
        else {
            context.fill();
        }
    }
}