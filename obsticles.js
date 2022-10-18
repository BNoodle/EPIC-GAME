function Obsticle(){;
    this.x = canvas.width;
    this.y = canvas.height - (GROUND_HEIGHT + OBSTICLE_SIZE);

    this.update = function (){
        ctx.fillStyle = "red"
        ctx.fillRect(this.x, this.y, OBSTICLE_SIZE, OBSTICLE_SIZE);

        this.x -= SCROLL_SPEED;

    }

    this.isInsideHitbox = function (x, y){
        if (x >= this.x && x <= this.x + OBSTICLE_SIZE){
            if (y >= this.y && y <= this.y + OBSTICLE_SIZE) return true;
        }
        return false;
    }
}

