//start
// player start
const player = new Player(PLAYER_X, 450, PLAYER_SIZE, PLAYER_SIZE);
const stonks = new Stonks();

//obsticle start
const obsticles = [];
let obsticleTimer = 0;

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // spawn enemies
    if (obsticleTimer <= 0) {
        obsticleTimer = OBSTICLE_SPAWN_RATE;
        obsticles.push(new Obsticle())
        stonks.logChange();
        
    } else {
        obsticleTimer--;
    }
    
    // update player
    player.update(keys);
    stonks.update();
    
    // update obsticles
    const obsticlesToRemove = []
    for (let obsticle of obsticles) {
        // update obsticles
        obsticle.update()
 
        // check for collisions with obsticles
        if (obsticle.isInsideHitbox(player.x, player.y) || obsticle.isInsideHitbox(player.x + PLAYER_SIZE, player.y) || obsticle.isInsideHitbox(player.x + PLAYER_SIZE, player.y + PLAYER_SIZE) || obsticle.isInsideHitbox(player.x, player.y + PLAYER_SIZE)){
            player.die();
        }

        // find obsticles to despawn
        if (obsticle.x+OBSTICLE_SIZE < 0) {
            obsticlesToRemove.push(obsticles[obsticles.findIndex(object => {
                return object === obsticle;
            })]);
        }
    }
    //actually despawn the obsticles
    for (let i of obsticlesToRemove) {
        obsticles.splice(i, 1)
    }


    // draw ground
    ctx.fillStyle = "black";
    ctx.fillRect(0, canvas.height-GROUND_HEIGHT, canvas.width, GROUND_HEIGHT);

    // scuffed FPS cap
    setTimeout(() => {
        requestAnimationFrame(loop);
      }, 1000 / FPS);
}

loop();
