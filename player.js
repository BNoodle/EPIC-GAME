function Player(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;


    this.update = function (){
        ctx.fillRect(x, y, width, height)
    }
}