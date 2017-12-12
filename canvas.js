var canvas = document.querySelector('canvas')
    ;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
// arc
/* for (var i = 0; i < 100; i++) {
    var x = Math.random() * innerWidth
        ;
    var y = Math.random() * innerHeight
        ;
    var colorX = Math.round(Math.random() * 255);
    var colorY = Math.round(Math.random() * 255);
    var colorZ = Math.round(Math.random() * 255);
    c.strokeStyle = 'rgba('+colorX+', '+colorY+', '+colorZ+', 1)';
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.stroke();  
}    
*/
var mouse = {
    x: undefined,
    y: undefined
}

var colorArray = [
    '#1B3E59',
    '#F2F0F0',
    '#FFAC00',
    '#BF0404',
    '#730202',
];
maxRadius = 30;
mouseToCircle = 120; // distance from mouse to circle to instantiate radius growing

window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
})

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight; 
    
    init();
})

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    
    this.draw = function() {
        c.fillStyle = this.color;
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.lineWidth = 10;
        c.stroke();
        c.fill();
    }
    this.update = function() {
        if (this.x + this.radius > innerWidth || 
        this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || 
        this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy; 
        
        // interactivity
        
        if (mouse.x - this.x < mouseToCircle && mouse.x - this.x > -mouseToCircle && mouse.y - this.y < mouseToCircle && mouse.y - this.y > -mouseToCircle && this.radius < maxRadius) {
            this.radius += 2;
        }
        else if (mouse.x - this.x > mouseToCircle || mouse.x - this.x > -mouseToCircle || mouse.y - this.y < mouseToCircle || mouse.y - this.y > -mouseToCircle) {
            if (this.radius > this.minRadius) 
               this.radius -= 2;  
                 }
        
        this.draw();
    }
}

var circleArray = [];


//fps counter variables
var lastLoop = performance.now();
var fpsInterval = lastLoop;
var fpsDisplay = 0;
console.log(performance.now())

// circle generation
function init() {
    circleArray = [];
   for(var i = 0; i < 200; i++) {
    var radius = Math.random() * 10 + 5
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 5;
    var dy = (Math.random() - 0.5) * 5;
    circleArray.push(new Circle(x, y, dx, dy, radius));
} 
}

function animate() { 
    // fps counter
    var thisLoop = performance.now();
    var fps = Math.round(1000 / (thisLoop - lastLoop));
    lastLoop = thisLoop;
    if(performance.now() - fpsInterval > 500) {
        fpsDisplay = fps;
        fpsInterval = performance.now();
    }
   requestAnimationFrame(animate); 
    // canvas drawing
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.font="20px Arial"
    for(var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
    c.fillStyle = 'white';
    c.fillRect(0, 0, 110, 40);
    c.fillStyle = 'black';
    c.fillText(fpsDisplay+" FPS", 25, 25);
}
init();
animate();
