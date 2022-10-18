function start() {
    obsticles = [new Obsticle()]
    player = new Player(PLAYER_X, 450, PLAYER_SIZE, PLAYER_SIZE);
}

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    obsticles[0].update();
    player.update(keys);

    // draw ground
    ctx.fillStyle = "black";
    ctx.fillRect(0, canvas.height-GROUND_HEIGHT, canvas.width, GROUND_HEIGHT);

    // check for collisions with obsticles
    if (obsticles[0].isInsideHitbox(player.x, player.y) || obsticles[0].isInsideHitbox(player.x + PLAYER_SIZE, player.y) || obsticles[0].isInsideHitbox(player.x + PLAYER_SIZE, player.y + PLAYER_SIZE) || obsticles[0].isInsideHitbox(player.x, player.y + PLAYER_SIZE)){
        console.log("yoyoyo")
    }

    setTimeout(() => {
        requestAnimationFrame(loop);
      }, 1000 / FPS);
}

start();
loop();
