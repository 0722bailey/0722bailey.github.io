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

var physical_1 = new Image();
physical_1.src = 'https://thebark.com/sites/default/files/canineplaymyths350.jpg'

var physical_2 = new Image();
physical_2.src = 'http://www.thewalkingencyclopedia.com/wp-content/uploads/2017/09/Exercise-.jpg'

var physical_3 = new Image();
physical_3.src = 'http://www.thefitindian.com/wp-content/uploads/2013/03/natural-and-heatlhy-food.jpg'

var physical_4 = new Image();
physical_4.src = 'https://ecurrent.fit.edu/files/2016/04/bigstock-Man-comfortably-sleeping-in-hi-15694625.jpg'

var quote1 = new Image();
quote1.src = 'https://i.pinimg.com/736x/1a/2e/e6/1a2ee6f2ff14ec665a36d6115c0572c9--i-dont-always-workout-quotes.jpg'

var quote2 = new Image();
quote2.src = 'https://i.pinimg.com/originals/65/b2/30/65b230cbaf50093de80f0f8b48f71d03.jpg'

var quote3 = new Image()
quote3.src = 'https://i.pinimg.com/originals/88/6d/a7/886da72583bfe905c90bb30de51ffbe3.jpg'

var alerts = [
    'Jouer avec mon chien, Luno. Les jeux qui je peux jouer avec il est: tir à la corde, rapporte, des promenades, etc.',
    "l'exercise chaque jour. Le 7 minute exercise application est un très bon méthode d'exercise si je n'ai pas beaucoup de temp",
    "Alimentation saine. Si je ne bois pas des boissons gazeuse ou si je ne mange pas des cochonneries, je peux aider avec mes habitutes alimentaires. Aussi, si je mange de nourriture cuisinée à la maison ou mange de nourriture saine, ça va aider aussi. ",
    'sommeil équilibré. Si je dorme pour 8 heures MINIMUM chaque jour, mon sommeil va être équilibré. Je dois éteind les électroniques à 9h00 et dorme a 10h00.'
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
    if(mouse.x > canvas.width + 550 - increment && mouse.x < canvas.width + 550 - increment + 350 && mouse.y > 150 && mouse.y < 150 + 363 ){
        window.alert(alerts[0])
    }
    if(mouse.x > canvas.width + 950 - increment && mouse.x < canvas.width + 950 + 310 - increment && mouse.y > 200 && mouse.y < 400 ){
        window.alert(alerts[1])
    }
    if(mouse.x > canvas.width + 1310 - increment && mouse.x < canvas.width + 1310 + 575 - increment && mouse.y > 150 && mouse.y < 150 + 333){
        window.alert(alerts[2])
    }
    if(mouse.x > canvas.width + 1950 - increment && mouse.x < canvas.width + 1950 + 3888 / 10 - increment && mouse.y > 150 && mouse.y < 150 + 2592 / 10){
        window.alert(alerts[3])
    }
})

addEventListener('keydown', event => {
    if (event.code == 'Space' || event.code == 'KeyW') {
        console.log('yes')
    }
    else {
        console.log(event)
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


var increment = 0;
// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    
    // rect passing by
    increment += 4
    c.fillStyle = 'white'
    c.font='20px Monospace'
    c.fillText('Cliquer sur chaque image pour un message bref', canvas.width - increment, 300)
    c.drawImage(physical_1, canvas.width + 550 - increment, 150, 350, 363)
    c.drawImage(physical_2, canvas.width + 950 - increment, 200, 310, 200)
    c.drawImage(physical_3, canvas.width + 1310 - increment, 150, 575, 333)
    c.drawImage(physical_4, canvas.width + 1950 - increment, 150, 3888 / 10, 2592 / 10)
    
    if (canvas.width + 1950 + 388.8 - increment < 0){
        increment = 0;
    }
    
    // stickfigure
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
    
    if(canvas.height > 750 && canvas.width > 700){
        c.drawImage(quote1, 50, 600, 240, 178)
        c.drawImage(quote2, canvas.width / 2 - 100, 600, 200, 200)
        c.drawImage(quote3, canvas.width - 250, 600, 200, 200)
    }
    
    // objects.forEach(object => {
    //  object.update();
    // });
}
init()
animate()
