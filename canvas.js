const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
canvas.width = 1200;
canvas.height = 675;

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(animate);
    main();
}

animate();