function Player(x, y, width, height){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.vy = 0;
    this.onGround = false;

    this.update = function (keys){
        // jump if space is pressed
        if ((" " in keys || mouseDown === true || touchDown === true) && this.onGround === true) {
            this.vy = JUMP_VELOCITY;
        }

        // do gravity
        this.vy += GRAVITY;
        this.y -= this.vy;

        // ground collision
        if (this.y+this.height > canvas.height-GROUND_HEIGHT) {
            this.y = canvas.height-GROUND_HEIGHT-this.height;
            this.vy = 0;
            this.onGround = true;
        } else {
            this.onGround = false;
        }

        // draw player on screen
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    this.die = function (){
        location.reload();
    }
}