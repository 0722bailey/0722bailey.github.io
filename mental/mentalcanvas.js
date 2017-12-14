// Initial Setup
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = window.innerWidth - 5
canvas.height = window.innerHeight - 5

const alerts = [
    "La produit fini est une balance de tout les aspects mentale. Dans cette balance, je suis un personne parfait dans mes rêves qui est très intelligent et qui change le monde artistique et mentalistique. Je visionner un CEO d'un grand companie electronique, ou un artiste qui jouer devant des milles de personnes.",
    "Pour avoir un aspect mentale balancé dans mon vie personnelle, je doit avoir plus des connaissances. Si j'utilise mon cerveaux beaucoup et si j'apprend plus des choses, ça donne mon cerveau des choses a faire, et ça prolongé mon mémoir pour longetemps.",
    "alert 3",
    "alert 4",
    "alert 5",
    "alert 6",
    "alert 7",
    "alert 8",
    "alert 9",
    "alert 10",
    "alert 11",
    "alert 12",
    "alert 13",
    "alert 14",
    "alert 15",
    "alert 16",
    "alert 17",
    "alert 18",
    "alert 19",
    "alert 20",
    "alert 21",
    "alert 22",
    "alert 23",
    "alert 24",
    "alert 25",
    "alert 26",
    "alert 27",
    "alert 28",
    "alert 29",
    "alert 30",
    "alert 31",
    "alert 32",
    "alert 33",
    "alert 34",
    "alert 35",
    "alert 36",
    "alert 37",
    "alert 38",
    "alert 39",
    "alert 40",
];


// Variables
const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

// Event Listeners
addEventListener('mousemove', event => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})

addEventListener('click', event => {
    for (var i = 0; i < 40; i++){
        if (mouse.x > rectangles[i].x - rectangles[i].size / 2 && mouse.x < rectangles[i].x + rectangles[i].size / 2 && mouse.y > rectangles[i].y - rectangles[i].size / 4 && mouse.y < rectangles[i].y + rectangles[i].size / 4){
            window.alert(alerts[i]);
            }
    }
});

addEventListener('resize', () => {
    canvas.width = window.innerWidth - 5
    canvas.height = window.innerHeight - 5

    init()
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

// Rectangle function
var rectangles = [];
function Rectangle(x, y, size, i){
    c.fillStyle='white'
    c.beginPath();
    c.moveTo(x - size/2, y + size/4);
    c.lineTo(x + size/2, y + size/4);
    c.lineTo(x + size/2, y - size/4);
    c.lineTo(x - size/2, y - size/4);
    c.closePath();
    c.stroke();
    c.fill();
    rectangles[i] = {x: x, y: y, size: size}
    c.fillStyle='black'
    if(i > 12){c.font='10px Monospace'}else{c.font='15px Monospace'}
    if (i > 3){
        if (i % 3 == 0){c.fillText(3, x, y);} 
        else{c.fillText(i%3, x, y)}
    }
    
}


// Implementation
var objects
function init() {
    objects = []

    for (var i = 0; i < 2; i++) {
        objects.push(new Object(canvas.width / 2, canvas.height / 2, 30, 'blue'));
    }
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    
    Rectangle(canvas.width / 2, 300, 256, 0);
    for(var i = 1; i < 4; i++){
        Rectangle(canvas.width / 2 -243 + (243* (i - 1)), 450, 128, i);
    }
    for(var i = 4; i < 13; i++){
        Rectangle(canvas.width / 2 - 324 + (81 * (i - 4)), 550, 64, i);
    }
    for(var i = 13; i < 40; i++){
        Rectangle(canvas.width / 2 -390  + (30 * (i - 13)), 625, 25, i);
    }
    
}

init()
animate()
console.log(rectangles)
