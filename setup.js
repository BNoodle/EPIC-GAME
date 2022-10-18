//setup canvas and context
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
canvas.width = GAME_WIDTH;
canvas.height = GAME_HEIGHT;

// get keys that are pressed
keys = {}
addEventListener('keydown', function (event) {
    keys[event.key] = true;
})
addEventListener('keyup', function (event) {
    delete keys[event.key];
})