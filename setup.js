//setup canvas and context
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
canvas.width = 1200;
canvas.height = 675;

// get keys that are pressed
keys = {}
addEventListener('keydown', function (event) {
    keys[event.key] = true;
})
addEventListener('keyup', function (event) {
    delete keys[event.key];
})