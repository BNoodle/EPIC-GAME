function Obsticle(){
    this.x = 1200;
    this.y = 175;
    this.update = function (){
        ctx.fillRect(this.x, this.y, OBSTICLE_SIZE, OBSTICLE_SIZE);
        this.x -= MOVE_SPEED;
    }
}