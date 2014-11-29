drawGraphics();

function drawGraphics() {
    var canvas = document.getElementById('the-canvas'),
        ctx = canvas.getContext('2d');

    drawHead();
    drawHat();

    function drawHead() {
        ctx.fillStyle = '#90cad7';
        ctx.strokeStyle = '#22545f';
        ctx.lineWidth = 2;

        // head
        drawOval(96, 190, 72, 0, 2 * Math.PI, 1, 0.9, false);
        drawOval(96, 190, 72, 0, 2 * Math.PI, 1, 0.9, true);
        
        // eyes
        drawOval(52, 213, 12, 0, 2 * Math.PI, 1, 0.7, true);
        ctx.fillStyle = '#22545f';
        drawOval(95, 149, 7, 0, 2 * Math.PI, 0.5, 1, false);

        drawOval(108, 213, 12, 0, 2 * Math.PI, 1, 0.7, true);
        drawOval(205, 149, 7, 0, 2 * Math.PI, 0.5, 1, false);

        // mouth
        ctx.save();
        ctx.rotate(Math.PI / 18);
        drawOval(115, 627, 28, 0, 2 * Math.PI, 1, 0.3, true)
        ctx.restore();

        // nose
        ctx.beginPath();
        ctx.moveTo(79, 149);
        ctx.lineTo(64, 180);
        ctx.lineTo(80, 180);
        ctx.lineJoin = 'bevel';
        ctx.stroke();
    }

    function drawHat() {
        ctx.fillStyle = '#396693';
        ctx.strokeStyle = '#2b2b2b';
        ctx.lineWidth = 2;
        
        drawOval(90, 675, 80, 0, 2 * Math.PI, 1, 0.17, false);
        drawOval(90, 675, 80, 0, 2 * Math.PI, 1, 0.17, true);
        
        ctx.fillRect(54, 25, 84, 78);
        ctx.strokeRect(54, 25, 84, 78);

        drawOval(96, 76, 42, 0, 2 * Math.PI, 1, 0.35, false);
        drawOval(96, 76, 42, 0, 2 * Math.PI, 1, 0.35, true);
        
        drawOval(96, 291, 42, 0, 2 * Math.PI, 1, 0.35, false);

        drawOval(96, 291, 42, 0, Math.PI, 1, 0.35, true);
    }

    function drawOval(x, y, r, from, to, xScale, yScale, isStroke) {
        ctx.save();
        ctx.beginPath();
        ctx.scale(xScale, yScale);
        ctx.arc(x, y, r, from, to);
        ctx.restore();

        if (isStroke === true) {
            ctx.stroke();
        }
        else {
            ctx.fill();
        }
    }
}