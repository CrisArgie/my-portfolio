// var canvas = document.querySelector('#canvas'),
//     ctx = canvas.getContext('2d');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// var x = canvas.width / 2;
// var y = canvas.height / 2;
// var radius = 20;
// var targetX = x; // Set the initial target position to the circle's starting position.
// var targetY = y;
// var ease = 0.1; // The amount to ease the circle's movement.

// canvas.addEventListener("mousemove", function(event) {
//     targetX = event.clientX;
//     targetY = event.clientY;
// });

// function drawCircle() {
//     var dx = targetX - x;
//     var dy = targetY - y;

//     x += dx * ease;
//     y += dy * ease;

//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.beginPath();
//     ctx.arc(x, y, radius, 0, 2 * Math.PI);
//     ctx.fillStyle = "blue";
//     ctx.fill();
//     ctx.closePath();
//     requestAnimationFrame(drawCircle);
// }

// drawCircle();