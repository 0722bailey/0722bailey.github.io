// Initial Setup
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

// Variables
var mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
};

// Event Listeners
addEventListener('mousemove', function (event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

addEventListener('resize', function () {
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    init();
});

addEventListener('click', function () {
   if (mouse.x < canvas.width / 2 && mouse.y < canvas.height / 2) {
       window.open('mental.html', '_self');
   }
    else if (mouse.x > canvas.width / 2 && mouse.y < canvas.height / 2) {
       window.open('spiritual.html', '_self');
   }
    else if (mouse.x < canvas.width / 2 && mouse.y > canvas.height / 2) {
       window.open('physical.html', '_self');
    }
    else {
       window.open('emotional.html', '_self');
    }
});

// Utility Functions
function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
    var xDist = x2 - x1;
    var yDist = y2 - y1;

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

// Objects
function Particle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.radians = Math.random() * Math.PI * 2;
    this.distanceFromCenter = randomIntFromRange (50, 300);
    this.lastMouse = {x: x, y: y};
    
    this.update = function () {
        const lastPoint = {x: this.x, y: this.y};
        // Move points over time
        this.radians += 0.05;
        
        // drag effect
        this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.1
        this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.1
        
        
        // circular motion
        this.x = x + Math.cos(this.radians) * this.distanceFromCenter;
        this.y = y + Math.sin(this.radians) * this.distanceFromCenter;
        console.log();
        
        if (Math.cos(this.radians) > 0 && Math.sin(this.radians) > 0) {
            this.color = 'rgba(255, 0, 0, 1)';
        }
        else if(Math.sin(this.radians) > 0 && Math.cos(this.radians) < 0){
            this.color = 'rgba(0, 0, 0, 1)';
        }
        else if(Math.sin(this.radians) < 0 && Math.tan(this.radians) > 0){
            this.color = 'rgba(255, 255, 255, 1)';
        }
        else{
            this.color = 'rgba(255, 255, 0, 1)';
        }
        
        this.draw(lastPoint);
        
    };

    this.draw = function (lastPoint) {
        c.beginPath();
        c.strokeStyle = this.color;
        c.lineWidth = this.radius;
        c.moveTo(lastPoint.x, lastPoint.y);
        c.lineTo(this.x, this.y);
        c.stroke();
        c.closePath();
        
    };
}


// Implementation
var particles;
function init() {
    particles = [];

    for (var i = 0; i < 100; i++) {
        const radius = (Math.random() * 2) + 1;
        particles.push(new Particle(canvas.width / 2, canvas.height / 2, radius, 'blue'));
    }
}
//fps counter variables
var lastLoop = performance.now();
var fpsInterval = lastLoop;
var fpsDisplay = 0;
console.log(performance.now())

// Animation Loop
function animate() {
    //fps counter
    var thisLoop = performance.now();
    var fps = Math.round(1000 / (thisLoop - lastLoop));
    lastLoop = thisLoop;
    if(performance.now() - fpsInterval > 500) {
        fpsDisplay = fps;
        fpsInterval = performance.now();
    }
    c.fillStyle="rgba(100, 100, 100, 1)";
    c.fillRect(0, 0, 120, 80);
    c.fillStyle = "black";
    c.font = '20px Georgia';
    c.fillText(fpsDisplay+' fps', 30, 30)
    requestAnimationFrame(animate);
   // background
    c.fillStyle = 'rgba(100, 100, 100, 0.07)';
    c.fillRect(0, 0, canvas.width, canvas.height);
    
    // spinny things inside
    for(var i = 0; i < particles.length; i++) {
        particles[i].update();
    }
}

init();
c.fillStyle = 'rgba(100, 100, 100, 1)';
c.fillRect(0, 0, canvas.width, canvas.height);
animate();