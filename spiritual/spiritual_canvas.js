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
img.src = '/stickmen/meditate.png'
var frame = 0;
var frameStart = performance.now();

var alerts = [
    'universal chakra',
    'third eye chakra',
    'throat chakra',
    'heart chakra',
    'solar plexus chakra',
    'sacral chakra',
    'root chakra' 
]

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
    if(mouse.x > canvas.width / 2 - 8 && mouse.x < canvas.width / 2 + 8 && mouse.y > 300 - 8 && mouse.y < 300 + 8){
        window.alert(alerts[0])
    }
        
    for(let i = 0; i < 48; i++){
        if(mouse.x > chakra_array[i].x - 8 && mouse.x < chakra_array[i].x + 8 && mouse.y > chakra_array[i].y - 8 && mouse.y < chakra_array[i].y + 8){
            window.alert(alerts[Math.ceil(i / 8)])
        }
    }
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
var chakra_array = [];
function Chakra(x, y, radius, color, i) {
    this.x = canvas.width / 2
    this.y = 300
    this.radius = radius
    this.color = color
    this.radians = i * Math.PI / 4
    this.newx = 0;
    this.newy = 0;
	this.update = function() {
        if(y==0){this.radians += 1 / x}else{this.radians -= 1 / x}
        this.newx = this.x + Math.cos(this.radians) * x
        this.newy = this.y + Math.sin(this.radians) * x
		this.draw()
        chakra_array[i] = {x: this.newx, y: this.newy}
	}

	this.draw = function() {
        c.lineWidth=1
		c.beginPath()
		c.arc(this.newx, this.newy, this.radius, 0, Math.PI * 2, false)
		c.fillStyle = this.color
		c.fill()
        c.stroke()
		c.closePath()
	}
}



// Implementation
let chakras
function init() {
    chakras = []
    for(let i = 0; i < 8; i++){
    chakras.push(new Chakra(30, 0, 8, 'purple', i))    
    }
    for(let i = 8; i < 16; i++){
    chakras.push(new Chakra(50, 1, 8, 'blue', i))    
    }
    for(let i = 16; i < 24; i++){
    chakras.push(new Chakra(80, 0, 8, 'green', i))    
    }
    for(let i = 24; i < 32; i++){
    chakras.push(new Chakra(100, 1, 8, 'yellow', i))    
    }
    for(let i = 32; i < 40; i++){
    chakras.push(new Chakra(120, 0, 8, 'orange', i))    
    }
    for(let i = 40; i < 48; i++){
    chakras.push(new Chakra(140, 1, 8, 'red', i))    
    }
}


var increment = 0;
var y = 0;
// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    
    // stickfigure test
    increment += 0.05
    y = Math.sin(increment) * 30 + 540
    c.drawImage(img, canvas.width / 2 - 75, y , 150, 150)
    
    // ground
    c.strokeStyle='black'
    c.lineWidth=10
    c.beginPath();
    c.moveTo(0, 750);
    c.lineTo(canvas.width, 750);
    c.stroke();
    
    c.fillStyle = 'white'
    c.lineWidth=1
    c.beginPath();
    c.arc(canvas.width / 2 , 300, 16, 0, Math.PI * 2, false);
    c.fill();
    c.stroke();
    chakras.forEach(chakra => {
        chakra.update();
    })
    // objects.forEach(object => {
    //  object.update();
    // });
}

init()
animate()
console.log(chakra_array)