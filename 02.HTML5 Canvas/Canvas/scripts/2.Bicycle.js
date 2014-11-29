drawingGraphics();

function drawingGraphics() {
    var canvas = document.getElementById('the-canvas'),
        context = canvas.getContext('2d');

    context.lineWidth = 2;
    context.strokeStyle = '#398B9F';
    context.fillStyle = '#90CAD7';

    // wheels
    drawOval(72, 169, 59, 0, 2 * Math.PI, false);
    drawOval(72, 169, 59, 0, 2 * Math.PI, true);

    drawOval(296, 169, 59, 0, 2 * Math.PI, false);
    drawOval(296, 169, 59, 0, 2 * Math.PI, true);

    // frame
    context.lineJoin = 'bevel';
    context.moveTo(68, 168);
    context.lineTo(138, 92);
    context.lineTo(283, 92);
    context.lineTo(172, 163);
    context.closePath();
    context.stroke();

    // seat
    context.moveTo(97, 64);
    context.lineTo(145, 64);
    context.stroke();

    //  pedals
    context.moveTo(122, 64);
    context.lineTo(171, 163);
    context.stroke();
    drawOval(171, 163, 15, 0, 2 * Math.PI, true);

    context.moveTo(160, 152);
    context.lineTo(148, 138);
    context.stroke();

    context.moveTo(180, 175);
    context.lineTo(192, 188);
    context.stroke();

    // steering wheel
    context.moveTo(230, 63);
    context.lineTo(276, 48);
    context.lineTo(306, 12);
    context.stroke();

    context.moveTo(276, 48);
    context.lineTo(295, 162);
    context.stroke();

    function drawOval(x, y, r, from, to, isStroke) {
        context.beginPath();
        context.arc(x, y, r, from, to);

        if (isStroke === true) {
            context.stroke();
        }
        else {
            context.fill();
        }
    }
}