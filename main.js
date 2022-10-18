function start() {
    obsticles = [new Obsticle()]
    player = new Player(PLAYER_X, 300, PLAYER_SIZE, PLAYER_SIZE);
}

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    obsticles[0].update();
    player.update(keys);

    // draw ground
    ctx.fillStyle = "black";
    ctx.fillRect(0, canvas.height-GROUND_HEIGHT, canvas.width, GROUND_HEIGHT);

    requestAnimationFrame(loop);
}

start();
loop();
