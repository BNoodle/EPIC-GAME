let GAME_WIDTH;
let GAME_HEIGHT;
if (window.innerWidth/window.innerHeight >= 16/9){
    GAME_HEIGHT = window.innerHeight;
    GAME_WIDTH = GAME_HEIGHT * 16/9;
} else{
    GAME_WIDTH = window.innerWidth;
    GAME_HEIGHT = GAME_WIDTH * 9/16;
}
const SCROLL_SPEED = GAME_HEIGHT * 10/675;
const OBSTICLE_SIZE = GAME_HEIGHT * 75/675;
const GROUND_HEIGHT = GAME_HEIGHT * 100/675;
const PLAYER_SIZE = GAME_HEIGHT * 75/675;
const PLAYER_X = GAME_HEIGHT * 75/675;
const GRAVITY = GAME_HEIGHT * -1/675; //pixels per frame
const JUMP_VELOCITY = GAME_HEIGHT * 20/675;
const FPS = 60
const OBSTICLE_SPAWN_RATE = 60 // in fps