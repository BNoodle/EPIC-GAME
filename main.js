function start() {
    player = new Player(300, 300, 100, 100);
    obsticles = []
}

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    obsticle.update();
    player.update();
    requestAnimationFrame(loop);
}

start();
loop();
