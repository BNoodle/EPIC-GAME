function start() {

}

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(animate);
    main();
}

start();
loop();