//setup canvas and context
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
canvas.width = GAME_WIDTH;
canvas.height = GAME_HEIGHT;

// get keys that are pressed
const keys = {}
addEventListener('keydown', function (event) {
    keys[event.key] = true;
})
addEventListener('keyup', function (event) {
    delete keys[event.key];
})

// get is mouse down
let mouseDown = false;
addEventListener("mousedown", function(event) {
    mouseDown = true;
})
addEventListener('mouseup', function(event){
    mouseDown = false;
})

// get touch
let touchDown = false;
addEventListener("touchstart", function(event) {
    touchDown = true;
})
addEventListener('touchend', function(event){
    touchDown = false;
})