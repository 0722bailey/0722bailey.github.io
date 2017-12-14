// Initial Setup
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth - 5
canvas.height = innerHeight - 5


// Variables
const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

var img = new Image();
img.src = '/stickmen/frame0.png'
var frame = 0;
var frameStart = performance.now();

// Event Listeners
addEventListener('mousemove', event => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init()
})

addEventListener('click', () => {
    console.log(mouse.x+':x '+mouse.y+':y');
})

// Utility Functions
function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
}

function distance(x1, y1, x2, y2) {
    const xDist = x2 - x1
    const yDist = y2 - y1

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}

// Objects
function Object(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
	this.update = function() {
		this.draw()
	}

	this.draw = function() {
		c.beginPath()
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
		c.fillStyle = this.color
		c.fill()
		c.closePath()
	}
}

function Stickman(){
    frame++;
    for(let i = 0; i < 9; i++){
        if (frame == i){
            img.src='/stickmen/frame'+i+'.png'
        }
        else if(frame > 8) {
            frame = 0;
            img.src='/stickmen/frame0.png'
        }
    }
}

// Implementation
let objects
function init() {
    objects = []

    for (let i = 0; i < 400; i++) {
       // objects.push(new Object(50, 50, ));
    }
}



// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    
    // stickfigure test
    if (performance.now() - frameStart > 60){
        Stickman()
        frameStart = performance.now()
    }
    c.drawImage(img, canvas.width / 2 - (105 / 2), 474, 105, 126)
    
    // ground
    c.strokeStyle='white'
    c.beginPath();
    c.moveTo(0, 600);
    c.lineTo(canvas.width, 600);
    c.stroke();
    
    // objects.forEach(object => {
    //  object.update();
    // });
}

init()
animate()
