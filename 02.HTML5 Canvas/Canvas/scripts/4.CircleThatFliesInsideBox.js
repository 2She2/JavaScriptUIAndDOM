flyingCircle();

function flyingCircle() {
    var canvas = document.getElementById('the-canvas'),
        ctx = canvas.getContext('2d'),
        WIDTH = canvas.width,
        HEIGHT = canvas.height,
        x = 10,
        y = 150,
        radius = 10,
        updateXRate = 2,
        updateYRate = 2;

    ctx.fillStyle = 'green';
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 3;

    drawCircle();

    function drawCircle() {
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
        x += updateXRate;
        y += updateYRate;

        if (x <= 0) {
            updateXRate *= -1;
        }
        if (x >= canvas.width) {
            updateXRate *= -1
        }
        if (y <= 0) {
            updateYRate *= -1
        }
        if (y >= canvas.height) {
            updateYRate *= -1
        }

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();

        window.requestAnimationFrame(drawCircle);
    }
}