function start() {
    obsticles = []
    player = new Player(PLAYER_X, 300, PLAYER_SIZE, PLAYER_SIZE);
}

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    obsticle.update();
    player.update();

    // draw ground
    ctx.fillStyle = "black";
    ctx.fillRect(0, canvas.height-GROUND_HEIGHT, canvas.width, GROUND_HEIGHT);

    requestAnimationFrame(loop);
}

start();
loop();
