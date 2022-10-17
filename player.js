function Player(x, y, width, height){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.vy = 0

    this.update = function (){
        this.vy += GRAVITY
        this.y -= this.vy

        if (this.y+this.height > canvas.height-GROUND_HEIGHT) {
            this.y = canvas.height-GROUND_HEIGHT-this.height
            this.vy = 0
        }

        // draw player on screen
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}