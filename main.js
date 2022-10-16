function start() {
    player = new Player(300, 300, 100, 100);
}

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.update();
    requestAnimationFrame(loop);
}

start();
loop();
