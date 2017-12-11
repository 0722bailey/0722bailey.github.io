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

function Circle(x, y, dx, dy, radius, colorX, colorY, colorZ) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.colorX = colorX;
    this.colorY = colorY;
    this.colorZ = colorZ;
    
    this.draw = function() {
        
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = 'rgba('+this.colorX+', '+this.colorY+', '+this.colorZ+',         1)';
        c.lineWidth = 5;
        c.stroke();
        ;
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
        
        this.draw();
    }
}

var circleArray = [];

for(var i = 0; i < 150; i++) {
    var radius = 30;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 5;
    var dy = (Math.random() - 0.5) * 5;
    var colorX = Math.round(Math.random() * 255);
    var colorY = Math.round(Math.random() * 255);
    var colorZ = Math.round(Math.random() * 255);
    circleArray.push(new Circle(x, y, dx, dy, radius, colorX, colorY, colorZ));
}

var lastLoop = performance.now();
var fpsInterval = lastLoop;
var fpsDisplay = 0;
function animate() { 
    var thisLoop = performance.now();
    var fps = Math.round(1000 / (thisLoop - lastLoop));
    lastLoop = thisLoop;
    if(performance.now() - fpsInterval > 500) {
        fpsDisplay = fps;
        fpsInterval = performance.now();
    }
   requestAnimationFrame(animate); 
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.font="20px Arial"
    for(var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
    c.fillText(fpsDisplay+" FPS", 25, 25);
}

animate();